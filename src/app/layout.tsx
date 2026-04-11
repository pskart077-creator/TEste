import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const bodyFont = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pluggocapital.com"),
  title: {
    default: "Plug Go | Hub financeiro para pessoas e empresas",
    template: "%s | Plug Go",
  },
  description:
    "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
  keywords: [
    "Plug Go",
    "hub financeiro",
    "conta digital",
    "cobranças",
    "seguros",
    "cripto",
    "soluções financeiras",
    "plataforma financeira",
    "pessoas e empresas",
  ],
  applicationName: "Plug Go",
  authors: [{ name: "Plug Go" }],
  creator: "Plug Go",
  publisher: "Plug Go",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pluggocapital.com",
    siteName: "Plug Go",
    title: "Plug Go | Hub financeiro para pessoas e empresas",
    description:
      "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plug Go | Hub financeiro para pessoas e empresas",
    description:
      "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}