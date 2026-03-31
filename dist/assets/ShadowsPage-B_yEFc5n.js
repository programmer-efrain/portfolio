import{j as s,P as r,bp as c,S as h,Q as n,a as t,C as e,h as a,i as d,k as i,e as l,bs as m}from"./index-CH8wS3hI.js";import{B as x}from"./Breadcrumb-BaAopMTO.js";import{C as o}from"./CommonCodePreview-DEnCNn9V.js";const v=()=>s.jsxs(r,{title:c.utilities.subMenu.shadows.text,children:[s.jsx(h,{children:s.jsx(n,{children:s.jsx(x,{list:[{title:"Utilities",to:"/utilities"},{title:"Shadows",to:"/utilities/shadows"}]})})}),s.jsx(t,{children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-12 my-4",children:[s.jsx("h1",{children:"Shadows"}),s.jsx("p",{className:"lead",children:"Add or remove shadows to elements with box-shadow utilities."})]}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"examples",className:"scroll-margin",children:[s.jsx(a,{children:s.jsx(d,{children:s.jsx(i,{tag:"h3",children:"Examples"})})}),s.jsxs(l,{children:[s.jsxs("p",{children:["While shadows on components are disabled by default in Bootstrap and can be enabled via ",s.jsx("code",{children:"$enable-shadows"}),", you can also quickly add or remove a shadow with our"," ",s.jsx("code",{children:"box-shadow"})," utility classes. Includes support for"," ",s.jsx("code",{children:".shadow-none"})," and three default sizes (which have associated variables to match)."]}),s.jsxs(o,{code:`
<div className='shadow-none p-3 mb-5 bg-light rounded'>No shadow</div>
<div className='shadow-sm p-3 mb-5 bg-body rounded'>Small shadow</div>
<div className='shadow p-3 mb-5 bg-body rounded'>Regular shadow</div>
<div className='shadow-lg p-3 mb-5 bg-body rounded'>Larger shadow</div>`,children:[s.jsx("div",{className:"shadow-none p-3 mb-5 bg-light rounded",children:"No shadow"}),s.jsx("div",{className:"shadow-sm p-3 mb-5 bg-body rounded",children:"Small shadow"}),s.jsx("div",{className:"shadow p-3 mb-5 bg-body rounded",children:"Regular shadow"}),s.jsx("div",{className:"shadow-lg p-3 mb-5 bg-body rounded",children:"Larger shadow"})]})]})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"sass",className:"scroll-margin",children:[s.jsx(a,{children:s.jsx(d,{children:s.jsx(i,{tag:"h3",children:"Sass"})})}),s.jsxs(l,{children:[s.jsxs(e,{id:"variables",className:"scroll-margin rounded-2",children:[s.jsx(a,{children:s.jsx(d,{children:s.jsx(i,{children:"Variables"})})}),s.jsx(l,{children:s.jsx(o,{code:`
$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;
$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);

// Overwrite src/styles/settings/index.scss
$box-shadow:                  0 1.6rem 3rem rgba($black, 0.1);
$box-shadow-sm:               0 0.8rem 3rem rgba($black, 0.075);
$box-shadow-lg:               0 1.6rem 3rem rgba($black, 0.175);`,language:"scss"})})]}),s.jsxs(e,{id:"utilities-api",className:"scroll-margin rounded-2",children:[s.jsx(a,{children:s.jsx(d,{children:s.jsx(i,{children:"Utilities API"})})}),s.jsxs(l,{children:[s.jsxs("p",{children:["Shadow utilities are declared in our utilities API in"," ",s.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",s.jsx(m,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),s.jsx(o,{code:`
"shadow": (
	property: box-shadow,
	class: shadow,
	values: (
		null: $box-shadow,
		sm: $box-shadow-sm,
		lg: $box-shadow-lg,
		none: none,
	)
),`,language:"scss"})]})]})]})]})})]})})]});export{v as default};
