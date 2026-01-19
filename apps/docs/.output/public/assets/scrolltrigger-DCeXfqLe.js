import{j as i}from"./main-BC7D7XD2.js";import{E as n}from"./example-B9BCQj0A.js";let a=`

import { Example } from "../../components/Example";

ScrollTrigger needs to be registered with GSAP before it can be used. This can
be done by importing it from the \`gsap\` package and calling \`registerPlugin\`
with it.

\`\`\`js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
\`\`\`

There is no special syntax needed to use
[ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) with Glaze.
Since it is defined inside the \`scrollTrigger\` property of the animation object,
dot notation can be used to adjust its settings.

\`\`\`html copy
<div class="flex h-[50vh] items-center">
  <div
    class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
    data-animate="from:autoAlpha-0|rotate-180|y-50|scrollTrigger.trigger-[&]|boxShadow-[0_0_100px_20px_orange]|scrollTrigger.scrub-true|scrollTrigger.start-[top_center]|scrollTrigger.end-[-=200]"
  ></div>
</div>
\`\`\`

<Example>
  {\`
    <div class="flex h-[50vh] items-center">
    <div
      class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
      data-animate="from:autoAlpha-0|rotate-180|y-50|scrollTrigger.trigger-[&]|boxShadow-[0_0_100px_20px_orange]|scrollTrigger.scrub-true|scrollTrigger.start-[top_center]|scrollTrigger.end-[-=200]"
    ></div>
    </div>
    \`}
</Example>

<div className="h-screen" />
`,h={title:"ScrollTrigger"},d={contents:[{heading:void 0,content:`ScrollTrigger needs to be registered with GSAP before it can be used. This can
be done by importing it from the gsap package and calling registerPlugin
with it.`},{heading:void 0,content:`There is no special syntax needed to use
ScrollTrigger with Glaze.
Since it is defined inside the scrollTrigger property of the animation object,
dot notation can be used to adjust its settings.`}],headings:[]};const c=[];function r(e){const s={a:"a",code:"code",p:"p",pre:"pre",span:"span",...e.components};return i.jsxs(i.Fragment,{children:[i.jsxs(s.p,{children:[`ScrollTrigger needs to be registered with GSAP before it can be used. This can
be done by importing it from the `,i.jsx(s.code,{children:"gsap"})," package and calling ",i.jsx(s.code,{children:"registerPlugin"}),`
with it.`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',children:i.jsxs(s.code,{children:[i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" gsap "}),i.jsx(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "gsap"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ScrollTrigger "}),i.jsx(s.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "gsap/ScrollTrigger"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"gsap."}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"registerPlugin"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(ScrollTrigger);"})]})]})})}),`
`,i.jsxs(s.p,{children:[`There is no special syntax needed to use
`,i.jsx(s.a,{href:"https://gsap.com/docs/v3/Plugins/ScrollTrigger/",children:"ScrollTrigger"}),` with Glaze.
Since it is defined inside the `,i.jsx(s.code,{children:"scrollTrigger"}),` property of the animation object,
dot notation can be used to adjust its settings.`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(s.code,{children:[i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"flex h-[50vh] items-center"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-amber-500 sm:invisible"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"from:autoAlpha-0|rotate-180|y-50|scrollTrigger.trigger-[&]|boxShadow-[0_0_100px_20px_orange]|scrollTrigger.scrub-true|scrollTrigger.start-[top_center]|scrollTrigger.end-[-=200]"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsx(n,{children:`
<div class="flex h-[50vh] items-center">
<div
  class="h-20 w-20 rounded-xl bg-amber-500 sm:invisible"
  data-animate="from:autoAlpha-0|rotate-180|y-50|scrollTrigger.trigger-[&]|boxShadow-[0_0_100px_20px_orange]|scrollTrigger.scrub-true|scrollTrigger.start-[top_center]|scrollTrigger.end-[-=200]"
></div>
</div>
`}),`
`,i.jsx("div",{className:"h-screen"})]})}function g(e={}){const{wrapper:s}=e.components||{};return s?i.jsx(s,{...e,children:i.jsx(r,{...e})}):r(e)}export{a as _markdown,g as default,h as frontmatter,d as structuredData,c as toc};
