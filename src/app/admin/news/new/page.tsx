import AdminHeader from "@/components/news/admin/AdminHeader";
import AdminNewsForm from "@/components/news/admin/AdminNewsForm";
import { requireServerAdmin } from "@/lib/news/auth";
import { listNewsCategories, listNewsTags } from "@/lib/news/queries";

export const metadata = {
  title: "Nova Noticia | Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminNewsNewPage() {
  const session = await requireServerAdmin();
  const [categories, tags] = await Promise.all([listNewsCategories(), listNewsTags()]);

  return (
    <main className="pluggo-news-admin-shell">
      <AdminHeader
        user={{
          displayName: session.displayName,
          role: session.role,
        }}
        activePath="/admin/news/new"
      />

      <section className="pluggo-news-admin-card">
        <h2 className="pluggo-news-admin-title">Criar noticia</h2>
        <p className="pluggo-news-admin-user">Preencha os dados editoriais, conteudo e SEO.</p>
      </section>

      <AdminNewsForm
        mode="create"
        categories={categories.map((category) => ({
          id: category.id,
          name: category.name,
        }))}
        tags={tags.map((tag) => ({
          id: tag.id,
          name: tag.name,
        }))}
      />
    </main>
  );
}
