# Glaze

Utility-based animations for the web. A declarative animation syntax that converts data attributes into GSAP timeline operations.

## Project Overview

Glaze parses animation strings from `data-animate` attributes and converts them into GSAP animations. It provides a utility-class-like syntax for animations, similar to how Tailwind CSS works for styling.

**Package name:** `glazejs`
**Version:** 2.0.1
**License:** MIT
**Homepage:** https://glaze.dev

---

## Monorepo Structure

```
glaze/
├── packages/core/           # Main library (published as glazejs)
│   ├── src/
│   │   ├── index.ts        # Main entry (~528 lines)
│   │   ├── types.ts        # Type definitions
│   │   └── utils/          # 11 utility files
│   ├── tests/
│   │   ├── unit/           # Vitest unit tests
│   │   └── e2e/            # Playwright E2E tests
│   ├── dist/               # Build output (ES module)
│   ├── scripts/
│   │   └── postbuild.js    # Minification + file copying
│   ├── vite.config.ts
│   └── vitest.config.unit.ts
├── apps/docs/              # Documentation site (Next.js + OneDocs)
│   ├── src/app/            # Next.js App Router
│   ├── content/docs/       # MDX documentation (11 files)
│   ├── components/         # Hero, example components
│   └── onedocs.config.tsx
├── package.json            # Workspace root
├── biome.json              # Linting config
└── .github/                # Logo assets
```

---

## Package Exports

```ts
// Default export
import glaze from "glazejs";

// Type exports
import type {
  GlazeAnimationCollection,
  GlazeAnimationObject,
  GlazeConfig,
  GlazeTimeline,
  PlainObject,
} from "glazejs";
```

---

## Animation Syntax

### Data Attribute Format

```
[breakpoint][selector]:state:properties
```

**Examples:**
```html
<!-- Basic fade in -->
<div data-animate="from:opacity-0|duration-1">

<!-- With selector -->
<div data-animate="[&>h1]:from:opacity-0|y-50">

<!-- Responsive -->
<div data-animate="@lg:from:opacity-0|duration-1">

<!-- Timeline -->
<div data-animate="tl/main from:opacity-0|stagger-0.1">
```

### Components

1. **Breakpoint** (optional): `@{name}:` - Media query activation
2. **Selector** (optional): `[selector]:` - Target child elements
3. **State** (required): `from`, `to`, or both for `fromTo`
4. **Properties** (required): Pipe-separated `property-value` pairs

### Property Syntax

| Pattern | Example | Result |
|---------|---------|--------|
| Simple | `opacity-0` | `{opacity: 0}` |
| Nested | `scale.x-2` | `{scale: {x: 2}}` |
| Negative | `y-[-50]` | `{y: -50}` |
| Spaces | `boxShadow-[0_0_50px]` | `{boxShadow: "0 0 50px"}` |
| Boolean | `yoyo-true` | `{yoyo: true}` |
| Ease | `ease-power2.inOut` | `{ease: "power2.inOut"}` |

---

## Configuration

```ts
import glaze from "glazejs";
import gsap from "gsap";

glaze({
  // Required: GSAP instance
  lib: { gsap: { core: gsap } },

  // Optional: responsive breakpoints
  breakpoints: {
    default: "(min-width: 1px)",
    sm: "(min-width: 640px)",
    lg: "(min-width: 1024px)",
  },

  // Optional: data attribute name (default: "data-animate")
  dataAttribute: "data-animate",

  // Optional: root element (default: document)
  element: document,

  // Optional: class-based syntax
  className: "animate",

  // Optional: named presets
  presets: {
    fadeIn: "from:opacity-0|duration-1",
    slideUp: "from:y-50|opacity-0|duration-0.5",
  },

  // Optional: defaults
  defaults: {
    tl: "ease-power2.inOut",
    element: "duration-1",
  },

  // Optional: watch for DOM mutations
  watch: { debounceTime: 500 },
});
```

---

## Key Utilities

| File | Purpose |
|------|---------|
| `parseToObject.ts` | Convert animation string → JS object |
| `parseMediaQueries.ts` | Segregate animations by breakpoint |
| `parseTimeline.ts` | Extract timeline metadata |
| `castValue.ts` | Type conversion (string → number/boolean) |
| `getSelectorOrElement.ts` | Resolve selectors to DOM elements |
| `getSelectorFromBracket.ts` | Extract bracket notation content |
| `mergeDeep.ts` | Deep merge objects (with prototype pollution protection) |
| `debounce.ts` | Debounce mutation observer callbacks |
| `isObject.ts` | Type guard for plain objects |

---

## Commands

```bash
# Development
bun run dev              # Docs site on port 4000
bun run dev:docs         # Same as above

# Building
bun run build            # Build core + docs
bun run build:docs       # Build docs only

# Testing
bun run test             # All tests (unit + e2e)
bun run test:unit        # Vitest unit tests
bun run test:e2e         # Playwright E2E

# Quality
bun run lint             # Biome lint
bun run format           # Biome format
bun run typecheck        # TypeScript check
```

### Package-specific (packages/core)

```bash
bun run build            # Test → TypeScript → Vite → Postbuild
bun run dev              # Vite dev server
bun run release          # Build + npm publish
bun run test:unit-watch  # Vitest watch mode
```

---

## Build Process

1. Unit tests must pass
2. TypeScript compilation
3. Vite builds ES module → `dist/index.es.js`
4. Postbuild:
   - Terser minification
   - Copy README.md to package
   - Copy CHANGELOG.md to docs

**Output:** Single ES module with TypeScript definitions

---

## Testing

### Unit Tests (Vitest)
- Environment: jsdom
- Location: `tests/unit/**/*.test.ts`
- Coverage: 10 test files

### E2E Tests (Playwright)
- Location: `tests/e2e/**/*.spec.ts`
- Tests viewport sizes and animation states
- Validates CSS transforms

---

## Dependencies

**Runtime:** None (GSAP is external/peer)

**Dev Dependencies:**
- `vite@^7.3.1` - Build tool
- `vitest@^4.0.17` - Unit testing
- `@playwright/test@^1.57.0` - E2E testing
- `gsap@^3.14.2` - For tests/examples
- `typescript@^5.9.3`
- `terser@^5.46.0` - Minification

---

## Animation Flow

1. **Init:** `glaze(config)` validates GSAP, merges config
2. **Collect:** Find elements with `data-animate`, process timelines first
3. **Parse:** `parseMediaQueries()` → `parseToObject()` → animation objects
4. **Animate:** GSAP matchMedia context, apply animations per breakpoint
5. **Watch:** Optional MutationObserver for dynamic updates

---

## Docs Site

Built with Next.js 16 + OneDocs + Fumadocs.

**Content:** `apps/docs/content/docs/`
- index.mdx, install.mdx, syntax.mdx, timelines.mdx
- breakpoints.mdx, scrolltrigger.mdx, selectors.mdx
- defaults.mdx, presets.mdx, changelog.mdx

**Components:** `apps/docs/components/`
- `hero.tsx` - Landing page hero with GSAP animation
- `example.tsx` - Interactive animation demos
