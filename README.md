<p align="center">
  <a href="https://glaze.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="./.github/logo-light.svg">
      <img alt="Glaze" src="./.github/logo-light.svg" width="280">
    </picture>
  </a>
</p>

<p align="center">
  Utility-first animations for GSAP with a Tailwind-style syntax
</p>

---

Compose declarative animations with a tiny, readable API that feels like writing utilities.

## Features

- **GSAP Powered** - Built on top of GSAP for production-grade animation control
- **Utility Syntax** - Author animations in HTML with concise, composable tokens
- **Responsive by Default** - Define responsive animation variants with breakpoint modifiers
- **Timeline Ready** - Sequence or parallelize motion with timeline utilities
- **Dot Notation** - Target nested GSAP properties with a readable dot syntax
- **Lightweight** - Small runtime footprint with minimal overhead

## Quick Start

```bash
bun add glazejs gsap
```

```js
import gsap from "gsap";
import glaze from "glazejs";

glaze({
  lib: {
    gsap: {
      core: gsap,
    },
  },
});
```

```html
<div
  class="h-20 w-20 rounded-xl bg-amber-500"
  data-animate="from:opacity-0|y-50|duration-1|ease-power2.inOut"
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
