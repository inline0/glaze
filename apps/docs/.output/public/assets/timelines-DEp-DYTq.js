import{j as i}from"./main-BC7D7XD2.js";import{E as n}from"./example-B9BCQj0A.js";let h=`

import { Example } from "../../components/Example";

[Timelines](https://gsap.com/docs/v3/GSAP/Timeline) are fully supported in
Glaze.

Usage [#usage]

Start with the \`tl\` keyword inside the data attribute to establish a timeline.
Glaze then treats the following strings as configuration options for this
timeline.

\`\`\`html copy
<div data-animate="tl defaults:ease-elastic|duration-1 yoyo-true">...</div>
\`\`\`

This example initiates a timeline with specified default \`easing\`, \`duration\`,
and \`yoyo\` properties.

Elements [#elements]

By design, Glaze incorporates all child elements of a timeline-declared element
into the timeline's scope, eliminating the need for explicit inclusion.

\`\`\`html copy
<div class="grid gap-8" data-animate="tl defaults:ease-elastic|duration-4">
  <div
    class="h-20 w-20 rounded-xl bg-amber-500"
    data-animate="to:rotate-360"
  ></div>
  <div
    class="h-20 w-20 rounded-xl bg-green-500"
    data-animate="tl:[-=3] to:rotate-360"
  ></div>
</div>
\`\`\`

<Example>
  {\`
    <div class="grid gap-8" data-animate="tl defaults:ease-elastic|duration-4 scrollTrigger:trigger-[&]">
    <div
      class="h-20 w-20 rounded-xl bg-amber-500"
      data-animate="to:rotate-360"
    ></div>
    <div
      class="h-20 w-20 rounded-xl bg-green-500"
      data-animate="tl:[-=3] to:rotate-360"
    ></div>
    </div>
    \`}
</Example>

Adjust timing for individual elements using the \`tl:\` prefix to delay or advance
their animation start times within the timeline.

Responsive timelines [#responsive-timelines]

Leverage media queries to control timeline execution. The example below
demonstrates a timeline that activates at the \`lg\` breakpoint and adjusts
individual element animations responsively.

\`\`\`html copy
<div class="grid gap-8" data-animate="tl defaults:power2.inOut|duration-2">
  <div
    class="h-20 w-20 rounded-xl bg-amber-500"
    data-animate="to:rotate-360 @lg:to:xPercent-[50]"
  ></div>
  <div
    class="h-20 w-20 rounded-xl bg-green-500"
    data-animate="tl:[-=1] to:rotate-360 @lg:to:xPercent-[-50]"
  ></div>
</div>
\`\`\`

<Example>
  {\`
    <div class="grid gap-8" data-animate="tl defaults:power2.inOut|duration-2 scrollTrigger:trigger-[&]">
    <div
      class="h-20 w-20 rounded-xl bg-amber-500"
      data-animate="to:rotate-360 @lg:to:xPercent-[100]"
    ></div>
    <div
      class="h-20 w-20 rounded-xl bg-green-500"
      data-animate="tl:[-=1] to:rotate-360 @lg:to:xPercent-[-100]"
    ></div>
    </div>
    \`}
</Example>

This approach ensures the timeline and its component animations adapt to varying
screen sizes.

Hooking into a timeline [#hooking-into-a-timeline]

Assign a name to your timeline to link animations from external elements,
thereby extending the timeline's scope beyond its original container.

In the example below, the named timeline (\`main\`) allows for animations defined
on other elements to join the timeline using the \`tl:{name}\` syntax.

\`\`\`html copy
<div class="grid w-full grid-cols-2 justify-items-center">
  <div
    class="grid gap-8"
    data-animate="tl/main defaults:power2.inOut|duration-2"
  >
    <div
      class="h-20 w-20 rounded-xl bg-amber-500"
      data-animate="to:rotate-360"
    ></div>
    <div
      class="h-20 w-20 rounded-xl bg-green-500"
      data-animate="tl:[-=1] to:rotate-360"
    ></div>
  </div>
  <div
    class="tl grid gap-8"
    data-animate="tl:main-[-=1] [&>div]:to:rotate-360|stagger-0.25"
  >
    <div class="h-20 w-20 rounded-xl bg-rose-500"></div>
    <div class="h-20 w-20 rounded-xl bg-red-500"></div>
  </div>
</div>
\`\`\`

<Example>
  {\`
    <div class="grid w-full grid-cols-2 justify-items-center">
    <div
      class="grid gap-8"
      data-animate="tl/main defaults:power2.inOut|duration-2 scrollTrigger:trigger-[&]"
    >
      <div
        class="h-20 w-20 rounded-xl bg-amber-500"
        data-animate="to:rotate-360"
      ></div>
      <div
        class="h-20 w-20 rounded-xl bg-green-500"
        data-animate="tl:[-=1] to:rotate-360"
      ></div>
    </div>
    <div
      class="tl grid gap-8"
      data-animate="tl:main-[-=1] [&>div]:to:rotate-360|stagger-0.25"
    >
      <div class="h-20 w-20 rounded-xl bg-rose-500"></div>
      <div class="h-20 w-20 rounded-xl bg-red-500"></div>
    </div>
    </div>
    \`}
</Example>
`,d={title:"Timelines"},r={contents:[{heading:void 0,content:`Timelines are fully supported in
Glaze.`},{heading:"usage",content:`Start with the tl keyword inside the data attribute to establish a timeline.
Glaze then treats the following strings as configuration options for this
timeline.`},{heading:"usage",content:`This example initiates a timeline with specified default easing, duration,
and yoyo properties.`},{heading:"elements",content:`By design, Glaze incorporates all child elements of a timeline-declared element
into the timeline's scope, eliminating the need for explicit inclusion.`},{heading:"elements",content:`Adjust timing for individual elements using the tl: prefix to delay or advance
their animation start times within the timeline.`},{heading:"responsive-timelines",content:`Leverage media queries to control timeline execution. The example below
demonstrates a timeline that activates at the lg breakpoint and adjusts
individual element animations responsively.`},{heading:"responsive-timelines",content:`This approach ensures the timeline and its component animations adapt to varying
screen sizes.`},{heading:"hooking-into-a-timeline",content:`Assign a name to your timeline to link animations from external elements,
thereby extending the timeline's scope beyond its original container.`},{heading:"hooking-into-a-timeline",content:`In the example below, the named timeline (main) allows for animations defined
on other elements to join the timeline using the tl:{name} syntax.`}],headings:[{id:"usage",content:"Usage"},{id:"elements",content:"Elements"},{id:"responsive-timelines",content:"Responsive timelines"},{id:"hooking-into-a-timeline",content:"Hooking into a timeline"}]};const k=[{depth:2,url:"#usage",title:i.jsx(i.Fragment,{children:"Usage"})},{depth:2,url:"#elements",title:i.jsx(i.Fragment,{children:"Elements"})},{depth:2,url:"#responsive-timelines",title:i.jsx(i.Fragment,{children:"Responsive timelines"})},{depth:2,url:"#hooking-into-a-timeline",title:i.jsx(i.Fragment,{children:"Hooking into a timeline"})}];function t(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",...e.components};return i.jsxs(i.Fragment,{children:[i.jsxs(s.p,{children:[i.jsx(s.a,{href:"https://gsap.com/docs/v3/GSAP/Timeline",children:"Timelines"}),` are fully supported in
Glaze.`]}),`
`,i.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,i.jsxs(s.p,{children:["Start with the ",i.jsx(s.code,{children:"tl"}),` keyword inside the data attribute to establish a timeline.
Glaze then treats the following strings as configuration options for this
timeline.`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(s.code,{children:i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl defaults:ease-elastic|duration-1 yoyo-true"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsxs(s.p,{children:["This example initiates a timeline with specified default ",i.jsx(s.code,{children:"easing"}),", ",i.jsx(s.code,{children:"duration"}),`,
and `,i.jsx(s.code,{children:"yoyo"})," properties."]}),`
`,i.jsx(s.h2,{id:"elements",children:"Elements"}),`
`,i.jsx(s.p,{children:`By design, Glaze incorporates all child elements of a timeline-declared element
into the timeline's scope, eliminating the need for explicit inclusion.`}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(s.code,{children:[i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"grid gap-8"'}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl defaults:ease-elastic|duration-4"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-amber-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:rotate-360"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-green-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl:[-=3] to:rotate-360"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsx(n,{children:`
<div class="grid gap-8" data-animate="tl defaults:ease-elastic|duration-4 scrollTrigger:trigger-[&]">
<div
  class="h-20 w-20 rounded-xl bg-amber-500"
  data-animate="to:rotate-360"
