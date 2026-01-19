import{j as i}from"./main-BC7D7XD2.js";let h=`

The syntax of Glaze is straightforward and easy to understand. If you're
familiar with Tailwind, you'll find Glaze's approach very similar.

Animation strings are defined in the following order:

1. **Breakpoint** (optional)
2. **Selector** (optional)
3. **State** (required)
4. **Animation object** (required)

Breakpoints [#breakpoints]

Breakpoints allow you to specify when an animation should run, based on the
breakpoints defined in the configuration. The breakpoint is defined using the
\`@\` symbol, followed by the breakpoint name.

\`\`\`html copy
<div data-animate="@sm:from:opacity-0"></div>
\`\`\`

Selectors [#selectors]

By default, animations are applied directly to the element itself. However, you
can target other elements using selectors enclosed in brackets (\`[]\`) before the
state.

\`\`\`html copy
<div data-animate="[&>h1]:to:opacity-1|stagger-0.25">
  <h1>...</h1>
  <h1>...</h1>
  <h1>...</h1>
</div>
\`\`\`

The \`&\` symbol refers to the parent element, allowing you to specify a child
selector.

With media queries:

\`\`\`html copy
<div data-animate="@sm:[&>h1]:to:opacity-1|stagger-0.25">
  <h1>...</h1>
  <h1>...</h1>
  <h1>...</h1>
</div>
\`\`\`

State [#state]

The animation state indicates the beginning and end points of the animation:

* **from**: The initial state of the animation.
* **to**: The final state of the animation.

\`\`\`html copy
<div data-animate="from:opacity-0"></div>
<div data-animate="to:xPercent-50"></div>
\`\`\`

If both states are defined, the animation will run from the initial state to the
final state. ([fromTo in GSAP](https://gsap.com/docs/v3/GSAP/gsap.fromTo\\(\\)/))

\`\`\`html copy
<div data-animate="from:opacity-0.5 to:opacity-1"></div>
\`\`\`

Animation object [#animation-object]

The animation object specifies the properties to animate, following the state.

\`\`\`html copy
<div data-animate="to:yPercent-10"></div>
\`\`\`

The string is parsed by splitting at the dash (\`-\`), where the first part is the
property name, and the second part is its value. Values are automatically
converted to their appropriate type (\`string\`, \`number\`, or \`boolean\`).

Chaining properties [#chaining-properties]

To combine multiple properties in a single animation, separate them with a pipe
(\`|\`) character.

\`\`\`html copy
<div data-animate="to:opacity-1|yPercent-10"></div>
\`\`\`

Nested objects [#nested-objects]

Access nested object properties by separating keys with a dot (\`.\`) character.

\`\`\`html copy
<div data-animate="to:scale.x-2|scale.y-2"></div>
\`\`\`

Negative values [#negative-values]

For negative values, enclose the value in brackets. (\`[]\`)

\`\`\`html copy
<div data-animate="to:xPercent-[-50]"></div>
\`\`\`

Spaces [#spaces]

For values with spaces, use an underscore (\`_\`) character.

\`\`\`html copy
<div data-animate="to:boxShadow-[0_0_50px_20px_red]"></div>
\`\`\`
`,a={title:"Syntax"},l={contents:[{heading:void 0,content:`The syntax of Glaze is straightforward and easy to understand. If you're
familiar with Tailwind, you'll find Glaze's approach very similar.`},{heading:void 0,content:"Animation strings are defined in the following order:"},{heading:void 0,content:"Breakpoint (optional)"},{heading:void 0,content:"Selector (optional)"},{heading:void 0,content:"State (required)"},{heading:void 0,content:"Animation object (required)"},{heading:"breakpoints",content:`Breakpoints allow you to specify when an animation should run, based on the
breakpoints defined in the configuration. The breakpoint is defined using the
@ symbol, followed by the breakpoint name.`},{heading:"selectors",content:`By default, animations are applied directly to the element itself. However, you
can target other elements using selectors enclosed in brackets ([]) before the
state.`},{heading:"selectors",content:`The & symbol refers to the parent element, allowing you to specify a child
selector.`},{heading:"selectors",content:"With media queries:"},{heading:"state",content:"The animation state indicates the beginning and end points of the animation:"},{heading:"state",content:"from: The initial state of the animation."},{heading:"state",content:"to: The final state of the animation."},{heading:"state",content:`If both states are defined, the animation will run from the initial state to the
final state. (fromTo in GSAP)`},{heading:"animation-object",content:"The animation object specifies the properties to animate, following the state."},{heading:"animation-object",content:`The string is parsed by splitting at the dash (-), where the first part is the
property name, and the second part is its value. Values are automatically
converted to their appropriate type (string, number, or boolean).`},{heading:"chaining-properties",content:`To combine multiple properties in a single animation, separate them with a pipe
(|) character.`},{heading:"nested-objects",content:"Access nested object properties by separating keys with a dot (.) character."},{heading:"negative-values",content:"For negative values, enclose the value in brackets. ([])"},{heading:"spaces",content:"For values with spaces, use an underscore (_) character."}],headings:[{id:"breakpoints",content:"Breakpoints"},{id:"selectors",content:"Selectors"},{id:"state",content:"State"},{id:"animation-object",content:"Animation object"},{id:"chaining-properties",content:"Chaining properties"},{id:"nested-objects",content:"Nested objects"},{id:"negative-values",content:"Negative values"},{id:"spaces",content:"Spaces"}]};const r=[{depth:2,url:"#breakpoints",title:i.jsx(i.Fragment,{children:"Breakpoints"})},{depth:2,url:"#selectors",title:i.jsx(i.Fragment,{children:"Selectors"})},{depth:2,url:"#state",title:i.jsx(i.Fragment,{children:"State"})},{depth:2,url:"#animation-object",title:i.jsx(i.Fragment,{children:"Animation object"})},{depth:3,url:"#chaining-properties",title:i.jsx(i.Fragment,{children:"Chaining properties"})},{depth:3,url:"#nested-objects",title:i.jsx(i.Fragment,{children:"Nested objects"})},{depth:3,url:"#negative-values",title:i.jsx(i.Fragment,{children:"Negative values"})},{depth:3,url:"#spaces",title:i.jsx(i.Fragment,{children:"Spaces"})}];function n(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.p,{children:`The syntax of Glaze is straightforward and easy to understand. If you're
familiar with Tailwind, you'll find Glaze's approach very similar.`}),`
`,i.jsx(e.p,{children:"Animation strings are defined in the following order:"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Breakpoint"})," (optional)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Selector"})," (optional)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"State"})," (required)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Animation object"})," (required)"]}),`
`]}),`
`,i.jsx(e.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,i.jsxs(e.p,{children:[`Breakpoints allow you to specify when an animation should run, based on the
breakpoints defined in the configuration. The breakpoint is defined using the
`,i.jsx(e.code,{children:"@"})," symbol, followed by the breakpoint name."]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"@sm:from:opacity-0"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsx(e.h2,{id:"selectors",children:"Selectors"}),`
`,i.jsxs(e.p,{children:[`By default, animations are applied directly to the element itself. However, you
can target other elements using selectors enclosed in brackets (`,i.jsx(e.code,{children:"[]"}),`) before the
state.`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(e.code,{children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"[&>h1]:to:opacity-1|stagger-0.25"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"&"}),` symbol refers to the parent element, allowing you to specify a child
selector.`]}),`
`,i.jsx(e.p,{children:"With media queries:"}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(e.code,{children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"@sm:[&>h1]:to:opacity-1|stagger-0.25"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  <"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">...</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"h1"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"</"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsx(e.h2,{id:"state",children:"State"}),`
`,i.jsx(e.p,{children:"The animation state indicates the beginning and end points of the animation:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"from"}),": The initial state of the animation."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"to"}),": The final state of the animation."]}),`
`]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsxs(e.code,{children:[i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"from:opacity-0"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:xPercent-50"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})]})})}),`
`,i.jsxs(e.p,{children:[`If both states are defined, the animation will run from the initial state to the
final state. (`,i.jsx(e.a,{href:"https://gsap.com/docs/v3/GSAP/gsap.fromTo()/",children:"fromTo in GSAP"}),")"]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"from:opacity-0.5 to:opacity-1"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsx(e.h2,{id:"animation-object",children:"Animation object"}),`
`,i.jsx(e.p,{children:"The animation object specifies the properties to animate, following the state."}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:yPercent-10"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsxs(e.p,{children:["The string is parsed by splitting at the dash (",i.jsx(e.code,{children:"-"}),`), where the first part is the
property name, and the second part is its value. Values are automatically
converted to their appropriate type (`,i.jsx(e.code,{children:"string"}),", ",i.jsx(e.code,{children:"number"}),", or ",i.jsx(e.code,{children:"boolean"}),")."]}),`
`,i.jsx(e.h3,{id:"chaining-properties",children:"Chaining properties"}),`
`,i.jsxs(e.p,{children:[`To combine multiple properties in a single animation, separate them with a pipe
(`,i.jsx(e.code,{children:"|"}),") character."]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:opacity-1|yPercent-10"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsx(e.h3,{id:"nested-objects",children:"Nested objects"}),`
`,i.jsxs(e.p,{children:["Access nested object properties by separating keys with a dot (",i.jsx(e.code,{children:"."}),") character."]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:scale.x-2|scale.y-2"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsx(e.h3,{id:"negative-values",children:"Negative values"}),`
`,i.jsxs(e.p,{children:["For negative values, enclose the value in brackets. (",i.jsx(e.code,{children:"[]"}),")"]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:xPercent-[-50]"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})}),`
`,i.jsx(e.h3,{id:"spaces",children:"Spaces"}),`
`,i.jsxs(e.p,{children:["For values with spaces, use an underscore (",i.jsx(e.code,{children:"_"}),") character."]}),`
`,i.jsx(i.Fragment,{children:i.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:i.jsx(e.code,{children:i.jsxs(e.span,{className:"line",children:[i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" data-animate"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"="}),i.jsx(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"to:boxShadow-[0_0_50px_20px_red]"'}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"></"}),i.jsx(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),i.jsx(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]})})})})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?i.jsx(e,{...s,children:i.jsx(n,{...s})}):n(s)}export{h as _markdown,d as default,a as frontmatter,l as structuredData,r as toc};
