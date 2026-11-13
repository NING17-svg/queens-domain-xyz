/**
 * Site configuration — the single source of truth for game-specific metadata.
 *
 * 👉 APPLY TEMPLATE: Change every field here when building a new game wiki.
 * This is part of the CONFIG LAYER — framework code reads from here, never the reverse.
 */

export interface SiteConfig {
  /** Full site name, used in <title> suffix and Organization JSON-LD. e.g. "Anvil Quest Wiki" */
  name: string;
  /** Short name for PWA manifest, mobile logo, and the long-title <title> suffix (>50 chars). e.g. "AQ Wiki" */
  shortName: string;
  /** Site description for Organization JSON-LD and og:site_name. */
  description: string;
  /** Domain without protocol or trailing slash. e.g. "anvilquestwiki.wiki" */
  domain: string;
  /** Hero tagline shown under the site title. */
  tagline: string;
  /** Copyright / legal disclaimer line shown in footer. */
  legalNotice: string;
  /**
   * Optional public contact email — rendered as a mailto link on the contact
   * page when set. AdSense reviewers look for a reachable contact channel;
   * if you run no social channels, set this.
   */
  contactEmail?: string;
  social: {
    /** Official game website URL (the game itself, not the wiki). */
    official: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  /**
   * Canonical URLs about the GAME (Steam page, official site, Wikipedia entry…).
   * Emitted as Organization JSON-LD `sameAs` — helps Google / AI engines link
   * this wiki to the game's knowledge-graph entity.
   */
  sameAs?: string[];
  game: {
    /** Full game name. */
    name: string;
    /** Platform: "Roblox" | "Steam" | "Epic Games" | "Mobile" | ... */
    platform: string;
    /** Developer / studio name. */
    developer: string;
    /** Genre description. */
    genre: string;
    /** ISO release date (optional). */
    releaseDate?: string;
  };
  /**
   * Dimensions of the default OG/Twitter share image (public/images/hero.webp).
   * Emitted as og:image:width / og:image:height so social crawlers can render
   * the share card without downloading the image first.
   */
  ogImageWidth: number;
  ogImageHeight: number;
  /** Default author name for articles without an explicit `author` in frontmatter (E-E-A-T signal). */
  defaultAuthor?: string;
  /** Public GA4 measurement ID. Tracking loads only after consent. */
  gaMeasurementId?: string;
  /** Plausible script URL. Tracking loads only after consent. */
  plausibleScriptSrc?: string;
  /** Public Bing site verification code. */
  bingVerification?: string;
  /** Public AdSense publisher ID; advertising scripts load only after consent. */
  adsenseClient?: string;
  /**
   * Build-time site-type signal, written by apply-template for the non-default
   * presets only ('coupon-hub' | 'tutorial-hub'). Game-wiki forks carry NO
   * line at all (absent = game-wiki), keeping the zero-breaking output
   * byte-identical. Read by presentation-layer variants — e.g. the coupon
   * deals overview on the codes list page.
   */
  siteType?: 'coupon-hub' | 'tutorial-hub';
}

export const site: SiteConfig = {
  name: 'Queen\'s Domain Wiki',
  shortName: 'Queen\'s Domain Guide',
  description: 'Practical Queen\'s Domain walkthroughs and answers for early routes, combat, equipment and exploration on the Isle of Neasied.',
  domain: 'queens-domain.xyz',
  tagline: 'Find your next step across the Isle of Neasied.',
  legalNotice: 'Independent fan guide for Queen\'s Domain. Not affiliated with Freshly Baked Games or Future Friends Games.',
  // Set a real address if you run no social channels — the contact page
  // renders it as a mailto link.
  contactEmail: '',
  social: {
    official: 'https://store.steampowered.com/app/1799840/Queens_Domain/',
  },
  game: {
    name: 'Queen\'s Domain',
    platform: 'Steam',
    developer: 'Freshly Baked Games LLC',
    genre: 'First-person action RPG',
    releaseDate: '2026-10-30',
  },
  // og:image dims of the SHIPPED hero.webp — if you replace public/images/hero.webp,
  // update these in src/config/site.ts to match (wrong dims mis-crop share cards).
  ogImageWidth: 1672,
  ogImageHeight: 941,
  gaMeasurementId: 'G-CBT946KD9N',
  plausibleScriptSrc: 'https://stats.ningshiqi.com/js/pa-R_s9T8Yec_mdcMLmWlTom.js',
  bingVerification: '301CD5703A43F1E7C0C842C1F1A0A1D4',
  adsenseClient: 'ca-pub-4194035852162505',
};

/** Absolute site URL (no trailing slash). Falls back to the Astro `site` config. */
export const siteUrl: string = (process.env.SITE_URL || `https://${site.domain}`).replace(
  /\/$/,
  '',
);

/** Resolved site type — an absent `siteType` line means the default game wiki. */
export const siteType: 'game-wiki' | 'coupon-hub' | 'tutorial-hub' = site.siteType ?? 'game-wiki';
