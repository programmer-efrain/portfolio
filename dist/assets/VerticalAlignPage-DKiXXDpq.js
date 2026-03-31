import{j as e,P as c,bp as o,S as r,Q as m,a as x,C as s,e as l,bs as i,h as a,i as n,k as d}from"./index-CH8wS3hI.js";import{B as h}from"./Breadcrumb-BaAopMTO.js";import{C as t}from"./CommonCodePreview-DEnCNn9V.js";const v=()=>e.jsxs(c,{title:o.utilities.subMenu.verticalAlign.text,children:[e.jsx(r,{children:e.jsx(m,{children:e.jsx(h,{list:[{title:"Utilities",to:"/utilities"},{title:"Vertical Align",to:"/utilities/vertical-align"}]})})}),e.jsx(x,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Vertical alignment"}),e.jsx("p",{className:"lead",children:"Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."})]}),e.jsx("div",{className:"col-12",children:e.jsx(s,{children:e.jsxs(l,{children:[e.jsxs("p",{children:["Change the alignment of elements with the"," ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align",target:"_blank",rel:"noreferrer",children:e.jsx("code",{children:"vertical-alignment"})})," ","utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements."]}),e.jsxs("p",{children:["Choose from ",e.jsx("code",{children:".align-baseline"}),","," ",e.jsx("code",{children:".align-top"}),", ",e.jsx("code",{children:".align-middle"}),","," ",e.jsx("code",{children:".align-bottom"}),", ",e.jsx("code",{children:".align-text-bottom"}),", and"," ",e.jsx("code",{children:".align-text-top"})," as needed."]}),e.jsxs("p",{children:["To vertically center non-inline content (like"," ",e.jsx("code",{children:"<div>"}),"s and more), use our"," ",e.jsx(i,{to:"../utilities/flex/#align-items",children:"flex box utilities"}),"."]}),e.jsx("p",{children:"With inline elements:"}),e.jsxs(t,{code:`
<span className='align-baseline'>baseline</span>
<span className='align-top'>top</span>
<span className='align-middle'>middle</span>
<span className='align-bottom'>bottom</span>
<span className='align-text-top'>text-top</span>
<span className='align-text-bottom'>text-bottom</span>`,children:[e.jsx("span",{className:"align-baseline",children:"baseline"})," ",e.jsx("span",{className:"align-top",children:"top"})," ",e.jsx("span",{className:"align-middle",children:"middle"})," ",e.jsx("span",{className:"align-bottom",children:"bottom"})," ",e.jsx("span",{className:"align-text-top",children:"text-top"})," ",e.jsx("span",{className:"align-text-bottom",children:"text-bottom"})]}),e.jsx("p",{children:"With table cells:"}),e.jsx(t,{code:`
<table style={{ height: 100 }}>
	<tbody>
		<tr>
			<td className='align-baseline'>baseline</td>
			<td className='align-top'>top</td>
			<td className='align-middle'>middle</td>
			<td className='align-bottom'>bottom</td>
			<td className='align-text-top'>text-top</td>
			<td className='align-text-bottom'>text-bottom</td>
		</tr>
	</tbody>
</table>`,children:e.jsx("table",{style:{height:100},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"align-baseline",children:"baseline"}),e.jsx("td",{className:"align-top",children:"top"}),e.jsx("td",{className:"align-middle",children:"middle"}),e.jsx("td",{className:"align-bottom",children:"bottom"}),e.jsx("td",{className:"align-text-top",children:"text-top"}),e.jsx("td",{className:"align-text-bottom",children:"text-bottom"})]})})})})]})})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"sass",className:"scroll-margin",children:[e.jsx(a,{children:e.jsx(n,{children:e.jsx(d,{tag:"h3",children:"Sass"})})}),e.jsx(l,{children:e.jsxs(s,{id:"utilities-api",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(n,{children:e.jsx(d,{children:"Utilities API"})})}),e.jsxs(l,{children:[e.jsxs("p",{children:["Vertical align utilities are declared in our utilities API in"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",e.jsx(i,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),e.jsx(t,{code:`
"align": (
	property: vertical-align,
	class: align,
	values: baseline top middle bottom text-bottom text-top
),`,language:"scss"})]})]})})]})})]})})]});export{v as default};
