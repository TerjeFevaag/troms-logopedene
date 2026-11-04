import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin", "/api/"];
  const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...ai.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
