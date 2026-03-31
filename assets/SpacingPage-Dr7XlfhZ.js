import{j as e,P as l,bp as c,S as o,Q as h,a as p,C as s,h as i,i as r,k as a,e as d,bs as t}from"./index-CH8wS3hI.js";import{B as g}from"./Breadcrumb-BaAopMTO.js";import{C as n}from"./CommonCodePreview-DEnCNn9V.js";const N=()=>e.jsxs(l,{title:c.utilities.subMenu.spacing.text,children:[e.jsx(o,{children:e.jsx(h,{children:e.jsx(g,{list:[{title:"Utilities",to:"/utilities"},{title:"Spacing",to:"/utilities/spacing"}]})})}),e.jsx(p,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Spacing"}),e.jsx("p",{className:"lead",children:"Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance."})]}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"margin-and-padding",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{tag:"h3",children:"Margin and padding"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["Assign responsive-friendly ",e.jsx("code",{children:"margin"})," or"," ",e.jsx("code",{children:"padding"})," values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from ",e.jsx("code",{children:".25rem"})," to ",e.jsx("code",{children:"3rem"}),"."]}),e.jsxs("p",{children:["Using the CSS Grid layout module? Consider using"," ",e.jsx(t,{to:"#gap",children:"the gap utility"}),"."]}),e.jsxs(s,{id:"notation",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{children:"Notation"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["Spacing utilities that apply to all breakpoints, from"," ",e.jsx("code",{children:"xs"})," to ",e.jsx("code",{children:"xxl"}),", have no breakpoint abbreviation in them. This is because those classes are applied from ",e.jsx("code",{children:"min-width: 0"})," and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation."]}),e.jsxs("p",{children:["The classes are named using the format"," ",e.jsx("code",{children:"{property}{sides}-{size}"})," for"," ",e.jsx("code",{children:"xs"})," and"," ",e.jsx("code",{children:"{property}{sides}-{breakpoint}-{size}"})," ","for ",e.jsx("code",{children:"sm"}),", ",e.jsx("code",{children:"md"}),", ",e.jsx("code",{children:"lg"}),","," ",e.jsx("code",{children:"xl"}),", and ",e.jsx("code",{children:"xxl"}),"."]}),e.jsxs("p",{children:["Where ",e.jsx("em",{children:"property"})," is one of:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"m"})," - for classes that set"," ",e.jsx("code",{children:"margin"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"p"})," - for classes that set"," ",e.jsx("code",{children:"padding"})]})]}),e.jsxs("p",{children:["Where ",e.jsx("em",{children:"sides"})," is one of:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"t"})," - for classes that set"," ",e.jsx("code",{children:"margin-top"})," or ",e.jsx("code",{children:"padding-top"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"b"})," - for classes that set"," ",e.jsx("code",{children:"margin-bottom"})," or"," ",e.jsx("code",{children:"padding-bottom"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"s"})," - for classes that set"," ",e.jsx("code",{children:"margin-left"})," or"," ",e.jsx("code",{children:"padding-left"})," in LTR,"," ",e.jsx("code",{children:"margin-right"})," or"," ",e.jsx("code",{children:"padding-right"})," in RTL"]}),e.jsxs("li",{children:[e.jsx("code",{children:"e"})," - for classes that set"," ",e.jsx("code",{children:"margin-right"})," or"," ",e.jsx("code",{children:"padding-right"})," in LTR,"," ",e.jsx("code",{children:"margin-left"})," or"," ",e.jsx("code",{children:"padding-left"})," in RTL"]}),e.jsxs("li",{children:[e.jsx("code",{children:"x"})," - for classes that set both"," ",e.jsx("code",{children:"*-left"})," and ",e.jsx("code",{children:"*-right"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"y"})," - for classes that set both"," ",e.jsx("code",{children:"*-top"})," and ",e.jsx("code",{children:"*-bottom"})]}),e.jsxs("li",{children:["blank - for classes that set a ",e.jsx("code",{children:"margin"})," ","or ",e.jsx("code",{children:"padding"})," on all 4 sides of the element"]})]}),e.jsxs("p",{children:["Where ",e.jsx("em",{children:"size"})," is one of:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"0"})," - for classes that eliminate the"," ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," by setting it to ",e.jsx("code",{children:"0"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"1"})," - (by default) for classes that set the ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," to"," ",e.jsx("code",{children:"$spacer * .25"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"2"})," - (by default) for classes that set the ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," to"," ",e.jsx("code",{children:"$spacer * .5"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"3"})," - (by default) for classes that set the ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," to"," ",e.jsx("code",{children:"$spacer"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"4"})," - (by default) for classes that set the ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," to"," ",e.jsx("code",{children:"$spacer * 1.5"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"5"})," - (by default) for classes that set the ",e.jsx("code",{children:"margin"})," or ",e.jsx("code",{children:"padding"})," to"," ",e.jsx("code",{children:"$spacer * 3"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"auto"})," - for classes that set the"," ",e.jsx("code",{children:"margin"})," to auto"]})]}),e.jsxs("p",{children:["(You can add more sizes by adding entries to the"," ",e.jsx("code",{children:"$spacers"})," Sass map variable.)"]})]})]}),e.jsxs(s,{id:"examples",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{children:"Examples"})})}),e.jsxs(d,{children:[e.jsx("p",{children:"Here are some representative examples of these classes:"}),e.jsx(n,{code:`.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}`,language:"scss"})]})]}),e.jsxs(s,{id:"horizontal-centering",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{children:"Horizontal centering"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["Additionally, Bootstrap also includes an"," ",e.jsx("code",{children:".mx-auto"})," class for horizontally centering fixed-width block level content—that is, content that has ",e.jsx("code",{children:"display: block"})," and a ",e.jsx("code",{children:"width"})," ","set—by setting the horizontal margins to"," ",e.jsx("code",{children:"auto"}),"."]}),e.jsx(n,{code:`
<div className='mx-auto' style={{ width: 200, backgroundColor: 'rgba(86, 61, 124, 0.15)' }}>
	Centered element
</div>`,children:e.jsx("div",{className:"mx-auto",style:{width:200,backgroundColor:"rgba(86, 61, 124, 0.15)"},children:"Centered element"})})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"negative-margin",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{tag:"h3",children:"Negative margin"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["In CSS, ",e.jsx("code",{children:"margin"})," properties can utilize negative values (",e.jsx("code",{children:"padding"})," cannot). These negative margins are"," ",e.jsx("strong",{children:"disabled by default"}),", but can be enabled in Sass by setting ",e.jsx("code",{children:"$enable-negative-margins: true"}),"."]}),e.jsxs("p",{children:["The syntax is nearly the same as the default, positive margin utilities, but with the addition of ",e.jsx("code",{children:"n"})," before the requested size. Here’s an example class that’s the opposite of"," ",e.jsx("code",{children:".mt-1"}),":"]}),e.jsx(n,{code:`
.mt-n1 {
	margin-top: -0.25rem !important;
}`,language:"scss"})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"gap",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{tag:"h3",children:"Gap"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["When using ",e.jsx("code",{children:"display: grid"}),", you can make use of"," ",e.jsx("code",{children:"gap"})," utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a ",e.jsx("code",{children:"display: grid"})," container). Gap utilities are responsive by default, and are generated via our utilities API, based on the ",e.jsx("code",{children:"$spacers"})," Sass map."]}),e.jsx(n,{code:`
<div className='d-grid gap-3'>
	<div className='p-2 bg-light border'>Grid item 1</div>
	<div className='p-2 bg-light border'>Grid item 2</div>
	<div className='p-2 bg-light border'>Grid item 3</div>
</div>`,children:e.jsxs("div",{className:"d-grid gap-3",children:[e.jsx("div",{className:"p-2 bg-light border",children:"Grid item 1"}),e.jsx("div",{className:"p-2 bg-light border",children:"Grid item 2"}),e.jsx("div",{className:"p-2 bg-light border",children:"Grid item 3"})]})}),e.jsxs("p",{children:["Support includes responsive options for all of Bootstrap’s grid breakpoints, as well as six sizes from the ",e.jsx("code",{children:"$spacers"})," ","map (",e.jsx("code",{children:"0"}),"–",e.jsx("code",{children:"5"}),"). There is no"," ",e.jsx("code",{children:".gap-auto"})," utility class as it’s effectively the same as ",e.jsx("code",{children:".gap-0"}),"."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"sass",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{tag:"h3",children:"Sass"})})}),e.jsxs(d,{children:[e.jsxs(s,{id:"map",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{children:"Map"})})}),e.jsxs(d,{children:[e.jsx("p",{children:"Spacing utilities are declared via Sass map and then generated with our utilities API."}),e.jsx(n,{code:`
$spacer: 1rem;
$spacers: (
  	0: 0,
  	1: $spacer / 4,
  	2: $spacer / 2,
  	3: $spacer,
  	4: $spacer * 1.5,
  	5: $spacer * 3,
);

$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null);`,language:"scss"})]})]}),e.jsxs(s,{id:"utilities-api",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(r,{children:e.jsx(a,{children:"Utilities API"})})}),e.jsxs(d,{children:[e.jsxs("p",{children:["Sizing utilities are declared in our utilities API in"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",e.jsx(t,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),e.jsx(n,{code:`
"margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: map-merge($spacers, (auto: auto))
),
"margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: map-merge($spacers, (auto: auto))
),
"margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: map-merge($spacers, (auto: auto))
),
"margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: map-merge($spacers, (auto: auto))
),
"margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: map-merge($spacers, (auto: auto))
),
"margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: map-merge($spacers, (auto: auto))
),
"margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: map-merge($spacers, (auto: auto))
),
// Negative margin utilities
"negative-margin": (
  	responsive: true,
  	property: margin,
  	class: m,
  	values: $negative-spacers
),
"negative-margin-x": (
  	responsive: true,
  	property: margin-right margin-left,
  	class: mx,
  	values: $negative-spacers
),
"negative-margin-y": (
  	responsive: true,
  	property: margin-top margin-bottom,
  	class: my,
  	values: $negative-spacers
),
"negative-margin-top": (
  	responsive: true,
  	property: margin-top,
  	class: mt,
  	values: $negative-spacers
),
"negative-margin-end": (
  	responsive: true,
  	property: margin-right,
  	class: me,
  	values: $negative-spacers
),
"negative-margin-bottom": (
  	responsive: true,
  	property: margin-bottom,
  	class: mb,
  	values: $negative-spacers
),
"negative-margin-start": (
  	responsive: true,
  	property: margin-left,
  	class: ms,
  	values: $negative-spacers
),
// Padding utilities
"padding": (
  	responsive: true,
  	property: padding,
  	class: p,
  	values: $spacers
),
"padding-x": (
  	responsive: true,
  	property: padding-right padding-left,
  	class: px,
  	values: $spacers
),
"padding-y": (
  	responsive: true,
  	property: padding-top padding-bottom,
  	class: py,
  	values: $spacers
),
"padding-top": (
  	responsive: true,
  	property: padding-top,
  	class: pt,
  	values: $spacers
),
"padding-end": (
  	responsive: true,
  	property: padding-right,
  	class: pe,
  	values: $spacers
),
"padding-bottom": (
  	responsive: true,
  	property: padding-bottom,
  	class: pb,
  	values: $spacers
),
"padding-start": (
  	responsive: true,
  	property: padding-left,
  	class: ps,
  	values: $spacers
),`,language:"scss"})]})]})]})]})})]})})]});export{N as default};
