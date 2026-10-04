export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig = {
  name: "Otterly Lost Wiki",
  shortName: "Otterly Lost",
  logoText: "OL",
  tagline: "Guides, Achievements & Exploration",
  description: "Explore Otterly Lost Wiki with adventure guides, achievement tips, exploration details, collectibles, characters, and helpful resources for Otto's cozy sea otter journey.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://otterlylost-wiki.top",
  supportEmail: "support@otterlylost-wiki.top",
  gameUrl: "https://store.steampowered.com/app/3861710/Otterly_Lost/",
  heroVideoId: "252_aes1OFw", // Otterly Lost | Demo Release Trailer
  social: {
    discord: "https://steamcommunity.com/app/3861710/",
    twitter: "https://x.com/SoulworksInt",
    youtube: "https://www.youtube.com/watch?v=252_aes1OFw",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
} as const satisfies SiteConfig;
