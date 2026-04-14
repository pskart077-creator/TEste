import type { ReactNode } from "react";
import "@/styles/news/news-admin.css";
import "@/styles/news/news-editor.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="pluggo-news-admin-layout">{children}</div>;
}
