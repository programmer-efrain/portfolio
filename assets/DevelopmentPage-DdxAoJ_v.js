import{r as S,j as s,P as b,bu as r,S as f,Q as y,V as C,B as m,a as N,C as c,h as a,i as o,k as d,e as n,G as k,L as w,l as I,A as g,bq as j,I as P}from"./index-CH8wS3hI.js";import{B as L}from"./Breadcrumb-BaAopMTO.js";import{C as l}from"./CommonCodeCopy-CAcqorZD.js";import{a as M,C as R}from"./Checks-3cSzJQyw.js";import{V as i}from"./Visible-D55mKjuQ.js";import"./index-CDNjQ8j8.js";const _=()=>{const u={shadow:"none",borderSize:1,className:"mb-0 rounded-1"},e={cra:"Create React App",vite:"Vite",nextjs:"NextJs"},[t,v]=S.useState(localStorage.getItem("facit_docChooseStarter")||e.cra),h={cra:`
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "serve": "serve -s build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint .",
    "lint:fix": "eslint --fix --ext .js --ext .ts --ext .jsx --ext .tsx ./src",
    "lint:check-scss": "stylelint-config-prettier-scss-check",
    "lint:scss": "stylelint **/*.scss",
    "lint:fix-scss": "stylelint --fix **/*.scss",
    "icon": "svgr SvgIcons -d src/components/icon/svg-icons --typescript",
    "storybook": "start-storybook -p 6006",
    "storybook-withoutCache": "start-storybook -p 6006 --no-manager-cache",
    "build-storybook": "build-storybook"
},`,vite:`
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint --fix --ext .js --ext .ts --ext .jsx --ext .tsx ./src",
    "lint:check-scss": "stylelint-config-prettier-scss-check",
    "lint:scss": "stylelint **/*.scss",
    "lint:fix-scss": "stylelint --fix **/*.scss"
},`,nextjs:`
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:check-scss": "stylelint-config-prettier-scss-check",
    "lint:scss": "stylelint **/*.scss",
    "lint:fix-scss": "stylelint --fix **/*.scss"
},`};return s.jsxs(b,{title:r.gettingStarted.subMenu.dev.text,children:[s.jsxs(f,{children:[s.jsx(y,{children:s.jsx(L,{list:[{title:r.gettingStarted.text,to:r.gettingStarted.path},{title:r.gettingStarted.subMenu.dev.text,to:r.gettingStarted.subMenu.dev.path}]})}),s.jsxs(C,{children:[s.jsx("span",{children:s.jsx("i",{children:"Next step"})}),s.jsx(m,{tag:"a",color:"success",isLight:!0,icon:r.gettingStarted.subMenu.folderStructure.icon,to:`../${r.gettingStarted.subMenu.folderStructure.path}`,children:r.gettingStarted.subMenu.folderStructure.text})]})]}),s.jsxs(N,{children:[s.jsxs("div",{className:"row h-100 align-content-start",children:[s.jsx("div",{className:"col-md-3",children:s.jsxs(c,{className:"position-sticky sticky-top-size",children:[s.jsx(a,{children:s.jsx(o,{icon:"FollowTheSigns",iconColor:"success",children:s.jsx(d,{children:"Choose your preference"})})}),s.jsxs(n,{children:[s.jsx("p",{children:"3 different options are offered according to the needs of your project."}),s.jsxs(k,{children:[s.jsx(w,{htmlFor:"chooseStarter",children:"Choose"}),s.jsx(M,{children:Object.keys(e).map(x=>s.jsx(R,{type:"radio",name:"chooseStarter",id:e[x],label:e[x],value:e[x],onChange:p=>{localStorage.setItem("facit_docChooseStarter",p.target.value),v(p.target.value)},checked:t},x))})]})]})]})}),s.jsxs("div",{className:"col-md-9",children:[s.jsxs(c,{children:[s.jsx(a,{children:s.jsxs(o,{icon:"Flag",iconColor:"info",children:[s.jsx(d,{children:"Development Server"}),s.jsx(I,{children:"Step 3"})]})}),s.jsxs(n,{children:[s.jsx("p",{children:"You can use npm or yarn to download the required dependencies."}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs(c,{...u,children:[s.jsx(a,{children:s.jsx(o,{icon:"CustomNpm",children:s.jsx(d,{children:"npm"})})}),s.jsxs(n,{children:[s.jsx(i,{is:t===e.cra,children:s.jsx(l,{children:"npm start"})}),s.jsx(i,{is:t===e.vite,children:s.jsx(l,{children:"npm run dev"})}),s.jsx(i,{is:t===e.nextjs,children:s.jsx(l,{children:"npm run dev"})})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs(c,{...u,children:[s.jsx(a,{children:s.jsx(o,{icon:"CustomYarn",children:s.jsx(d,{children:"yarn"})})}),s.jsxs(n,{children:[s.jsx(i,{is:t===e.cra,children:s.jsx(l,{children:"yarn start"})}),s.jsx(i,{is:t===e.vite,children:s.jsx(l,{children:"yarn dev"})}),s.jsx(i,{is:t===e.nextjs,children:s.jsx(l,{children:"yarn dev"})})]})]})})]})]})]}),s.jsxs(c,{children:[s.jsx(a,{children:s.jsx(o,{icon:"Code",iconColor:"success",children:s.jsxs(d,{children:["Other ",t," Scripts"]})})}),s.jsxs(n,{children:[s.jsxs(g,{color:"info",isLight:!0,icon:"Info",children:["You can run the following codes as",s.jsx("code",{className:"mx-2",children:"npm run SCRIPTS_KEY"})," or",s.jsx("code",{className:"mx-2",children:"yarn SCRIPTS_KEY"}),"."]}),s.jsx(i,{is:t===e.cra,children:s.jsx(j,{children:h.cra})}),s.jsx(i,{is:t===e.vite,children:s.jsx(j,{children:h.vite})}),s.jsx(i,{is:t===e.nextjs,children:s.jsx(j,{children:h.nextjs})}),s.jsxs(g,{color:"success",isLight:!0,icon:"Verified",className:"mt-3",children:["Example:",s.jsx("code",{className:"mx-2",children:"npm run storybook"})," or",s.jsx("code",{className:"mx-2",children:"yarn storybook"}),"."]})]})]})]})]}),s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-12",children:s.jsx(c,{children:s.jsx(n,{children:s.jsxs("div",{className:"row align-items-center",children:[s.jsxs("div",{className:"col",children:[s.jsx(P,{icon:"CheckCircle",size:"lg",className:"me-2 text-muted"}),s.jsx("span",{children:"If you are ready, you can proceed to the next step."})]}),s.jsx("div",{className:"col-auto",children:s.jsx(m,{tag:"a",color:"success",isLight:!0,icon:"NavigateNext",to:`../${r.gettingStarted.subMenu.folderStructure.path}`,children:"Next"})})]})})})})})]})]})};export{_ as default};
