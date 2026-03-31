import{r as h,j as e,P as j,bp as s,S as u,Q as g,R as v,B as r,V as S,a as f,C as a,h as i,i as n,k as l,e as c,bq as o}from"./index-CH8wS3hI.js";import{B as E}from"./Breadcrumb-BaAopMTO.js";import{C as N}from"./CommonStoryBtn-BMxsH-1u.js";import{S as y}from"./ScrollspyNav-B7raMFXY.js";import{H as b}from"./scene1-D_-u9-CD.js";import{H as A}from"./scene1-DXq3KDI3.js";import{H}from"./scene2-B581-_Y8.js";import{H as C}from"./scene2-DxcZ_wig.js";import"./inherits-BYLYZa-_.js";import"./index-CjkRidEj.js";const T=()=>{const d=`
<ScrollspyNav
	tag={ String } // Example: 'div'
	items={ Array } // Example: ['first', 'second', 'third']
	setActiveId={ Function } // NOT REQUIRED
	offset={ Number } // -500
	{...props}>
	<Button
		tag='a' // * Required
		to={ String } // Example: #first
		{...props}>
		... {// Button text}
	</Button>
	...
</ScrollspyNav>
...
<Component
	id={ String} // Example: first
	{...props}>
	...
</Component>
<div
	id={ String} // Example: second
	>
	...
</div>
...`,m=`
const [state, setState] = useState(null);`,x=`
<ScrollspyNav
	items={ Array } // Example: ['first', 'second', 'third']
	setActiveId={ Function } // Example: setState
	offset={ Number } // -500
/>
<Button
	tag='a'
	to={ String } // Example: #first
	isActive={ Boolean } // Example: state === 'first'
	{...props}>
	... {// Button text}
</Button>
<HashLink
	to={ String } // Example: #second
	className={ String } // Example: state === 'second' && 'active-item'
	style={ Object } // Example: {color: state === 'second' ? 'green' : 'red'}
	{...props}>
</HashLink>
...
<Component
	id={ String} // Example: first
	{...props}>
	...
</Component>
<div
	id={ String} // Example: second
	>
	...
</div>
...`,[t,p]=h.useState(null);return e.jsxs(j,{title:s.components.subMenu.scrollspy.text,children:[e.jsxs(u,{children:[e.jsxs(g,{children:[e.jsx(E,{list:[{title:s.components.text,to:`/${s.components.path}`},{title:s.components.subMenu.scrollspy.text,to:`/${s.components.subMenu.scrollspy.path}`}]}),e.jsx(v,{}),e.jsx(y,{items:["general-usage","second","third"],setActiveId:p,offset:-500}),e.jsx(r,{tag:"a",to:"#general-usage",color:"primary",isLight:!0,isActive:t==="general-usage",children:"General Usage"}),e.jsx(r,{tag:"a",to:"#second",color:"primary",isLight:!0,isActive:t==="second",children:"Second"}),e.jsx(r,{tag:"a",to:"#third",color:"primary",isLight:!0,isActive:t==="third",children:"Third"})]}),e.jsx(S,{children:e.jsx(N,{to:"/docs/components-scrollspynav--default"})})]}),e.jsx(f,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsxs(a,{id:"general-usage",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(n,{icon:"Assignment",children:e.jsx(l,{children:"General Usage"})})}),e.jsx(c,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-xl-6",children:[e.jsx("h4",{children:"1. Way (with children)"}),e.jsx(o,{children:d})]}),e.jsxs("div",{className:"col-xl-6",children:[e.jsx("h4",{children:"2. Way (with state)"}),e.jsx(o,{className:"mb-4",children:m}),e.jsx(o,{children:x})]})]})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(a,{id:"second",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(n,{children:e.jsx(l,{children:"Second"})})}),e.jsx(c,{children:e.jsx("div",{className:"row d-flex align-items-center",children:e.jsx("div",{className:"col-12 d-flex align-items-baseline justify-content-center",children:e.jsx("img",{srcSet:b,src:A,alt:"Humans",style:{height:"50vh"}})})})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(a,{id:"third",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(n,{children:e.jsx(l,{children:"Third"})})}),e.jsx(c,{children:e.jsx("div",{className:"row d-flex align-items-center",children:e.jsx("div",{className:"col-12 d-flex align-items-baseline justify-content-center",children:e.jsx("img",{srcSet:H,src:C,alt:"Humans",style:{height:"50vh"}})})})})]})})]})})]})};export{T as default};
