import type { MetadataRoute } from "next";
import { business, concepts } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${business.url}/`, changeFrequency: "monthly", priority: 1 },
    ...concepts.map(({ slug }) => ({
      url: `${business.url}/work/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
