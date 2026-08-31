import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, locales, type Locale } from "@/lib/content";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang as Locale];
  if (!c) return {};
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      languages: { ru: "/ru", en: "/en" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();

  return (
    <html lang={lang} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