></div>
<div
  class="h-20 w-20 rounded-xl bg-green-500"
  data-animate="tl:[-=3] to:rotate-360"
></div>
</div>
`}),`
`,i.jsxs(s.p,{children:["Adjust timing for individual elements using the ",i.jsx(s.code,{children:"tl:"}),` prefix to delay or advance
their animation start times within the timeline.`]}),`
`,i.jsx(s.h2,{id:"responsive-timelines",children:"Responsive timelines"}),`
`,i.jsxs(s.p,{children:[`Leverage media queries to control timeline execution. The example below
demonstrates a timeline that activates at the `,i.jsx(s.code,{children:"lg"}),` breakpoint and adjusts
individual element animations responsively.`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(s.code,{children:[i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"grid gap-8"'}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl defaults:power2.inOut|duration-2"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-amber-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:rotate-360 @lg:to:xPercent-[50]"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-green-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl:[-=1] to:rotate-360 @lg:to:xPercent-[-50]"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsx(n,{children:`
<div class="grid gap-8" data-animate="tl defaults:power2.inOut|duration-2 scrollTrigger:trigger-[&]">
<div
  class="h-20 w-20 rounded-xl bg-amber-500"
  data-animate="to:rotate-360 @lg:to:xPercent-[100]"
></div>
<div
  class="h-20 w-20 rounded-xl bg-green-500"
  data-animate="tl:[-=1] to:rotate-360 @lg:to:xPercent-[-100]"
