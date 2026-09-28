import { siteConfig } from "@/lib/site-config";

export const navItems = [
  ["HOME", "/"], ["サロン紹介", "/salon.html"], ["メニュー・料金", "/menu.html"],
  ["ブログ", "/blog.html"], ["お知らせ", "/news.html"], ["アクセス", "/access.html"],
  ["お問い合わせ", "/contact.html"],
] as const;

export function Header() {
  return <header className="site-header"><a className="brand" href="/" aria-label={`${siteConfig.name} ホーム`}><span className="brand__number">703</span><span className="brand__text">BEAUTY SALON</span></a><nav className="desktop-nav" aria-label="メインメニュー">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><details className="mobile-nav"><summary aria-label="メニューを開く"><span /><span /></summary><nav aria-label="スマートフォンメニュー">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav></details></header>;
}

export function Footer() {
  return <><footer><a className="brand brand--footer" href="/"><span className="brand__number">703</span><span className="brand__text">BEAUTY SALON</span></a><p>{siteConfig.address}<br />営業時間 {siteConfig.hours}</p><p className="copyright">© Beauty Salon 703</p></footer><div className="mobile-sticky" aria-label="予約・お問い合わせ"><a href={siteConfig.phoneHref}>電話</a><LineButton compact /></div></>;
}

export function PhotoPlaceholder({ label, note, className = "" }: { label: string; note: string; className?: string }) {
  return <figure className={`photo-placeholder ${className}`}><div className="photo-placeholder__mark" aria-hidden="true">703</div><figcaption><strong>{label}</strong><span>{note}</span></figcaption></figure>;
}

export function LineButton({ compact = false }: { compact?: boolean }) {
  if (!siteConfig.lineUrl) return <span className={`line-button is-pending ${compact ? "is-compact" : ""}`} aria-disabled="true"><span>LINEで予約・相談</span><small>URL設定待ち</small></span>;
  return <a className={`line-button ${compact ? "is-compact" : ""}`} href={siteConfig.lineUrl}>LINEで予約・相談</a>;
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></section>;
}
