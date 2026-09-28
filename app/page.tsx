import { blogItems, newsItems, siteConfig } from "@/lib/site-config";
import { Footer, Header, LineButton, PhotoPlaceholder } from "@/components/site-chrome";

export default function Home() {
  return <><Header /><main id="home">
    <section className="hero" aria-labelledby="hero-title"><div className="hero__copy"><p className="eyebrow">MIYAZAKI · SAKURAMACHI</p><h1 id="hero-title">ほっとできる場所で、<br />自分のための美容時間。</h1><p className="hero__lead">気負わず、あなたのペースで。<br />朝7時から夜9時まで、気軽に相談できる美容サロンです。</p><div className="hero__actions"><LineButton /><a className="text-link" href={siteConfig.phoneHref}>電話で予約する <span aria-hidden="true">→</span></a></div></div><PhotoPlaceholder className="hero__photo" label="ファーストビュー写真" note="推奨：横長 3:2 ／ 店内またはサロンの空気感が伝わる写真" /><p className="hero__side-note">beauty, ease &amp; quiet time</p></section>

    <section className="introduction home-intro" aria-labelledby="intro-title"><div className="section-number">01</div><div className="intro__heading"><p className="eyebrow">INTRODUCTION</p><h2 id="intro-title">いつもの自分で、<br />ふらりと来られる場所に。</h2></div><div className="intro__body"><p>「気軽に通えるサロンにしたい」。その想いを大切に、初めての方もいつもの方も安心して相談できる場所を目指しています。</p><a className="text-link" href="/salon.html">サロンについて <span aria-hidden="true">→</span></a></div></section>

    <section className="home-split"><div className="home-split__copy"><p className="eyebrow">MENU &amp; PRICE</p><h2>自分のペースで選べる<br />美容時間。</h2><p>正式なメニュー・料金はただいま掲載準備中です。内容が決まり次第、分かりやすくご案内します。</p><a className="text-link" href="/menu.html">メニュー・料金を見る <span aria-hidden="true">→</span></a></div><PhotoPlaceholder className="home-split__photo" label="メニュー写真" note="推奨：縦長 4:5" /></section>

    <section className="home-updates" aria-label="最新情報"><div><div className="updates__heading"><p className="eyebrow">NEWS</p><h2>お知らせ</h2></div>{newsItems.length ? newsItems.slice(0, 3).map((item) => <article key={item.title}><time>{item.publishedAt}</time><h3>{item.title}</h3></article>) : <p className="empty-copy">現在、お知らせはありません。</p>}<a className="text-link" href="/news.html">お知らせ一覧 <span aria-hidden="true">→</span></a></div><div className="home-updates__blog"><div className="updates__heading"><p className="eyebrow">BLOG</p><h2>ブログ</h2></div>{blogItems.length ? blogItems.slice(0, 3).map((item) => <article key={item.title}><time>{item.publishedAt}</time><h3>{item.title}</h3></article>) : <p className="empty-copy">ブログはただいま準備中です。</p>}<a className="text-link" href="/blog.html">ブログ一覧 <span aria-hidden="true">→</span></a></div></section>

    <section className="home-access"><div><p className="eyebrow">ACCESS</p><h2>宮崎市桜町で<br />お待ちしています。</h2><p>{siteConfig.address}<br />{siteConfig.station}／駐車場 {siteConfig.parking}<br />営業時間 {siteConfig.hours}</p><a className="text-link" href="/access.html">アクセス詳細 <span aria-hidden="true">→</span></a></div><div className="access-section__map" role="img" aria-label="地図掲載エリア"><span>MAP</span><p>地図は掲載準備中です</p></div></section>

    <section className="contact-section"><p className="eyebrow">RESERVATION / CONTACT</p><h2>まずは、気軽にご相談ください。</h2><p>ご予約前のご相談も歓迎です。</p><div className="contact-section__actions"><a className="text-link" href="/contact.html">予約・お問い合わせへ <span aria-hidden="true">→</span></a><a className="phone-button" href={siteConfig.phoneHref}><small>電話で予約する</small>{siteConfig.phone}</a></div></section>
  </main><Footer /></>;
}
