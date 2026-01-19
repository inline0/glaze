import{j as e}from"./main-BC7D7XD2.js";let s=`

It is possible to set default values for timelines and elements using the
\`defaults\` option.

\`\`\`js copy
glaze({
  defaults: {
    tl: "defaults:ease-power2.inOut scrollTrigger.trigger-[&]",
    element: "to:x-500",
  },
});
\`\`\`

Every timeline will use the \`ease-power2.inOut\` easing function and every
element will move to the left by 500 pixels. On top of that, every element will
be scrolled into view when it is being scrolled into view.

Note on timelines [#note-on-timelines]

Glaze creates a new timeline for each element by default, even if not marked
with \`tl\`. This means that the \`tl\` defaults option is perfect for applying
global defaults to all timelines and elements. (ScrollTrigger, ease etc.)
`,a={title:"Defaults"},o={contents:[{heading:void 0,content:`It is possible to set default values for timelines and elements using the
defaults option.`},{heading:void 0,content:`Every timeline will use the ease-power2.inOut easing function and every
element will move to the left by 500 pixels. On top of that, every element will
be scrolled into view when it is being scrolled into view.`},{heading:"note-on-timelines",content:`Glaze creates a new timeline for each element by default, even if not marked
with tl. This means that the tl defaults option is perfect for applying
global defaults to all timelines and elements. (ScrollTrigger, ease etc.)`}],headings:[{id:"note-on-timelines",content:"Note on timelines"}]};const r=[{depth:2,url:"#note-on-timelines",title:e.jsx(e.Fragment,{children:"Note on timelines"})}];function t(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[`It is possible to set default values for timelines and elements using the
`,e.jsx(n.code,{children:"defaults"})," option."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"glaze"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  defaults: {"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    tl: "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"defaults:ease-power2.inOut scrollTrigger.trigger-[&]"'}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    element: "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:x-500"'}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  },"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})})]})})}),`
`,e.jsxs(n.p,{children:["Every timeline will use the ",e.jsx(n.code,{children:"ease-power2.inOut"}),` easing function and every
element will move to the left by 500 pixels. On top of that, every element will
be scrolled into view when it is being scrolled into view.`]}),`
`,e.jsx(n.h2,{id:"note-on-timelines",children:"Note on timelines"}),`
`,e.jsxs(n.p,{children:[`Glaze creates a new timeline for each element by default, even if not marked
with `,e.jsx(n.code,{children:"tl"}),". This means that the ",e.jsx(n.code,{children:"tl"}),` defaults option is perfect for applying
global defaults to all timelines and elements. (ScrollTrigger, ease etc.)`]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as _markdown,h as default,a as frontmatter,o as structuredData,r as toc};
