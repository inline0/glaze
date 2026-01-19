import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as Example } from "./example-A2hLqarH.mjs";
let _markdown = '\n\nimport { Example } from "../../components/Example";\n\nGlaze is an animation framework that combines the power of\n[GSAP](https://greensock.com/gsap/) and utility-based document authoring à la\n[Tailwind](https://tailwindcss.com) to create a simple, yet powerful, way to\ncompose animations for the web.\n\n```html copy\n<div\n  class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"\n  data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut"\n></div>\n```\n\n<Example>\n  {`\n    <div\n    class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"\n    data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut|scrollTrigger.trigger-[&]">\n    </div>\n    `}\n</Example>\n\nFeatures [#features]\n\n* **Breakpoints** Define custom breakpoints and animate elements at different\n  screen sizes using `@{size}` syntax. Uses GSAPs\n  [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia\\(\\)/).\n* **Timelines** Compose timelines using `@tl`.\n* **Dot notation** Use dot notation to control nested properties inside the\n  animation object, e.g. `to:scale-1.5|scrollTrigger.trigger-[&]`.\n* **Lightweight** \\~3kb minified and gzipped.\n* **Library agnostic** Can be extended to work with other animation libraries.\n  (coming soon)\n\nCredits [#credits]\n\nThe API and syntax of Glaze is heavily inspired by\n[Tailwind](https://tailwindcss.com) and [MasterCSS](https://css.master.co/).\n\nLicensing and Requirements [#licensing-and-requirements]\n\nGlaze is designed to work seamlessly with [GSAP](https://greensock.com/gsap/).\nTo use Glaze, you must include GSAP in your project.\n\nGSAP Licensing [#gsap-licensing]\n\nGSAP is subject to its own licensing terms. Before incorporating GSAP with\nGlaze, ensure you review and comply with the\n[GSAP Standard License](https://gsap.com/community/standard-license/).\n\nGlaze itself is licensed under the MIT License. For more details, see the\nLICENSE file in the repository.\n';
let frontmatter = {
  "title": "Introduction"
};
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Glaze is an animation framework that combines the power of\nGSAP and utility-based document authoring à la\nTailwind to create a simple, yet powerful, way to\ncompose animations for the web."
  }, {
    "heading": "features",
    "content": "Breakpoints Define custom breakpoints and animate elements at different\nscreen sizes using @{size} syntax. Uses GSAPs\nmatchMedia."
  }, {
    "heading": "features",
    "content": "Timelines Compose timelines using @tl."
  }, {
    "heading": "features",
    "content": "Dot notation Use dot notation to control nested properties inside the\nanimation object, e.g. to:scale-1.5|scrollTrigger.trigger-[&]."
  }, {
    "heading": "features",
    "content": "Lightweight ~3kb minified and gzipped."
  }, {
    "heading": "features",
    "content": "Library agnostic Can be extended to work with other animation libraries.\n(coming soon)"
  }, {
    "heading": "credits",
    "content": "The API and syntax of Glaze is heavily inspired by\nTailwind and MasterCSS."
  }, {
    "heading": "licensing-and-requirements",
    "content": "Glaze is designed to work seamlessly with GSAP.\nTo use Glaze, you must include GSAP in your project."
  }, {
    "heading": "gsap-licensing",
    "content": "GSAP is subject to its own licensing terms. Before incorporating GSAP with\nGlaze, ensure you review and comply with the\nGSAP Standard License."
  }, {
    "heading": "gsap-licensing",
    "content": "Glaze itself is licensed under the MIT License. For more details, see the\nLICENSE file in the repository."
  }],
  "headings": [{
    "id": "features",
    "content": "Features"
  }, {
    "id": "credits",
    "content": "Credits"
  }, {
    "id": "licensing-and-requirements",
    "content": "Licensing and Requirements"
  }, {
    "id": "gsap-licensing",
    "content": "GSAP Licensing"
  }]
};
const toc = [{
  depth: 2,
  url: "#features",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "Features"
  })
}, {
  depth: 2,
  url: "#credits",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "Credits"
  })
}, {
  depth: 2,
  url: "#licensing-and-requirements",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "Licensing and Requirements"
  })
}, {
  depth: 3,
  url: "#gsap-licensing",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "GSAP Licensing"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.p, {
      children: ["Glaze is an animation framework that combines the power of\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://greensock.com/gsap/",
        children: "GSAP"
      }), " and utility-based document authoring à la\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://tailwindcss.com",
        children: "Tailwind"
      }), " to create a simple, yet powerful, way to\ncompose animations for the web."]
    }), "\n", jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: jsxRuntimeExports.jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "div"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  class"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"h-20 w-20 rounded-xl bg-amber-500 sm:invisible"'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "  data-animate"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "="
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut"'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "></"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#22863A",
                "--shiki-dark": "#85E89D"
              },
              children: "div"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", jsxRuntimeExports.jsx(Example, {
      children: `
<div
class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut|scrollTrigger.trigger-[&]">
</div>
`
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Breakpoints"
        }), " Define custom breakpoints and animate elements at different\nscreen sizes using ", jsxRuntimeExports.jsx(_components.code, {
          children: "@{size}"
        }), " syntax. Uses GSAPs\n", jsxRuntimeExports.jsx(_components.a, {
          href: "https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/",
          children: "matchMedia"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Timelines"
        }), " Compose timelines using ", jsxRuntimeExports.jsx(_components.code, {
          children: "@tl"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Dot notation"
        }), " Use dot notation to control nested properties inside the\nanimation object, e.g. ", jsxRuntimeExports.jsx(_components.code, {
          children: "to:scale-1.5|scrollTrigger.trigger-[&]"
        }), "."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Lightweight"
        }), " ~3kb minified and gzipped."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Library agnostic"
        }), " Can be extended to work with other animation libraries.\n(coming soon)"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "credits",
      children: "Credits"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["The API and syntax of Glaze is heavily inspired by\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://tailwindcss.com",
        children: "Tailwind"
      }), " and ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://css.master.co/",
        children: "MasterCSS"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "licensing-and-requirements",
      children: "Licensing and Requirements"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Glaze is designed to work seamlessly with ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://greensock.com/gsap/",
        children: "GSAP"
      }), ".\nTo use Glaze, you must include GSAP in your project."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "gsap-licensing",
      children: "GSAP Licensing"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["GSAP is subject to its own licensing terms. Before incorporating GSAP with\nGlaze, ensure you review and comply with the\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://gsap.com/community/standard-license/",
        children: "GSAP Standard License"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Glaze itself is licensed under the MIT License. For more details, see the\nLICENSE file in the repository."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  _markdown,
  MDXContent as default,
  frontmatter,
  structuredData,
  toc
};
