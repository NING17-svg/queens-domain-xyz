# Queen's Domain Wiki

Independent fan guide for [Queen's Domain](https://store.steampowered.com/app/1799840/Queens_Domain/), published at [queens-domain.xyz](https://queens-domain.xyz). This is a standalone A/B experiment. It is not connected to any other Queen's Domain site or the `game-workflow` central registry.

## Local development

Requires Node.js 22.23.4+ and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check-config
pnpm check-content
pnpm typecheck
pnpm build
pnpm check-links
```

The site is a static Astro build. `dist/` is the Cloudflare Pages output directory. Production canonical URLs use `https://queens-domain.xyz`; site identity is in `src/config/site.ts`, and articles are MDX files under `src/content/wiki/en/`.

## Sources and attribution

Each guide links to the source material used for its game facts. The illustrated hero is original fan art, not a game screenshot. Site code derives from [AnvilWiki](https://github.com/PNGTRID/AnvilWiki) under its [MIT license](LICENSE).
