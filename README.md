<p align="center">
  <a href="https://glaze.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/inline0/glaze/main/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/inline0/glaze/main/.github/logo-light.svg">
      <img alt="Glaze" src="https://raw.githubusercontent.com/inline0/glaze/main/.github/logo-light.svg" width="280">
    </picture>
  </a>
</p>

<p align="center">
  Utility-first animations for GSAP with a Tailwind-style syntax
</p>

<p align="center">
  <img alt="Glaze preview" src="https://raw.githubusercontent.com/inline0/glaze/main/image.png" width="860">
</p>

---

Compose declarative animations with a tiny, readable API that feels like writing utilities.

## Features

- **Breakpoints** - animate at custom screen sizes with `@{size}` syntax
- **Timelines** - compose sequences using `@tl`
- **Dot Notation** - control nested properties in a single token
- **Lightweight** - small runtime footprint
- **Framework Agnostic** - works with any setup that can run GSAP

## Quick Start

```bash
bun add glazejs gsap
# or
npm install glazejs gsap
```

```html
<div
  class="invisible h-20 w-20 rounded-xl bg-amber-500"
  data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut"
></div>
```

## Documentation

Visit `https://glaze.dev` for full docs and examples.

## Development

```bash
bun install
bun run dev:docs
bun run test
```

## GSAP License

Glaze relies on GSAP. Review the GSAP Standard License before shipping:
`https://gsap.com/community/standard-license/`

## License

MIT
