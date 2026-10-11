import type { Metadata } from "next";
import { Footer, Header, LineButton, PageHero } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `メニュー・料金｜${siteConfig.name}`,
  description: "全身脱毛・パーツ脱毛・ホワイトニング・フェイシャル・ブライダルエステの料金案内。両脇脱毛は税込1,000円。",
};

const fullBody = [
  ["VIO・顔込み", "¥11,500"],
  ["VIO または 顔込み", "¥10,500"],
  ["VIO・顔なし", "¥9,500"],
];

const parts = [
  { price: "¥1,000", names: "両脇／おでこ／頬／口周り／もみあげ／乳輪周り／へそ周り／手の指甲／足の指甲" },
  { price: "¥2,000", names: "胸（乳輪周り込み）／ひじ上／ひじ下／Vライン／Iライン／Oライン" },
  { price: "¥3,000", names: "ヒップ（腰含む）／両ひざ上／両ひざ下（ひざ含む）／お腹全体／背中全体" },
];

const careMenus = [
  ["ピーリング", "¥6,600", "¥3,300"],
  ["オイル保湿ケア", "¥6,600", "¥3,300", "マッサージ付き"],
  ["導入美容液パック", "¥8,800", "¥4,400", "マッサージ付き"],
];

export default function MenuPage() {
  return <><Header /><main>
    <PageHero eyebrow="MENU & PRICE" title="メニュー・料金" lead="都度払いを中心に、気軽に続けられるメニューをご用意しています。" />
    <section className="menu-feature" aria-labelledby="underarm-title"><div><p className="eyebrow">FIRST CHOICE</p><p className="menu-feature__label">まずは気軽に、人気のパーツ脱毛から。</p><h2 id="underarm-title">両脇脱毛</h2></div><p className="menu-feature__price"><span>税込</span><strong>¥1,000</strong></p></section>
    <section className="menu-category" aria-labelledby="hair-removal-title"><header className="menu-category__heading"><span>01</span><div><p className="eyebrow">HAIR REMOVAL</p><h2 id="hair-removal-title">脱毛メニュー</h2></div></header><div className="menu-category__body">
      <div className="menu-block"><div className="menu-block__title"><h3>全身脱毛</h3><p>お好みの範囲に合わせてお選びください。</p></div><div className="price-list">{fullBody.map(([name, price]) => <div key={name}><span>{name}</span><strong>{price}</strong></div>)}</div></div>
      <div className="junior-card"><div><p className="eyebrow">JUNIOR COURSE</p><h3>ジュニア全身脱毛</h3><p>4歳から高校生まで</p></div><strong>¥7,500<small>税別</small></strong></div>
      <div className="menu-block"><div className="menu-block__title"><h3>パーツ別価格</h3><p>気になる箇所を一つずつ選べます。</p></div><div className="parts-list">{parts.map((item) => <article key={item.price}><strong>{item.price}<small>／1パーツ</small></strong><p>{item.names}</p></article>)}</div></div>
      <div className="menu-block"><div className="menu-block__title"><h3>SET</h3><p>まとめてお得なセットメニューです。</p></div><div className="set-grid"><article><h4>顔全体</h4><p><del>単品 ¥5,000</del><strong>¥4,000</strong></p></article><article><h4>VIO</h4><p><del>単品 ¥6,000</del><strong>¥5,000</strong></p></article></div></div>
    </div></section>
    <section className="menu-category menu-category--tint" aria-labelledby="whitening-title"><header className="menu-category__heading"><span>02</span><div><p className="eyebrow">WHITENING</p><h2 id="whitening-title">ホワイトニング</h2></div></header><div className="menu-category__body"><div className="whitening-grid"><article><p>都度払い</p><strong>1回 ¥3,000<small>税込</small></strong></article><article><p>12回 回数券</p><strong>¥30,000</strong><small>1回あたり 税込¥2,500</small></article></div></div></section>
    <section className="menu-category" aria-labelledby="facial-title"><header className="menu-category__heading"><span>03</span><div><p className="eyebrow">FACIAL CARE</p><h2 id="facial-title">フェイシャル</h2></div></header><div className="menu-category__body"><div className="care-list">{careMenus.map(([name, regular, price, note]) => <article key={name}><div><h3>{name}</h3>{note && <p>{note}</p>}</div><p className="care-list__price"><del>{regular}</del><span aria-hidden="true">→</span><strong>{price}</strong></p></article>)}</div></div></section>
    <section className="bridal-menu" aria-labelledby="bridal-title"><div><p className="eyebrow">BRIDAL ESTHETIC</p><h2 id="bridal-title">ブライダルエステ</h2><p>ピーリングと保湿ケアをセットにした特別エステ。背中の脱毛も付いています。</p><p className="bridal-menu__areas">フェイシャル／ネック／ショルダー／アーム／ハンド</p></div><p className="bridal-menu__price"><strong>¥13,500</strong><span>税込</span></p></section>
    <p className="menu-tax-note">※「税込」「税別」の記載があるメニューは、それぞれ表示に従います。その他の料金についてはご予約時にご確認ください。</p>
    <section className="mini-contact"><div><p className="eyebrow">CONSULTATION</p><h2>メニュー選びも、気軽にご相談ください。</h2></div><LineButton /></section>
  </main><Footer /></>;
}

