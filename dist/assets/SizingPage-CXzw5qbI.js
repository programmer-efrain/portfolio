import{j as e,P as r,bp as h,S as o,Q as c,a as n,C as s,h as l,i as a,k as d,e as t,bs as g}from"./index-CH8wS3hI.js";import{B as v}from"./Breadcrumb-BaAopMTO.js";import{C as i}from"./CommonCodePreview-DEnCNn9V.js";import{P as u}from"./PlaceholderImage-xf2XVHY5.js";const E=()=>e.jsxs(r,{title:h.utilities.subMenu.sizing.text,children:[e.jsx(o,{children:e.jsx(c,{children:e.jsx(v,{list:[{title:"Utilities",to:"/utilities"},{title:"Sizing",to:"/utilities/sizing"}]})})}),e.jsx(n,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Sizing"}),e.jsx("p",{className:"lead",children:"Easily make an element as wide or as tall with our width and height utilities."})]}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"relative-to-the-parent",className:"scroll-margin",children:[e.jsx(l,{children:e.jsx(a,{children:e.jsx(d,{tag:"h3",children:"Relative to the parent"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Width and height utilities are generated from the utility API in"," ",e.jsx("code",{children:"_utilities.scss"}),". Includes support for"," ",e.jsx("code",{children:"25%"}),", ",e.jsx("code",{children:"50%"}),", ",e.jsx("code",{children:"75%"}),","," ",e.jsx("code",{children:"100%"}),", and ",e.jsx("code",{children:"auto"})," by default. Modify those values as you need to generate different utilities here."]}),e.jsxs(i,{code:`
<div className='w-25 p-3' style={{ backgroundColor: '#eee' }}>Width 25%</div>
<div className='w-50 p-3' style={{ backgroundColor: '#eee' }}>Width 50%</div>
<div className='w-75 p-3' style={{ backgroundColor: '#eee' }}>Width 75%</div>
<div className='w-100 p-3' style={{ backgroundColor: '#eee' }}>Width 100%</div>
<div className='w-auto p-3' style={{ backgroundColor: '#eee' }}>Width auto</div>`,children:[e.jsx("div",{className:"w-25 p-3",style:{backgroundColor:"#eee"},children:"Width 25%"}),e.jsx("div",{className:"w-50 p-3",style:{backgroundColor:"#eee"},children:"Width 50%"}),e.jsx("div",{className:"w-75 p-3",style:{backgroundColor:"#eee"},children:"Width 75%"}),e.jsx("div",{className:"w-100 p-3",style:{backgroundColor:"#eee"},children:"Width 100%"}),e.jsx("div",{className:"w-auto p-3",style:{backgroundColor:"#eee"},children:"Width auto"})]}),e.jsx(i,{code:`
<div style={{ height: 100, backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
	<div className='h-25 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 25%</div>
	<div className='h-50 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 50%</div>
	<div className='h-75 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 75%</div>
	<div className='h-100 d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height 100%</div>
	<div className='h-auto d-inline-block' style={{ width: 120, backgroundColor: 'rgba(0, 0, 255, .1)' }}>Height auto</div>
</div>`,children:e.jsxs("div",{style:{height:100,backgroundColor:"rgba(255, 0, 0, 0.1)"},children:[e.jsx("div",{className:"h-25 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 25%"}),e.jsx("div",{className:"h-50 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 50%"}),e.jsx("div",{className:"h-75 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 75%"}),e.jsx("div",{className:"h-100 d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height 100%"}),e.jsx("div",{className:"h-auto d-inline-block",style:{width:120,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Height auto"})]})}),e.jsxs("p",{children:["You can also use ",e.jsx("code",{children:"max-width: 100%;"})," and"," ",e.jsx("code",{children:"max-height: 100%;"})," utilities as needed."]}),e.jsx(i,{code:"<img src='...' className='mw-100' alt='...' />",children:e.jsx(u,{width:"100%",height:100,text:"Max-width 100%",className:"mw-100"})}),e.jsx(i,{code:`
<div style={{ height: 100, backgroundColor: 'rgba(255, 0, 0, .1)' }}>
	<div className='mh-100' style={{ width: 100, height: 200, backgroundColor: 'rgba(0, 0, 255, .1)' }}>
		Max-height 100%
	</div>
</div>`,children:e.jsx("div",{style:{height:100,backgroundColor:"rgba(255, 0, 0, 0.1)"},children:e.jsx("div",{className:"mh-100",style:{width:100,height:200,backgroundColor:"rgba(0, 0, 255, 0.1)"},children:"Max-height 100%"})})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"relative-to-the-viewport",className:"scroll-margin",children:[e.jsx(l,{children:e.jsx(a,{children:e.jsx(d,{tag:"h3",children:"Relative to the viewport"})})}),e.jsxs(t,{children:[e.jsx("p",{children:"You can also use utilities to set the width and height relative to the viewport."}),e.jsx(i,{code:`
<div className='min-vw-100'>Min-width 100vw</div>
<div className='min-vh-100'>Min-height 100vh</div>
<div className='vw-100'>Width 100vw</div>
<div className='vh-100'>Height 100vh</div>`})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"sass",className:"scroll-margin",children:[e.jsx(l,{children:e.jsx(a,{children:e.jsx(d,{tag:"h3",children:"Sass"})})}),e.jsx(t,{children:e.jsxs(s,{id:"utilities-api",className:"scroll-margin rounded-2",children:[e.jsx(l,{children:e.jsx(a,{children:e.jsx(d,{children:"Utilities API"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Sizing utilities are declared in our utilities API in"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",e.jsx(g,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),e.jsx(i,{code:`    
"width": (
  	property: width,
  	class: w,
  	values: (
		25: 25%,
		50: 50%,
		75: 75%,
		100: 100%,
		auto: auto
  	)
),
"max-width": (
  	property: max-width,
  	class: mw,
  	values: (100: 100%)
),
"viewport-width": (
  	property: width,
  	class: vw,
  	values: (100: 100vw)
),
"min-viewport-width": (
  	property: min-width,
  	class: min-vw,
  	values: (100: 100vw)
),
"height": (
  	property: height,
  	class: h,
  	values: (
		25: 25%,
		50: 50%,
		75: 75%,
		100: 100%,
		auto: auto
  	)
),
"max-height": (
  	property: max-height,
  	class: mh,
  	values: (100: 100%)
),
"viewport-height": (
  	property: height,
  	class: vh,
  	values: (100: 100vh)
),
"min-viewport-height": (
  	property: min-height,
  	class: min-vh,
  	values: (100: 100vh)
),`,language:"scss"})]})]})})]})})]})})]});export{E as default};
