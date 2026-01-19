import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as Example } from "./example-A2hLqarH.mjs";
let _markdown = '\n\nimport { Example } from "../../components/Example";\n\nGlaze features a deep integration with GSAPs\n[matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia\\(\\)/) functionality,\nwhich allows you to define breakpoints and create responsive animations.\n\nSetup [#setup]\n\nTo use breakpoints, you need to define them inside the configuration object.\n\n```js\nimport glaze from "glazejs";\n\nglaze({\n  lib: { gsap: { core: gsap } },\n  breakpoints: {\n    default: "(min-width: 640px)",\n    md: "(min-width: 768px)",\n    lg: "(min-width: 1024px)",\n  },\n});\n```\n\nThe `default` breakpoint will be used if no other breakpoint is defined. In the\nexample above, all animations will be applied from `640px` and up. If no default\nis defined, `(min-width: 1px)` will be used.\n\nUsage [#usage]\n\nBreakpoints are defined at the start of the animation string.\n\n```html copy\n<div\n  class="h-20 w-20 rounded-xl bg-lime-500 lg:invisible"\n  data-animate="@lg:from:duration-1|autoAlpha-0|rotate-180|xPercent-[-100]|ease-power2.inOut"\n></div>\n```\n\n<Example>\n  {`\n    <div\n    class="h-20 w-20 rounded-xl bg-lime-500 lg:invisible"\n    data-animate="@lg:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut|scrollTrigger.trigger-[&]"\n    ></div>\n    `}\n</Example>\n\nThis will animate all the set properties when the screen width is 640px or more.\n\nYou can also define multiple breakpoints:\n\n```html copy\n<div\n  class="h-20 w-20 rounded-xl bg-lime-500 sm:invisible"\n  data-animate="@sm:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut @lg:from:background-[red]"\n></div>\n```\n\n<Example>\n  {`\n    <div\n    class="h-20 w-20 rounded-xl bg-orange-500 lg:invisible"\n    data-animate="@sm:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut|scrollTrigger.trigger-[&] @lg:from:background-[red]"\n    ></div>\n    `}\n</Example>\n\nIn this example, the animation will be applied when the screen width is `768px`\nor more. If the screen width is `1024px` or more, the background color will\nchange in addition to the other animations.\n';
let frontmatter = {
  "title": "Breakpoints"
};
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Glaze features a deep integration with GSAPs\nmatchMedia functionality,\nwhich allows you to define breakpoints and create responsive animations."
  }, {
    "heading": "setup",
    "content": "To use breakpoints, you need to define them inside the configuration object."
  }, {
    "heading": "setup",
    "content": "The default breakpoint will be used if no other breakpoint is defined. In the\nexample above, all animations will be applied from 640px and up. If no default\nis defined, (min-width: 1px) will be used."
  }, {
    "heading": "usage",
    "content": "Breakpoints are defined at the start of the animation string."
  }, {
    "heading": "usage",
    "content": "This will animate all the set properties when the screen width is 640px or more."
  }, {
    "heading": "usage",
    "content": "You can also define multiple breakpoints:"
  }, {
    "heading": "usage",
    "content": "In this example, the animation will be applied when the screen width is 768px\nor more. If the screen width is 1024px or more, the background color will\nchange in addition to the other animations."
  }],
  "headings": [{
    "id": "setup",
    "content": "Setup"
  }, {
    "id": "usage",
    "content": "Usage"
  }]
};
const toc = [{
  depth: 2,
  url: "#setup",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "Setup"
  })
}, {
  depth: 2,
  url: "#usage",
  title: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: "Usage"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.p, {
      children: ["Glaze features a deep integration with GSAPs\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/",
        children: "matchMedia"
      }), " functionality,\nwhich allows you to define breakpoints and create responsive animations."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "setup",
      children: "Setup"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "To use breakpoints, you need to define them inside the configuration object."
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: jsxRuntimeExports.jsxs(_components.code, {
          children: [jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "import"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " glaze "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "from"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "glazejs"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ";"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line"
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "glaze"
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  lib: { gsap: { core: gsap } },"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  breakpoints: {"
            })
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    default: "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"(min-width: 640px)"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    md: "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"(min-width: 768px)"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.span, {
            className: "line",
            children: [jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    lg: "
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"(min-width: 1024px)"'
            }), jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", jsxRuntimeExports.jsx(_components.span, {
            className: "line",
            children: jsxRuntimeExports.jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["The ", jsxRuntimeExports.jsx(_components.code, {
        children: "default"
      }), " breakpoint will be used if no other breakpoint is defined. In the\nexample above, all animations will be applied from ", jsxRuntimeExports.jsx(_components.code, {
        children: "640px"
      }), " and up. If no default\nis defined, ", jsxRuntimeExports.jsx(_components.code, {
        children: "(min-width: 1px)"
      }), " will be used."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Breakpoints are defined at the start of the animation string."
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
              children: '"h-20 w-20 rounded-xl bg-lime-500 lg:invisible"'
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
              children: '"@lg:from:duration-1|autoAlpha-0|rotate-180|xPercent-[-100]|ease-power2.inOut"'
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
class="h-20 w-20 rounded-xl bg-lime-500 lg:invisible"
data-animate="@lg:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut|scrollTrigger.trigger-[&]"
></div>
`
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "This will animate all the set properties when the screen width is 640px or more."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "You can also define multiple breakpoints:"
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
              children: '"h-20 w-20 rounded-xl bg-lime-500 sm:invisible"'
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
              children: '"@sm:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut @lg:from:background-[red]"'
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
class="h-20 w-20 rounded-xl bg-orange-500 lg:invisible"
data-animate="@sm:from:duration-1|autoAlpha-0|rotate-360|xPercent-[-100]|ease-power2.inOut|scrollTrigger.trigger-[&] @lg:from:background-[red]"
></div>
`
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In this example, the animation will be applied when the screen width is ", jsxRuntimeExports.jsx(_components.code, {
        children: "768px"
      }), "\nor more. If the screen width is ", jsxRuntimeExports.jsx(_components.code, {
        children: "1024px"
      }), " or more, the background color will\nchange in addition to the other animations."]
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
