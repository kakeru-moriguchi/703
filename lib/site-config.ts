export const siteConfig = {
  name: "ビューティーサロン703",
  owner: "加藤直美",
  address: "宮崎県宮崎市桜町8-15",
  phone: "090-5748-1938",
  phoneHref: "tel:09057481938",
  email: "beautysalon703.naomi@gmail.com",
  hours: "7:00〜21:00",
  hoursNote: "ご希望の時間については、お気軽にご相談ください。",
  station: "神宮駅",
  parking: "あり",
  lineUrl: "",
  socialLinks: [] as { label: string; url: string }[],
  canonicalUrl: "https://beauty-salon-703.hirochama-yu-ta-2515.chatgpt.site",
} as const;

export type MenuItem = { name: string; description?: string; price?: string; duration?: string; image?: string };
export const menuItems: MenuItem[] = [];

export type PostSummary = { title: string; publishedAt: string; excerpt?: string; category?: string; image?: string };
export const newsItems: PostSummary[] = [];
export const blogItems: PostSummary[] = [];
