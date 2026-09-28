import type { Metadata } from "next";
import { Footer, Header, PageHero } from "@/components/site-chrome";
import { newsItems, siteConfig } from "@/lib/site-config";
export const metadata: Metadata = { title: `お知らせ｜${siteConfig.name}`, description: "ビューティーサロン703からのお知らせ。" };
export default function NewsPage() { return <><Header /><main><PageHero eyebrow="NEWS" title="お知らせ" lead="営業やサロンに関する大切なご案内を掲載します。" /><section className="archive-section archive-section--news">{newsItems.length ? newsItems.map((item) => <article key={item.title}><time>{item.publishedAt}</time><h2>{item.title}</h2><p>{item.excerpt}</p></article>) : <div className="archive-empty"><span>NEWS</span><h2>現在、お知らせはありません</h2><p>新しいご案内がある際はこちらに掲載します。</p></div>}</section></main><Footer /></>; }
