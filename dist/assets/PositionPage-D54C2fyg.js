import{a1 as r,j as s,P as c,bp as p,S as m,Q as h,a as x,C as e,h as t,i,k as a,e as l,br as u,c as d,bs as b}from"./index-CH8wS3hI.js";import{B as j}from"./Breadcrumb-BaAopMTO.js";import{C as o}from"./CommonCodePreview-DEnCNn9V.js";const v=r({example:{height:200,backgroundColor:"#f5f5f5","& .position-absolute":{width:"2em",height:"2em",backgroundColor:"#212529",borderRadius:"0.25rem"}}}),T=()=>{const n=v();return s.jsxs(c,{title:p.utilities.subMenu.position.text,children:[s.jsx(m,{children:s.jsx(h,{children:s.jsx(j,{list:[{title:"Utilities",to:"/utilities"},{title:"Position",to:"/utilities/position"}]})})}),s.jsx(x,{children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-12 my-4",children:[s.jsx("h1",{children:"Position"}),s.jsx("p",{className:"lead",children:"Use these shorthand utilities for quickly configuring the position of an element."})]}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"position-values",className:"scroll-margin",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{tag:"h3",children:"Position values"})})}),s.jsxs(l,{children:[s.jsx("p",{children:"Quick positioning classes are available, though they are not responsive"}),s.jsx(u,{code:`
<div className='position-static'>...</div>
<div className='position-relative'>...</div>
<div className='position-absolute'>...</div>
<div className='position-fixed'>...</div>
<div className='position-sticky'>...</div>`,language:"jsx",className:"my-0"})]})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"arrange-elements",className:"scroll-margin",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{tag:"h3",children:"Arrange elements"})})}),s.jsxs(l,{children:[s.jsxs("p",{children:["Arrange elements easily with the edge positioning utilities. The format is ",s.jsx("code",{children:"{property}-{position}"}),"."]}),s.jsxs("p",{children:["Where ",s.jsx("em",{children:"property"})," is one of:"]}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("code",{children:"top"})," - for the vertical ",s.jsx("code",{children:"top"})," ","position"]}),s.jsxs("li",{children:[s.jsx("code",{children:"start"})," - for the horizontal ",s.jsx("code",{children:"left"})," ","position (in LTR)"]}),s.jsxs("li",{children:[s.jsx("code",{children:"bottom"})," - for the vertical ",s.jsx("code",{children:"bottom"})," ","position"]}),s.jsxs("li",{children:[s.jsx("code",{children:"end"})," - for the horizontal ",s.jsx("code",{children:"right"})," ","position (in LTR)"]})]}),s.jsxs("p",{children:["Where ",s.jsx("em",{children:"position"})," is one of:"]}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("code",{children:"0"})," - for ",s.jsx("code",{children:"0"})," edge position"]}),s.jsxs("li",{children:[s.jsx("code",{children:"50"})," - for ",s.jsx("code",{children:"50%"})," edge position"]}),s.jsxs("li",{children:[s.jsx("code",{children:"100"})," - for ",s.jsx("code",{children:"100%"})," edge position"]})]}),s.jsxs("p",{children:["(You can add more position values by adding entries to the"," ",s.jsx("code",{children:"$position-values"})," Sass map variable.)"]}),s.jsx(o,{code:`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-50' />
	<div className='position-absolute bottom-50 end-50' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 end-0' />
</div>`,children:s.jsxs("div",{className:d("position-relative",n.example),children:[s.jsx("div",{className:"position-absolute top-0 start-0"}),s.jsx("div",{className:"position-absolute top-0 end-0"}),s.jsx("div",{className:"position-absolute top-50 start-50"}),s.jsx("div",{className:"position-absolute bottom-50 end-50"}),s.jsx("div",{className:"position-absolute bottom-0 start-0"}),s.jsx("div",{className:"position-absolute bottom-0 end-0"})]})})]})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"center-elements",className:"scroll-margin",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{tag:"h3",children:"Center elements"})})}),s.jsxs(l,{children:[s.jsxs("p",{children:["In addition, you can also center the elements with the transform utility class ",s.jsx("code",{children:".translate-middle"}),"."]}),s.jsxs("p",{children:["This class applies the transformations"," ",s.jsx("code",{children:"translateX(-50%)"})," and ",s.jsx("code",{children:"translateY(-50%)"})," ","to the element which, in combination with the edge positioning utilities, allows you to absolute center an element."]}),s.jsx(o,{code:`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0 translate-middle' />
	<div className='position-absolute top-0 start-50 translate-middle' />
	<div className='position-absolute top-0 start-100 translate-middle' />
	<div className='position-absolute top-50 start-0 translate-middle' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 start-100 translate-middle' />
	<div className='position-absolute top-100 start-0 translate-middle' />
	<div className='position-absolute top-100 start-50 translate-middle' />
	<div className='position-absolute top-100 start-100 translate-middle' />
</div>`,children:s.jsxs("div",{className:d("position-relative",n.example),children:[s.jsx("div",{className:"position-absolute top-0 start-0 translate-middle"}),s.jsx("div",{className:"position-absolute top-0 start-50 translate-middle"}),s.jsx("div",{className:"position-absolute top-0 start-100 translate-middle"}),s.jsx("div",{className:"position-absolute top-50 start-0 translate-middle"}),s.jsx("div",{className:"position-absolute top-50 start-50 translate-middle"}),s.jsx("div",{className:"position-absolute top-50 start-100 translate-middle"}),s.jsx("div",{className:"position-absolute top-100 start-0 translate-middle"}),s.jsx("div",{className:"position-absolute top-100 start-50 translate-middle"}),s.jsx("div",{className:"position-absolute top-100 start-100 translate-middle"})]})}),s.jsxs("p",{children:["By adding ",s.jsx("code",{children:".translate-middle-x"})," or"," ",s.jsx("code",{children:".translate-middle-y"})," classes, elements can be positioned only in horizontal or vertical direction."]}),s.jsx(o,{code:`
<div className='position-relative'>
	<div className='position-absolute top-0 start-0' />
	<div className='position-absolute top-0 start-50 translate-middle-x' />
	<div className='position-absolute top-0 end-0' />
	<div className='position-absolute top-50 start-0 translate-middle-y' />
	<div className='position-absolute top-50 start-50 translate-middle' />
	<div className='position-absolute top-50 end-0 translate-middle-y' />
	<div className='position-absolute bottom-0 start-0' />
	<div className='position-absolute bottom-0 start-50 translate-middle-x' />
	<div className='position-absolute bottom-0 end-0' />
</div>`,children:s.jsxs("div",{className:d("position-relative",n.example),children:[s.jsx("div",{className:"position-absolute top-0 start-0"}),s.jsx("div",{className:"position-absolute top-0 start-50 translate-middle-x"}),s.jsx("div",{className:"position-absolute top-0 end-0"}),s.jsx("div",{className:"position-absolute top-50 start-0 translate-middle-y"}),s.jsx("div",{className:"position-absolute top-50 start-50 translate-middle"}),s.jsx("div",{className:"position-absolute top-50 end-0 translate-middle-y"}),s.jsx("div",{className:"position-absolute bottom-0 start-0"}),s.jsx("div",{className:"position-absolute bottom-0 start-50 translate-middle-x"}),s.jsx("div",{className:"position-absolute bottom-0 end-0"})]})})]})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"examples",className:"scroll-margin",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{tag:"h3",children:"Examples"})})}),s.jsxs(l,{children:[s.jsx("p",{children:"Here are some real life examples of these classes:"}),s.jsx(o,{code:`
<button
	type='button'
	className='btn btn-primary position-relative'>
	Mails
	<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary'>
		+99 <span className='visually-hidden'>unread messages</span>
	</span>
</button>

<button
	type='button'
	className='btn btn-dark position-relative'>
	Marker
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 16 16'
		className='position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill'
		fill='#212529'
		xmlns='http://www.w3.org/2000/svg'>
		<path d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
	</svg>
</button>

<button
	type='button'
	className='btn btn-primary position-relative'>
	Alerts
	<span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
		<span className='visually-hidden'>unread messages</span>
	</span>
</button>`,children:s.jsxs("div",{className:"d-flex justify-content-around",children:[s.jsxs("button",{type:"button",className:"btn btn-primary position-relative",children:["Mails"," ",s.jsxs("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary",children:["+99"," ",s.jsx("span",{className:"visually-hidden",children:"unread messages"})]})]}),s.jsxs("button",{type:"button",className:"btn btn-dark position-relative",children:["Marker"," ",s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill",fill:"#212529",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"})})]}),s.jsxs("button",{type:"button",className:"btn btn-primary position-relative",children:["Alerts"," ",s.jsx("span",{className:"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2",children:s.jsx("span",{className:"visually-hidden",children:"unread messages"})})]})]})}),s.jsxs("p",{children:["You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the ",s.jsx("code",{children:"$position-values"})," variable."]}),s.jsx(o,{children:s.jsxs("div",{className:"position-relative m-4",children:[s.jsx("div",{className:"progress",style:{height:1},children:s.jsx("div",{className:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":25,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"progress"})}),s.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"},children:"1"}),s.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"},children:"2"}),s.jsx("button",{type:"button",className:"position-absolute p-0 top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem"},children:"3"})]})})]})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(e,{id:"sass",className:"scroll-margin",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{tag:"h3",children:"Sass"})})}),s.jsxs(l,{children:[s.jsxs(e,{id:"map",className:"scroll-margin rounded-2",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{children:"Map"})})}),s.jsxs(l,{children:[s.jsx("p",{children:"Default position utility values are declared in a Sass map, then used to generate our utilities."}),s.jsx(o,{code:`
$position-values: (
	0: 0,
	5: 5%,
	10: 10%,
	15: 15%,
	20: 20%,
	25: 25%,
	30: 30%,
	35: 35%,
	40: 40%,
	45: 45%,
	50: 50%,
	55: 55%,
	60: 60%,
	65: 65%,
	70: 70%,
	75: 75%,
	80: 80%,
	85: 85%,
	90: 90%,
	95: 95%,
	100: 100%
);`,language:"scss"})]})]}),s.jsxs(e,{id:"utilities-api",className:"scroll-margin rounded-2",children:[s.jsx(t,{children:s.jsx(i,{children:s.jsx(a,{children:"Utilities API"})})}),s.jsxs(l,{children:[s.jsxs("p",{children:["Overflow utilities are declared in our utilities API in"," ",s.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",s.jsx(b,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),s.jsx(o,{code:`
"position": (
  	property: position,
  	values: static relative absolute fixed sticky
),
"top": (
  	property: top,
  	values: $position-values
),
"bottom": (
  	property: bottom,
  	values: $position-values
),
"start": (
  	property: left,
  	class: start,
  	values: $position-values
),
"end": (
  	property: right,
  	class: end,
  	values: $position-values
),
"translate-middle": (
  	property: transform,
  	class: translate-middle,
  	values: (
		null: translate(-50%, -50%),
		x: translateX(-50%),
		y: translateY(-50%),
  	)
),`,language:"scss"})]})]})]})]})})]})})]})};export{T as default};
