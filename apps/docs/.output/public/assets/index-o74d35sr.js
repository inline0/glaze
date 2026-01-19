import{j as e}from"./main-BC7D7XD2.js";import{E as t}from"./example-B9BCQj0A.js";let o=`

import { Example } from "../../components/Example";

Glaze is an animation framework that combines the power of
[GSAP](https://greensock.com/gsap/) and utility-based document authoring à la
[Tailwind](https://tailwindcss.com) to create a simple, yet powerful, way to
compose animations for the web.

\`\`\`html copy
<div
  class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
  data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut"
></div>
\`\`\`

<Example>
  {\`
    <div
    class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
    data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut|scrollTrigger.trigger-[&]">
    </div>
    \`}
</Example>

Features [#features]

* **Breakpoints** Define custom breakpoints and animate elements at different
  screen sizes using \`@{size}\` syntax. Uses GSAPs
  [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia\\(\\)/).
* **Timelines** Compose timelines using \`@tl\`.
* **Dot notation** Use dot notation to control nested properties inside the
  animation object, e.g. \`to:scale-1.5|scrollTrigger.trigger-[&]\`.
* **Lightweight** \\~3kb minified and gzipped.
* **Library agnostic** Can be extended to work with other animation libraries.
  (coming soon)

Credits [#credits]

The API and syntax of Glaze is heavily inspired by
[Tailwind](https://tailwindcss.com) and [MasterCSS](https://css.master.co/).

Licensing and Requirements [#licensing-and-requirements]

Glaze is designed to work seamlessly with [GSAP](https://greensock.com/gsap/).
To use Glaze, you must include GSAP in your project.

GSAP Licensing [#gsap-licensing]

GSAP is subject to its own licensing terms. Before incorporating GSAP with
Glaze, ensure you review and comply with the
[GSAP Standard License](https://gsap.com/community/standard-license/).

Glaze itself is licensed under the MIT License. For more details, see the
LICENSE file in the repository.
`,l={title:"Introduction"},d={contents:[{heading:void 0,content:`Glaze is an animation framework that combines the power of
GSAP and utility-based document authoring à la
Tailwind to create a simple, yet powerful, way to
compose animations for the web.`},{heading:"features",content:`Breakpoints Define custom breakpoints and animate elements at different
screen sizes using @{size} syntax. Uses GSAPs
matchMedia.`},{heading:"features",content:"Timelines Compose timelines using @tl."},{heading:"features",content:`Dot notation Use dot notation to control nested properties inside the
animation object, e.g. to:scale-1.5|scrollTrigger.trigger-[&].`},{heading:"features",content:"Lightweight ~3kb minified and gzipped."},{heading:"features",content:`Library agnostic Can be extended to work with other animation libraries.
(coming soon)`},{heading:"credits",content:`The API and syntax of Glaze is heavily inspired by
Tailwind and MasterCSS.`},{heading:"licensing-and-requirements",content:`Glaze is designed to work seamlessly with GSAP.
To use Glaze, you must include GSAP in your project.`},{heading:"gsap-licensing",content:`GSAP is subject to its own licensing terms. Before incorporating GSAP with
Glaze, ensure you review and comply with the
GSAP Standard License.`},{heading:"gsap-licensing",content:`Glaze itself is licensed under the MIT License. For more details, see the
LICENSE file in the repository.`}],headings:[{id:"features",content:"Features"},{id:"credits",content:"Credits"},{id:"licensing-and-requirements",content:"Licensing and Requirements"},{id:"gsap-licensing",content:"GSAP Licensing"}]};const c=[{depth:2,url:"#features",title:e.jsx(e.Fragment,{children:"Features"})},{depth:2,url:"#credits",title:e.jsx(e.Fragment,{children:"Credits"})},{depth:2,url:"#licensing-and-requirements",title:e.jsx(e.Fragment,{children:"Licensing and Requirements"})},{depth:3,url:"#gsap-licensing",title:e.jsx(e.Fragment,{children:"GSAP Licensing"})}];function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[`Glaze is an animation framework that combines the power of
`,e.jsx(n.a,{href:"https://greensock.com/gsap/",children:"GSAP"}),` and utility-based document authoring à la
`,e.jsx(n.a,{href:"https://tailwindcss.com",children:"Tailwind"}),` to create a simple, yet powerful, way to
compose animations for the web.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),e.jsx(n.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  class"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-amber-500 sm:invisible"'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  data-animate"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut"'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),e.jsx(n.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,e.jsx(t,{children:`
<div
class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
data-animate="@sm:from:duration-1|autoAlpha-0|rotate-180|y-50|ease-power2.inOut|scrollTrigger.trigger-[&]">
</div>
`}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Breakpoints"}),` Define custom breakpoints and animate elements at different
screen sizes using `,e.jsx(n.code,{children:"@{size}"}),` syntax. Uses GSAPs
`,e.jsx(n.a,{href:"https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/",children:"matchMedia"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timelines"})," Compose timelines using ",e.jsx(n.code,{children:"@tl"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dot notation"}),` Use dot notation to control nested properties inside the
animation object, e.g. `,e.jsx(n.code,{children:"to:scale-1.5|scrollTrigger.trigger-[&]"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lightweight"})," ~3kb minified and gzipped."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Library agnostic"}),` Can be extended to work with other animation libraries.
(coming soon)`]}),`
`]}),`
`,e.jsx(n.h2,{id:"credits",children:"Credits"}),`
`,e.jsxs(n.p,{children:[`The API and syntax of Glaze is heavily inspired by
`,e.jsx(n.a,{href:"https://tailwindcss.com",children:"Tailwind"})," and ",e.jsx(n.a,{href:"https://css.master.co/",children:"MasterCSS"}),"."]}),`
`,e.jsx(n.h2,{id:"licensing-and-requirements",children:"Licensing and Requirements"}),`
`,e.jsxs(n.p,{children:["Glaze is designed to work seamlessly with ",e.jsx(n.a,{href:"https://greensock.com/gsap/",children:"GSAP"}),`.
To use Glaze, you must include GSAP in your project.`]}),`
`,e.jsx(n.h3,{id:"gsap-licensing",children:"GSAP Licensing"}),`
`,e.jsxs(n.p,{children:[`GSAP is subject to its own licensing terms. Before incorporating GSAP with
Glaze, ensure you review and comply with the
`,e.jsx(n.a,{href:"https://gsap.com/community/standard-license/",children:"GSAP Standard License"}),"."]}),`
`,e.jsx(n.p,{children:`Glaze itself is licensed under the MIT License. For more details, see the
LICENSE file in the repository.`})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{o as _markdown,h as default,l as frontmatter,d as structuredData,c as toc};
