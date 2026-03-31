import{r as m,j as e,P as j,bu as s,S as v,Q as b,V as y,B as u,a as f,C as i,h as g,i as p,k as x,e as a,G as S,L as C,bq as c,I as _}from"./index-CH8wS3hI.js";import{B as k}from"./Breadcrumb-BaAopMTO.js";import{a as N,C as V}from"./Checks-3cSzJQyw.js";import{V as l}from"./Visible-D55mKjuQ.js";const T=()=>{const t={cra:"Create React App",vite:"Vite",nextjs:"NextJs"},[r,h]=m.useState(localStorage.getItem("facit_docChooseStarter")||t.cra),n={cra:`
facit
├── .storybook
├── node_modules
├── public
├── src
│   ├── App
│   │   └── App.tsx
│   ├── assets
│   ├── common
│   ├── components
│   ├── contexts
│   ├── helpers
│   ├── hooks
│   ├── layout
│   ├── pages
│   │   └── _layout
│   │       ├── _asides
│   │       ├── _footers
│   │       └── _headers
│   ├── routes
│   ├── stories
│   ├── styles
│   │   ├── components
│   │   ├── custom
│   │   ├── elements
│   │   ├── generic
│   │   ├── objects
│   │   ├── settings
│   │   ├── tools
│   │   ├── utilities
│   │   ├── vendors
│   │   └── style.scss
│   ├── type
│   ├── declaration.d.ts
│   ├── i18n.ts
│   ├── index.tsx
│   ├── lang.ts
│   ├── menu.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── steps.tsx
├── SvgIcons
│   └── custom-icon.svg
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── .svgrrc
├── package.json
├── README.md
└── tsconfig.json`,vite:`
facit
├── node_modules
├── public
├── src
│   ├── App
│   │   └── App.tsx
│   ├── assets
│   ├── common
│   ├── components
│   ├── contexts
│   ├── helpers
│   ├── hooks
│   ├── layout
│   ├── pages
│   │   └── _layout
│   │       ├── _asides
│   │       ├── _footers
│   │       └── _headers
│   ├── routes
│   ├── stories
│   ├── styles
│   │   ├── components
│   │   ├── custom
│   │   ├── elements
│   │   ├── generic
│   │   ├── objects
│   │   ├── settings
│   │   ├── tools
│   │   ├── utilities
│   │   ├── vendors
│   │   └── style.scss
│   ├── type
│   ├── declaration.d.ts
│   ├── i18n.ts
│   ├── index.tsx
│   ├── lang.ts
│   ├── menu.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── steps.tsx
├── SvgIcons
│   └── custom-icon.svg
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── .svgrrc
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts`,nextjs:`
facit
├── .next
├── assets
├── common
├── components
├── contexts
├── helpers
├── hooks
├── layout
├── node_modules
├── pages
│   └── _layout
│       ├── _asides
│       ├── _footers
│       └── _headers
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public
├── routes
├── styles
│   ├── components
│   ├── custom
│   ├── elements
│   ├── generic
│   ├── objects
│   ├── settings
│   ├── tools
│   ├── utilities
│   ├── vendors
│   └── style.scss
├── type
├── .env
├── .env.development
├── .env.production
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .stylelintignore
├── .stylelintrc
├── index.d.ts
├── lang.ts
├── menu.ts
├── next.config.ts
├── next-i18next.config.ts
├── package.json
├── README.md
├── steps.tsx
└── tsconfig.json`};return e.jsxs(j,{title:s.gettingStarted.subMenu.folderStructure.text,children:[e.jsxs(v,{children:[e.jsx(b,{children:e.jsx(k,{list:[{title:s.gettingStarted.text,to:s.gettingStarted.path},{title:s.gettingStarted.subMenu.folderStructure.text,to:s.gettingStarted.subMenu.folderStructure.path}]})}),e.jsxs(y,{children:[e.jsx("span",{children:e.jsx("i",{children:"Next step"})}),e.jsx(u,{tag:"a",color:"success",isLight:!0,icon:s.gettingStarted.subMenu.bootstrapVariables.icon,to:`../${s.gettingStarted.subMenu.bootstrapVariables.path}`,children:s.gettingStarted.subMenu.bootstrapVariables.text})]})]}),e.jsxs(f,{children:[e.jsxs("div",{className:"row h-100 align-content-start",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs(i,{className:"position-sticky sticky-top-size",children:[e.jsx(g,{children:e.jsx(p,{icon:"FollowTheSigns",iconColor:"success",children:e.jsx(x,{children:"Choose your preference"})})}),e.jsxs(a,{children:[e.jsx("p",{children:"3 different options are offered according to the needs of your project."}),e.jsxs(S,{children:[e.jsx(C,{children:"Choose"}),e.jsx(N,{children:Object.keys(t).map(o=>e.jsx(V,{type:"radio",name:"chooseStarter",id:t[o],label:t[o],value:t[o],onChange:d=>{localStorage.setItem("facit_docChooseStarter",d.target.value),h(d.target.value)},checked:r},o))})]})]})]})}),e.jsx("div",{className:"col-md-9",children:e.jsxs(i,{children:[e.jsx(g,{children:e.jsx(p,{icon:"AccountTree",iconColor:"success",children:e.jsxs(x,{children:[r," Folder Structure"]})})}),e.jsxs(a,{children:[e.jsx(l,{is:r===t.cra,children:e.jsx(c,{language:"yaml",children:n.cra})}),e.jsx(l,{is:r===t.vite,children:e.jsx(c,{language:"yaml",children:n.vite})}),e.jsx(l,{is:r===t.nextjs,children:e.jsx(c,{language:"yaml",children:n.nextjs})})]})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col",children:[e.jsx(_,{icon:"CheckCircle",size:"lg",className:"me-2 text-muted"}),e.jsx("span",{children:"If you are ready, you can proceed to the next step."})]}),e.jsx("div",{className:"col-auto",children:e.jsx(u,{tag:"a",color:"success",isLight:!0,icon:"NavigateNext",to:`../${s.gettingStarted.subMenu.bootstrapVariables.path}`,children:"Next"})})]})})})})})]})]})};export{T as default};
