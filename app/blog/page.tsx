import type { Metadata } from "next";
import { Footer, Header, PageHero } from "@/components/site-chrome";
import { blogItems, siteConfig } from "@/lib/site-config";
export const metadata: Metadata = { title: `ブログ｜${siteConfig.name}`, description: "ビューティーサロン703のブログ。" };
export default function BlogPage() { return <><Header /><main><PageHero eyebrow="BLOG" title="ブログ" lead="サロンから、日々のことをお届けします。" /><section className="archive-section">{blogItems.length ? blogItems.map((item) => <article key={item.title}><time>{item.publishedAt}</time><p>{item.category}</p><h2>{item.title}</h2><p>{item.excerpt}</p></article>) : <div className="archive-empty"><span>BLOG</span><h2>ただいま準備中です</h2><p>最初の記事が公開されるまで、もうしばらくお待ちください。</p></div>}</section></main><Footer /></>; }
