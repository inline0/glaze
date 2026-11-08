---
title: "Selectors"
description: "Target elements with data attributes or classes"
path: "selectors"
order: 40
section: "Usage"
meta_title: "Selectors"
meta_description: "Target elements with data attributes or classes"
---

# Selectors

By default, Glaze searches for elements with the `data-animate` attribute and
builds the animation based on the value of that attribute. This page covers
the three options that change which elements Glaze reads, `dataAttribute`,
`className` and `element`, and the bracket selectors that point an animation at
other elements. The utilities inside the string are described in
[Syntax](/docs/syntax).

## How elements are found

When `glaze()` runs, and again on every `refresh()` or watch-mode rebuild, it
walks every element inside the root and keeps the ones that carry the
configured attribute or, in class mode, a class with the configured prefix. The
root element itself counts too when it carries one. Elements are read in
document order.

Each element found this way gets its own timeline, unless it sits inside a
`tl` element or links to one with `tl:<id>`. In that case it is added to that
timeline instead. See [Timelines](/docs/timelines) for how grouping works.

## Custom attribute

Use a different data attribute:

```js
glaze({
  lib: { gsap: { core: gsap } },
  dataAttribute: "data-move",
})
```

Now Glaze will look for `data-move` instead of `data-animate`:

```html
<div data-move="from:opacity-0"></div>
```

The option replaces the attribute rather than adding one. With the setting
above, an element that still carries `data-animate` is ignored. Use it when
another script on the page already reads `data-animate`, or when you want
markup to name the attribute after your project.

In [watch mode](/docs/install#options), Glaze observes the configured
attribute, so changing the value of `data-move` on an element schedules a
rebuild.

## Class-based syntax

Prefer classes over data attributes? Enable class mode:

```js
glaze({
  lib: { gsap: { core: gsap } },
  className: "animate",
})
```

Now you can write animations as classes:

```html
<div class="animate-from:opacity-0|duration-1"></div>
```

This works well if you're already using utility-first CSS and want your
animations to feel similar. Class mode is also useful when a template system
lets you add classes to an element but not arbitrary attributes.

Glaze reads every class that starts with the prefix followed by a dash
(`animate-` here) and removes that part. Classes without the prefix are left
alone, so animation classes can sit next to styling classes on the same
element. You can split an animation over several classes:

```html
<div class="card animate-from:opacity-0 animate-from:y-24"></div>
```

Responsive classes accept the breakpoint either after or before the prefix.
Both of these run only when the `lg` [breakpoint](/docs/breakpoints) matches:

```html
<div class="animate-@lg:from:opacity-0"></div>
<div class="@lg:animate-from:opacity-0"></div>
```

[Presets](/docs/presets) work the same way in classes, for example
`animate-preset-fadeIn`.

Class mode does not turn off the data attribute. When an element has both,
Glaze joins them into one string: the attribute value first, then the prefixed
classes in the order they appear in the `class` attribute.

```html
<div
  class="animate-from:opacity-0 animate-@lg:from:y-50"
  data-animate="from:duration-1"
></div>
```

This element animates from `opacity: 0` over one second at every size, and also
from `y: 50` when `lg` matches. Because the strings are joined, the same rule
applies as within a single string: when two parts set the same property, the
later one wins. Here the class value overrides the attribute value for `x`:

```html
<div class="animate-to:x-100" data-animate="to:x-50|y-20"></div>
```

The element animates to `x: 100` and `y: 20`.

With `watch` enabled in class mode, Glaze also observes `class` changes. Adding
an `animate-` class to an element, or changing the classes of an element Glaze
already reads or animates, schedules a rebuild. Inside an element with a
relative selector, class changes on its descendants do too, because they can
change what the selector matches. Class changes on other elements do not, and
that includes the ancestors of animated elements, so toggling a dark mode class
on `<html>` or a scroll lock class on `<body>` leaves running animations alone.
A class change that makes an element newly match a global selector is not
noticed either; call `refresh()` after it.

## Limiting the search

Glaze searches the whole `document` by default. Pass `element` to only animate
elements inside a container:

```js
glaze({
  lib: { gsap: { core: gsap } },
  element: document.querySelector("#app"),
})
```

`element` accepts an `Element` or a `Document`. It limits three things:

- Only the root and its descendants are scanned for animation utilities.
  Elements elsewhere on the page are ignored, even when they carry
  `data-animate`.
- Watch mode observes mutations inside the root only.
- `destroy()` cleans up only what this instance created, so other parts of the
  page keep their animations.

This makes `element` the option to reach for in component frameworks. Create
one instance per mounted component with the component's root element, and call
`destroy()` when it unmounts, as shown in
[Refresh and cleanup](/docs/install#refresh-and-cleanup). Give separate
instances roots that do not overlap; an element inside two roots is animated by
both instances.

## Targeting other elements

The options above decide which elements Glaze reads. A bracket selector at the
start of a segment decides which elements the animation is applied to. Without
one, the animation targets the element that carries the utilities.

### Relative selectors

A selector that starts with `&` is resolved from the element itself, with `&`
standing for that element. It is queried with `querySelectorAll`, so it can
match several elements:

```html
<ul data-animate="[&>li]:from:opacity-0|y-20|stagger-0.1">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

`[&>li]` matches the direct `li` children. The `stagger` value spaces their
start times 0.1 seconds apart. Use this when one element should control the
animation of a list, grid or group of children without adding an attribute to
each child.

Write spaces as underscores. `[&_p]` becomes `& p` and matches every `p` inside
the element at any depth:

```html
<article data-animate="[&_p]:from:opacity-0|stagger-0.2">
  <p>First paragraph</p>
  <div><p>Nested paragraph</p></div>
</article>
```

Every underscore in a selector is turned into a space, so a class name that
contains an underscore cannot be matched this way.

`[&]` on its own resolves to the element itself. It is mostly used as a value,
for example `scrollTrigger.trigger-[&]` in [ScrollTrigger](/docs/scrolltrigger)
and timeline [defaults](/docs/defaults).

### Global selectors

A selector without `&` is passed to the animation engine as a string. GSAP and
Motion both resolve it against the whole document, not against the element or
the `element` root:

```html
<h2 data-animate="[.badge]:from:opacity-0|scale-0.5|duration-0.3">Inbox</h2>
<span class="badge">3</span>
```

This animates every `.badge` on the page, wherever it sits. Prefer relative selectors inside
reusable components, because a global selector also matches copies of the
component elsewhere on the page.

### Limits

Each element has one target. When several segments carry a selector, the last
one applies to all of the element's states. Here both `from` and `to` are
applied to the `p`, not the `h1`:

```html
<div data-animate="[&>h1]:from:opacity-0 [&>p]:to:x-20">
  <h1>Title</h1>
  <p>Text</p>
</div>
```

To animate two groups differently, put the utilities on the children
themselves, or group them in a [timeline](/docs/timelines).

A selector ends at the first `]`, so selectors that contain brackets, such as
attribute selectors like `[&>[data-item]]`, are not supported. Use a class or
element selector instead.

Selectors combine with breakpoints in the order described in
[Syntax](/docs/syntax#selectors), for example `@lg:[&>div]:from:opacity-0`.
