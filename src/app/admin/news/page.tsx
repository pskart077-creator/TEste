import { adminNewsQuerySchema } from "@/lib/news/validators";
import { requireServerAdmin } from "@/lib/news/auth";
import { listAdminNews, listNewsCategories, listNewsTags } from "@/lib/news/queries";
import AdminHeader from "@/components/news/admin/AdminHeader";
import AdminNewsList from "@/components/news/admin/AdminNewsList";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function pickString(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export const metadata = {
  title: "Admin News",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminNewsPage({ searchParams }: Props) {
  const session = await requireServerAdmin();

  const queryRaw = await searchParams;
  const baseQuery = new URLSearchParams();
  for (const [key, rawValue] of Object.entries(queryRaw)) {
    if (key === "page" || rawValue === undefined) {
      continue;
    }
    const value = Array.isArray(rawValue) ? rawValue[0] : rawValue;
    if (!value) {
      continue;
    }
    baseQuery.set(key, value);
  }

  const query = adminNewsQuerySchema.parse({
    page: pickString(queryRaw.page),
    pageSize: pickString(queryRaw.pageSize),
    search: pickString(queryRaw.search),
    status: pickString(queryRaw.status),
    categoryId: pickString(queryRaw.categoryId),
    tagId: pickString(queryRaw.tagId),
    orderBy: pickString(queryRaw.orderBy),
  });

  const [result, categories, tags] = await Promise.all([
    listAdminNews({
      page: query.page,
      pageSize: query.pageSize,
      search: query.search,
      status: query.status,
      categoryId: query.categoryId,
      tagId: query.tagId,
      orderBy: query.orderBy,
    }),
    listNewsCategories(),
    listNewsTags(),
  ]);

  return (
    <main className="pluggo-news-admin-shell">
      <AdminHeader
        user={{
          displayName: session.displayName,
          role: session.role,
        }}
        activePath="/admin/news"
      />

      <AdminNewsList
        items={result.items}
        pagination={result.pagination}
        filters={{
          search: query.search,
          status: query.status,
          categoryId: query.categoryId,
          tagId: query.tagId,
          orderBy: query.orderBy,
        }}
        categories={categories.map((category) => ({
          id: category.id,
          name: category.name,
        }))}
        tags={tags.map((tag) => ({
          id: tag.id,
          name: tag.name,
        }))}
        role={session.role}
        baseQuery={baseQuery.toString()}
      />
    </main>
  );
}
