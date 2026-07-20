import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/utils/constants";
import { getAllServiceSlugs } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/why-therapy",
    "/faq",
    "/connect",
    "/book-appointment",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const servicePages = getAllServiceSlugs().map(
    (slug) => `/services/${slug}`
  );

  const allPages = [...staticPages, ...servicePages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/services/") ? 0.7 : 0.8,
  }));
}
