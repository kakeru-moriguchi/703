import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: `${siteConfig.name}｜宮崎市桜町の気軽に通える美容サロン`,
  description: "宮崎市桜町のビューティーサロン703。気軽に相談でき、自分のペースで通える、落ち着いた美容時間を大切にしています。神宮駅近く、駐車場あり。",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ja_JP", title: siteConfig.name, description: "気軽に通える、ほっとできる。宮崎市桜町のビューティーサロン703。", siteName: siteConfig.name },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "BeautySalon", name: siteConfig.name, founder: siteConfig.owner, address: { "@type": "PostalAddress", addressRegion: "宮崎県", addressLocality: "宮崎市", streetAddress: "桜町8-15", addressCountry: "JP" }, telephone: siteConfig.phone, email: siteConfig.email, openingHours: "Mo-Su 07:00-21:00" };
  return <html lang="ja"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