></div>
</div>
`}),`
`,i.jsx(s.p,{children:`This approach ensures the timeline and its component animations adapt to varying
screen sizes.`}),`
`,i.jsx(s.h2,{id:"hooking-into-a-timeline",children:"Hooking into a timeline"}),`
`,i.jsx(s.p,{children:`Assign a name to your timeline to link animations from external elements,
thereby extending the timeline's scope beyond its original container.`}),`
`,i.jsxs(s.p,{children:["In the example below, the named timeline (",i.jsx(s.code,{children:"main"}),`) allows for animations defined
on other elements to join the timeline using the `,i.jsx(s.code,{children:"tl:{name}"})," syntax."]}),`
`,i.jsx(i.Fragment,{children:i.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(s.code,{children:[i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"grid w-full grid-cols-2 justify-items-center"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"grid gap-8"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl/main defaults:power2.inOut|duration-2"'})]}),`
`,i.jsx(s.span,{className:"line",children:i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  >"})}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-amber-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:rotate-360"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-green-500"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"      data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl:[-=1] to:rotate-360"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    ></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  </"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl grid gap-8"'})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    data-animate"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"tl:main-[-=1] [&>div]:to:rotate-360|stagger-0.25"'})]}),`
`,i.jsx(s.span,{className:"line",children:i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  >"})}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-rose-500"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    <"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" class"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(s.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"h-20 w-20 rounded-xl bg-red-500"'}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  </"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(s.span,{className:"line",children:[i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(s.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(s.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsx(n,{children:`
<div class="grid w-full grid-cols-2 justify-items-center">
<div
  class="grid gap-8"
  data-animate="tl/main defaults:power2.inOut|duration-2 scrollTrigger:trigger-[&]"
>
  <div
    class="h-20 w-20 rounded-xl bg-amber-500"
    data-animate="to:rotate-360"
  ></div>
  <div
    class="h-20 w-20 rounded-xl bg-green-500"
    data-animate="tl:[-=1] to:rotate-360"
  ></div>
</div>
<div
  class="tl grid gap-8"
  data-animate="tl:main-[-=1] [&>div]:to:rotate-360|stagger-0.25"
>
  <div class="h-20 w-20 rounded-xl bg-rose-500"></div>
  <div class="h-20 w-20 rounded-xl bg-red-500"></div>
</div>
</div>
`})]})}function c(e={}){const{wrapper:s}=e.components||{};return s?i.jsx(s,{...e,children:i.jsx(t,{...e})}):t(e)}export{h as _markdown,c as default,d as frontmatter,r as structuredData,k as toc};
