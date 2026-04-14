import { UserRole } from "@prisma/client";
import AdminHeader from "@/components/news/admin/AdminHeader";
import TaxonomyManager from "@/components/news/admin/TaxonomyManager";
import { requireServerAdmin } from "@/lib/news/auth";
import { listNewsCategories } from "@/lib/news/queries";

export const metadata = {
  title: "Categorias | Admin News",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminNewsCategoriesPage() {
  const session = await requireServerAdmin([UserRole.SUPER_ADMIN, UserRole.EDITOR]);
  const categories = await listNewsCategories();

  return (
    <main className="pluggo-news-admin-shell">
      <AdminHeader
        user={{
          displayName: session.displayName,
          role: session.role,
        }}
        activePath="/admin/news/categories"
      />

      <section className="pluggo-news-admin-card">
        <h2 className="pluggo-news-admin-title">Gerenciar categorias</h2>
        <p className="pluggo-news-admin-user">Categorias principais do ecossistema de noticias.</p>
      </section>

      <TaxonomyManager
        type="categories"
        items={categories.map((category) => ({
          id: category.id,
          name: category.name,
          slug: category.slug,
          description: category.description,
          color: category.color,
          allowIndexing: category.allowIndexing,
          postCount: category.postCount,
        }))}
      />
    </main>
  );
}
