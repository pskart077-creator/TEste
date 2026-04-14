import { randomBytes, scryptSync } from "node:crypto";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `s1$${salt}$${hash}`;
}

function normalizeRole(input) {
  const value = String(input || "SUPER_ADMIN").trim().toUpperCase();
  if (value === "SUPER_ADMIN") return UserRole.SUPER_ADMIN;
  if (value === "EDITOR") return UserRole.EDITOR;
  if (value === "AUTHOR") return UserRole.AUTHOR;
  return UserRole.SUPER_ADMIN;
}

async function main() {
  const roles = [
    { key: UserRole.SUPER_ADMIN, name: "Super Admin" },
    { key: UserRole.EDITOR, name: "Editor" },
    { key: UserRole.AUTHOR, name: "Author" },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { key: role.key },
      update: { name: role.name },
      create: role,
    });
  }

  const adminEmail = String(process.env.ADMIN_EMAIL || "admin@pluggo.local").trim().toLowerCase();
  const adminPassword = String(process.env.ADMIN_PASSWORD || "ChangeMe_123!");
  const adminName = String(process.env.ADMIN_NAME || "Plug Go Admin").trim();
  const adminRoleKey = normalizeRole(process.env.ADMIN_ROLE);

  const adminRole = await prisma.role.findUnique({ where: { key: adminRoleKey } });
  if (!adminRole) {
    throw new Error("Role not found for admin seed.");
  }

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      displayName: adminName,
      passwordHash: hashPassword(adminPassword),
      roleId: adminRole.id,
      isActive: true,
    },
    create: {
      email: adminEmail,
      displayName: adminName,
      passwordHash: hashPassword(adminPassword),
      roleId: adminRole.id,
      isActive: true,
    },
  });

  const categorySeeds = [
    {
      name: "Atualizacoes Plug Go",
      slug: "atualizacoes-plug-go",
      description: "Comunicados oficiais, lancamentos e novidades.",
      color: "#0ea5e9",
    },
    {
      name: "Seguranca",
      slug: "seguranca",
      description: "Boas praticas, hardening e compliance.",
      color: "#22c55e",
    },
    {
      name: "Mercado",
      slug: "mercado",
      description: "Analises de tendencias e movimentos do setor.",
      color: "#f59e0b",
    },
  ];

  for (const category of categorySeeds) {
    await prisma.newsCategory.upsert({
      where: { slug: category.slug },
      update: category,
      create: category,
    });
  }

  const tagSeeds = [
    { name: "produto", slug: "produto" },
    { name: "tecnologia", slug: "tecnologia" },
    { name: "seguranca", slug: "seguranca-tag" },
    { name: "escalabilidade", slug: "escalabilidade" },
  ];

  for (const tag of tagSeeds) {
    await prisma.newsTag.upsert({
      where: { slug: tag.slug },
      update: tag,
      create: tag,
    });
  }

  console.log("Seed concluido com sucesso.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
