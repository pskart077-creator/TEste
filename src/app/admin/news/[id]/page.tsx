import { notFound } from "next/navigation";
import AdminHeader from "@/components/news/admin/AdminHeader";
import AdminNewsForm from "@/components/news/admin/AdminNewsForm";
import { requireServerAdmin } from "@/lib/news/auth";
import { getAdminNewsById, listNewsCategories, listNewsTags } from "@/lib/news/queries";

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata = {
  title: "Editar Noticia | Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminNewsEditPage({ params }: Props) {
  const session = await requireServerAdmin();
  const { id } = await params;

  const [post, categories, tags] = await Promise.all([
    getAdminNewsById(id),
    listNewsCategories(),
    listNewsTags(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main className="pluggo-news-admin-shell">
      <AdminHeader
        user={{
          displayName: session.displayName,
          role: session.role,
        }}
        activePath="/admin/news"
      />

      <section className="pluggo-news-admin-card">
        <h2 className="pluggo-news-admin-title">Editar noticia</h2>
        <p className="pluggo-news-admin-user">ID interno: {post.id}</p>
      </section>

      <AdminNewsForm
        mode="edit"
        post={{
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content as import("@/lib/news/types").NewsContentDocument,
          coverImageUrl: post.coverImageUrl,
          coverImageAlt: post.coverImageAlt,
          categoryId: post.categoryId,
          status: post.status,
          publishedAt: post.publishedAt?.toISOString() ?? null,
          scheduledAt: post.scheduledAt?.toISOString() ?? null,
          featured: post.featured,
          highlightOnHome: post.highlightOnHome,
          canonicalUrl: post.canonicalUrl,
          allowIndexing: post.allowIndexing,
          seoTitle: post.seoTitle,
          seoDescription: post.seoDescription,
          seoKeywords: post.seoKeywords,
          ogTitle: post.ogTitle,
          ogDescription: post.ogDescription,
          ogImage: post.ogImage,
          twitterTitle: post.twitterTitle,
          twitterDescription: post.twitterDescription,
          ctaTitle: post.ctaTitle,
          ctaDescription: post.ctaDescription,
          ctaButtonLabel: post.ctaButtonLabel,
          ctaButtonUrl: post.ctaButtonUrl,
          tags: post.tags.map((item) => ({
            tagId: item.tagId,
          })),
        }}
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
