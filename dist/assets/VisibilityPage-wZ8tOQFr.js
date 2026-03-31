import{j as i,P as n,bp as r,S as c,Q as o,a as h,C as s,e,h as t,i as a,k as d,bs as x}from"./index-CH8wS3hI.js";import{B as j}from"./Breadcrumb-BaAopMTO.js";import{C as m}from"./CommonDesc-C08fE1OW.js";import{C as l}from"./CommonCodePreview-DEnCNn9V.js";const f=()=>i.jsxs(n,{title:r.utilities.subMenu.visibility.text,children:[i.jsx(c,{children:i.jsx(o,{children:i.jsx(j,{list:[{title:"Utilities",to:"/utilities"},{title:"Visibility",to:"/utilities/visibility"}]})})}),i.jsx(h,{children:i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-12 my-4",children:[i.jsx("h1",{children:"Visibility"}),i.jsx("p",{className:"lead",children:"Control the visibility of elements, without modifying their display, with visibility utilities."})]}),i.jsx("div",{className:"col-12",children:i.jsx(s,{children:i.jsxs(e,{children:[i.jsxs("p",{children:["Set the ",i.jsx("code",{children:"visibility"})," of elements with our visibility utilities. These utility classes do not modify the"," ",i.jsx("code",{children:"display"})," value at all and do not affect layout –"," ",i.jsx("code",{children:".invisible"})," elements still take up space in the page."]}),i.jsxs(m,{className:"mb-4",children:["Elements with the ",i.jsx("code",{children:".invisible"})," class will be hidden"," ",i.jsx("em",{children:"both"})," visually and for assistive technology/screen reader users."]}),i.jsxs("p",{children:["Apply ",i.jsx("code",{children:".visible"})," or ",i.jsx("code",{children:".invisible"})," as needed."]}),i.jsx(l,{code:`
<div class="visible">...</div>
<div class="invisible">...</div>`,className:"mb-4"}),i.jsx(l,{code:`
// Class
.visible {
	visibility: visible !important;
}
.invisible {
	visibility: hidden !important;
}`,language:"scss"})]})})}),i.jsx("div",{className:"col-12",children:i.jsxs(s,{id:"sass",className:"scroll-margin",children:[i.jsx(t,{children:i.jsx(a,{children:i.jsx(d,{tag:"h3",children:"Sass"})})}),i.jsx(e,{children:i.jsxs(s,{id:"utilities-api",className:"scroll-margin rounded-2",children:[i.jsx(t,{children:i.jsx(a,{children:i.jsx(d,{children:"Utilities API"})})}),i.jsxs(e,{children:[i.jsxs("p",{children:["Visibility utilities are declared in our utilities API in"," ",i.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",i.jsx(x,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),i.jsx(l,{code:`
"visibility": (
	property: visibility,
	class: null,
	values: (
		visible: visible,
		invisible: hidden,
	)
)`,language:"scss"})]})]})})]})})]})})]});export{f as default};
