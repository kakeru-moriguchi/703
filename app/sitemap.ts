import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/salon.html", "/menu.html", "/blog.html", "/news.html", "/access.html", "/contact.html"];
  return routes.map((route) => ({
    url: `${siteConfig.canonicalUrl}${route}`,
    changeFrequency: route === "" ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
