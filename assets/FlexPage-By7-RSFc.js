import{a1 as a,j as e,P as j,bp as m,S as f,Q as v,a as g,C as n,h as c,i as r,k as x,e as t,c as i,bs as p}from"./index-CH8wS3hI.js";import{B as u}from"./Breadcrumb-BaAopMTO.js";import{C as d}from"./CommonCodePreview-DEnCNn9V.js";const N=a({example:{"&, *":{backgroundColor:"rgba(108, 93, 211, 0.15)",border:"1px solid rgba(108, 93, 211, 0.15)"},"& > *":{padding:"0.5rem"}}}),J=()=>{const l=N(),s=e.jsx("div",{children:"Flex item"}),h=e.jsxs(e.Fragment,{children:[s,s,s]}),o=e.jsxs(e.Fragment,{children:[s,s,s,s,s,s,s,s,s,s,s,s,s,s,s]});return e.jsxs(j,{title:m.utilities.subMenu.flex.text,children:[e.jsx(f,{children:e.jsx(v,{children:e.jsx(u,{list:[{title:"Utilities",to:"/utilities"},{title:"Flex",to:"/utilities/flex"}]})})}),e.jsx(g,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Flex"}),e.jsx("p",{className:"lead",children:"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."})]}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"enable-flex-behaviors",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Enable flex behaviors"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Apply ",e.jsx("code",{children:"display"})," utilities to create a flexbox container and transform"," ",e.jsx("strong",{children:"direct children elements"})," into flex items. Flex containers and items are able to be modified further with additional flex properties."]}),e.jsx(d,{code:`
<div className='d-flex'>
	I'm a flexbox container!
</div>`,children:e.jsx("div",{className:i("d-flex","p-2",l.example),children:"I'm a flexbox container!"})}),e.jsx(d,{code:`
<div className='d-inline-flex'>
	I'm a flexbox container!
</div>`,children:e.jsx("div",{className:i("d-inline-flex","p-2",l.example),children:"I'm an inline flexbox container!"})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:".d-flex"})," and"," ",e.jsx("code",{children:".d-inline-flex"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".d-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-inline-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-sm-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-sm-inline-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-md-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-md-inline-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-lg-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-lg-inline-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-xl-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-xl-inline-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-xxl-flex"})}),e.jsx("li",{children:e.jsx("code",{children:".d-xxl-inline-flex"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"direction",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Direction"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is ",e.jsx("code",{children:"row"}),". However, you may encounter situations where you needed to explicitly set this value (like responsive layouts)."]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:".flex-row"})," to set a horizontal direction (the browser default), or ",e.jsx("code",{children:".flex-row-reverse"})," to start the horizontal direction from the opposite side."]}),e.jsxs(d,{code:`
<div className='d-flex flex-row'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>
<div className='d-flex flex-row-reverse'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>`,children:[e.jsxs("div",{className:i("d-flex","flex-row","mb-3",l.example),children:[e.jsx("div",{children:"Flex item 1"}),e.jsx("div",{children:"Flex item 2"}),e.jsx("div",{children:"Flex item 3"})]}),e.jsxs("div",{className:i("d-flex","flex-row-reverse","mb-3",l.example),children:[e.jsx("div",{children:"Flex item 1"}),e.jsx("div",{children:"Flex item 2"}),e.jsx("div",{children:"Flex item 3"})]})]}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:".flex-column"})," to set a vertical direction, or"," ",e.jsx("code",{children:".flex-column-reverse"})," to start the vertical direction from the opposite side."]}),e.jsxs(d,{code:`
<div className='d-flex flex-column'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>
<div className='d-flex flex-column-reverse'>
	<div>Flex item 1</div>
	<div>Flex item 2</div>
	<div>Flex item 3</div>
</div>`,children:[e.jsxs("div",{className:i("d-flex","flex-column","mb-3",l.example),children:[e.jsx("div",{children:"Flex item 1"}),e.jsx("div",{children:"Flex item 2"}),e.jsx("div",{children:"Flex item 3"})]}),e.jsxs("div",{className:i("d-flex","flex-column-reverse","mb-3",l.example),children:[e.jsx("div",{children:"Flex item 1"}),e.jsx("div",{children:"Flex item 2"}),e.jsx("div",{children:"Flex item 3"})]})]}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"flex-direction"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".flex-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-column-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-column-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-column-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-column-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-column-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-row"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-row-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-column"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-column-reverse"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"justify-content",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Justify content"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:"justify-content"})," utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if ",e.jsx("code",{children:"flex-direction: column"}),"). Choose from ",e.jsx("code",{children:"start"})," (browser default),"," ",e.jsx("code",{children:"end"}),", ",e.jsx("code",{children:"center"}),", ",e.jsx("code",{children:"between"}),","," ",e.jsx("code",{children:"around"}),", or ",e.jsx("code",{children:"evenly"}),"."]}),e.jsxs(d,{code:`
<div className='d-flex justify-content-start'>...</div>
<div className='d-flex justify-content-end'>...</div>
<div className='d-flex justify-content-center'>...</div>
<div className='d-flex justify-content-between'>...</div>
<div className='d-flex justify-content-around'>...</div>
<div className='d-flex justify-content-evenly'>...</div>`,children:[e.jsx("div",{className:i("d-flex","justify-content-start","mb-3",l.example),children:h}),e.jsx("div",{className:i("d-flex","justify-content-end","mb-3",l.example),children:h}),e.jsx("div",{className:i("d-flex","justify-content-center","mb-3",l.example),children:h}),e.jsx("div",{className:i("d-flex","justify-content-between","mb-3",l.example),children:h}),e.jsx("div",{className:i("d-flex","justify-content-around","mb-3",l.example),children:h}),e.jsx("div",{className:i("d-flex","justify-content-evenly","mb-3",l.example),children:h})]}),e.jsxs("p",{children:["Responsive variations also exist for"," ",e.jsx("code",{children:"justify-content"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".justify-content-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-evenly"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-sm-evenly"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-md-evenly"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-lg-evenly"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xl-evenly"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-between"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-around"})}),e.jsx("li",{children:e.jsx("code",{children:".justify-content-xxl-evenly"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"align-items",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Align items"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:"align-items"})," utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if ",e.jsx("code",{children:"flex-direction: column"}),"). Choose from ",e.jsx("code",{children:"start"}),", ",e.jsx("code",{children:"end"}),", ",e.jsx("code",{children:"center"}),","," ",e.jsx("code",{children:"baseline"}),", or ",e.jsx("code",{children:"stretch"})," (browser default)."]}),e.jsx(d,{code:`
<div className='d-flex align-items-start'>...</div>
<div className='d-flex align-items-end'>...</div>
<div className='d-flex align-items-center'>...</div>
<div className='d-flex align-items-baseline'>...</div>
<div className='d-flex align-items-stretch'>...</div>`,children:e.jsxs("div",{className:"bd-example",children:[e.jsx("div",{className:i("d-flex","align-items-start","mb-3",l.example),style:{height:100},children:h}),e.jsx("div",{className:i("d-flex","align-items-end","mb-3",l.example),style:{height:100},children:h}),e.jsx("div",{className:i("d-flex","align-items-center","mb-3",l.example),style:{height:100},children:h}),e.jsx("div",{className:i("d-flex","align-items-baseline","mb-3",l.example),style:{height:100},children:h}),e.jsx("div",{className:i("d-flex","align-items-stretch","mb-3",l.example),style:{height:100},children:h})]})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"align-items"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".align-items-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-sm-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-sm-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-sm-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-sm-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-sm-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-md-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-md-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-md-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-md-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-md-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-lg-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-lg-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-lg-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-lg-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-lg-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xl-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xl-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xxl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xxl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xxl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xxl-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-items-xxl-stretch"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"align-self",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Align self"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:"align-self"})," utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if ",e.jsx("code",{children:"flex-direction: column"}),"). Choose from the same options as ",e.jsx("code",{children:"align-items"}),":"," ",e.jsx("code",{children:"start"}),", ",e.jsx("code",{children:"end"}),", ",e.jsx("code",{children:"center"}),","," ",e.jsx("code",{children:"baseline"}),", or ",e.jsx("code",{children:"stretch"})," (browser default)."]}),e.jsxs(d,{code:`
...<div className='align-self-start'>Aligned flex item</div>...
...<div className='align-self-end'>Aligned flex item</div>...
...<div className='align-self-center'>Aligned flex item</div>...
...<div className='align-self-baseline'>Aligned flex item</div>...
...<div className='align-self-stretch'>Aligned flex item</div>...`,children:[e.jsxs("div",{className:i("d-flex","mb-3",l.example),style:{height:100},children:[s,e.jsx("div",{className:"align-self-start",children:"Aligned flex item"}),s]}),e.jsxs("div",{className:i("d-flex","mb-3",l.example),style:{height:100},children:[s,e.jsx("div",{className:"align-self-end",children:"Aligned flex item"}),s]}),e.jsxs("div",{className:i("d-flex","mb-3",l.example),style:{height:100},children:[s,e.jsx("div",{className:"align-self-center",children:"Aligned flex item"}),s]}),e.jsxs("div",{className:i("d-flex","mb-3",l.example),style:{height:100},children:[s,e.jsx("div",{className:"align-self-baseline",children:"Aligned flex item"}),s]}),e.jsxs("div",{className:i("d-flex",l.example),style:{height:100},children:[s,e.jsx("div",{className:"align-self-stretch",children:"Aligned flex item"}),s]})]}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"align-self"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".align-self-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-sm-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-sm-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-sm-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-sm-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-sm-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-md-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-md-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-md-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-md-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-md-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-lg-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-lg-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-lg-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-lg-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-lg-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xl-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xl-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xxl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xxl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xxl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xxl-baseline"})}),e.jsx("li",{children:e.jsx("code",{children:".align-self-xxl-stretch"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"fill",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Fill"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use the ",e.jsx("code",{children:".flex-fill"})," class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space."]}),e.jsx(d,{code:`
<div className='d-flex'>
	<div className='flex-fill'>Flex item with a lot of content</div>
	<div className='flex-fill'>Flex item</div>
	<div className='flex-fill'>Flex item</div>
</div>`,children:e.jsxs("div",{className:i("d-flex",l.example),children:[e.jsx("div",{className:"flex-fill",children:"Flex item with a lot of content"}),e.jsx("div",{className:"flex-fill",children:"Flex item"}),e.jsx("div",{className:"flex-fill",children:"Flex item"})]})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"flex-fill"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".flex-fill"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-fill"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-fill"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-fill"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-fill"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-fill"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"grow-and-shrink",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Grow and shrink"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:".flex-grow-*"})," utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the ",e.jsx("code",{children:".flex-grow-1"})," elements uses all available space it can, while allowing the remaining two flex items their necessary space."]}),e.jsx(d,{code:`
<div className='d-flex'>
	<div className='flex-grow-1'>Flex item</div>
	<div>Flex item</div>
	<div>Third flex item</div>
</div>`,children:e.jsxs("div",{className:i("d-flex",l.example),children:[e.jsx("div",{className:"flex-grow-1",children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Third flex item"})]})}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:".flex-shrink-*"})," utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with ",e.jsx("code",{children:".flex-shrink-1"})," is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with ",e.jsx("code",{children:".w-100"}),"."]}),e.jsx(d,{code:`
<div className='d-flex'>
	<div className='w-100'>Flex item</div>
	<div className='flex-shrink-1'>Flex item</div>
</div>`,children:e.jsxs("div",{className:i("d-flex",l.example),children:[e.jsx("div",{className:"w-100",children:"Flex item"}),e.jsx("div",{className:"flex-shrink-1",children:"Flex item"})]})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"flex-grow"})," and"," ",e.jsx("code",{children:"flex-shrink"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".flex-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-{grow | shrink}-1"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-{grow | shrink}-1"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-{grow | shrink}-1"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-{grow | shrink}-1"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-{grow | shrink}-1"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-{grow | shrink}-0"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-{grow | shrink}-1"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"auto-margins",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Auto margins"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (",e.jsx("code",{children:".me-auto"}),"), and pushing two items to the left (",e.jsx("code",{children:".ms-auto"}),")."]}),e.jsxs(d,{code:`
<div className='d-flex'>
	<div>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex'>
	<div className='me-auto'>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex'>
	<div>Flex item</div>
	<div>Flex item</div>
	<div className='ms-auto'>Flex item</div>
</div>`,children:[e.jsx("div",{className:i("d-flex","mb-3",l.example),children:h}),e.jsxs("div",{className:i("d-flex","mb-3",l.example),children:[e.jsx("div",{className:"me-auto",children:"Flex item"}),s,s]}),e.jsxs("div",{className:i("d-flex",l.example),children:[s,s,e.jsx("div",{className:"ms-auto",children:"Flex item"})]})]}),e.jsxs(n,{id:"with-align-items",className:"scroll-margin rounded-2",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{children:"With align-items"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Vertically move one flex item to the top or bottom of a container by mixing ",e.jsx("code",{children:"align-items"}),","," ",e.jsx("code",{children:"flex-direction: column"}),", and"," ",e.jsx("code",{children:"margin-top: auto"})," or"," ",e.jsx("code",{children:"margin-bottom: auto"}),"."]}),e.jsxs(d,{code:`
<div className='d-flex align-items-start flex-column' style={{ height: 200 }}>
	<div className='mb-auto'>Flex item</div>
	<div>Flex item</div>
	<div>Flex item</div>
</div>

<div className='d-flex align-items-end flex-column' style={{ height: 200 }}>
	<div>Flex item</div>
	<div>Flex item</div>
	<div className='mt-auto'>Flex item</div>
</div>`,children:[e.jsxs("div",{className:i("d-flex","align-items-start","flex-column","mb-3",l.example),style:{height:200},children:[e.jsx("div",{className:"mb-auto",children:"Flex item"}),s,s]}),e.jsxs("div",{className:i("d-flex","align-items-end","flex-column",l.example),style:{height:200},children:[s,s,e.jsx("div",{className:"mt-auto",children:"Flex item"})]})]})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"wrap",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Wrap"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with"," ",e.jsx("code",{children:".flex-nowrap"}),", wrapping with ",e.jsx("code",{children:".flex-wrap"}),", or reverse wrapping with ",e.jsx("code",{children:".flex-wrap-reverse"}),"."]}),e.jsx(d,{code:`
<div className='d-flex flex-nowrap'>
	...
</div>`,children:e.jsxs("div",{className:i("d-flex","flex-nowrap",l.example),style:{width:"8rem"},children:[e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"})]})}),e.jsx(d,{code:`
<div className="d-flex flex-wrap">
	...
</div>`,children:e.jsxs("div",{className:i("d-flex","flex-wrap",l.example),children:[e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"})]})}),e.jsx(d,{code:`
<div className='d-flex flex-wrap-reverse'>
	...
</div>`,children:e.jsxs("div",{className:i("d-flex","flex-wrap-reverse",l.example),children:[e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"}),e.jsx("div",{children:"Flex item"})]})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"flex-wrap"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".flex-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-wrap-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-sm-wrap-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-md-wrap-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-lg-wrap-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xl-wrap-reverse"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-nowrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-wrap"})}),e.jsx("li",{children:e.jsx("code",{children:".flex-xxl-wrap-reverse"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"order",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Order"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Change the ",e.jsx("em",{children:"visual"})," order of specific flex items with a handful of ",e.jsx("code",{children:"order"})," utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As ",e.jsx("code",{children:"order"})," takes any integer value from 0 to 5, add custom CSS for any additional values needed."]}),e.jsx(d,{code:`
<div className='d-flex flex-nowrap'>
	<div className='order-3'>First flex item</div>
	<div className='order-2'>Second flex item</div>
	<div className='order-1'>Third flex item</div>
</div>`,children:e.jsxs("div",{className:i("d-flex","flex-nowrap",l.example),children:[e.jsx("div",{className:"order-3",children:"First flex item"}),e.jsx("div",{className:"order-2",children:"Second flex item"}),e.jsx("div",{className:"order-1",children:"Third flex item"})]})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"order"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".order-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-5"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-5"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-5"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-5"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-5"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-0"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-1"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-2"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-3"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-4"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-5"})})]}),e.jsxs("p",{children:["Additionally there are also responsive ",e.jsx("code",{children:".order-first"})," ","and ",e.jsx("code",{children:".order-last"})," classes that change the"," ",e.jsx("code",{children:"order"})," of an element by applying"," ",e.jsx("code",{children:"order: -1"})," and ",e.jsx("code",{children:"order: 6"}),", respectively."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".order-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-last"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-sm-last"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-md-last"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-lg-last"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xl-last"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-first"})}),e.jsx("li",{children:e.jsx("code",{children:".order-xxl-last"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"align-content",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Align content"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:"align-content"})," utilities on flexbox containers to align flex items ",e.jsx("em",{children:"together"})," on the cross axis. Choose from ",e.jsx("code",{children:"start"})," (browser default), ",e.jsx("code",{children:"end"}),","," ",e.jsx("code",{children:"center"}),", ",e.jsx("code",{children:"between"}),", ",e.jsx("code",{children:"around"}),", or ",e.jsx("code",{children:"stretch"}),". To demonstrate these utilities, we’ve enforced ",e.jsx("code",{children:"flex-wrap: wrap"})," and increased the number of flex items."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Heads up!"})," This property has no effect on single rows of flex items."]}),e.jsx(d,{code:`
<div className='d-flex align-content-start flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-start","flex-wrap",l.example),style:{height:200},children:o})}),e.jsx(d,{code:`
<div className='d-flex align-content-end flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-end","flex-wrap",l.example),style:{height:200},children:o})}),e.jsx(d,{code:`
<div className='d-flex align-content-center flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-center","flex-wrap",l.example),style:{height:200},children:o})}),e.jsx(d,{code:`
<div className='d-flex align-content-between flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-between","flex-wrap",l.example),style:{height:200},children:o})}),e.jsx(d,{code:`
<div className='d-flex align-content-around flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-around","flex-wrap",l.example),style:{height:200},children:o})}),e.jsx(d,{code:`
<div className='d-flex align-content-stretch flex-wrap'>
	...
</div>`,children:e.jsx("div",{className:i("d-flex","align-content-stretch","flex-wrap",l.example),style:{height:200},children:o})}),e.jsxs("p",{children:["Responsive variations also exist for ",e.jsx("code",{children:"align-content"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:".align-content-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-sm-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-sm-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-sm-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-sm-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-sm-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-md-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-md-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-md-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-md-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-md-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-lg-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-lg-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-lg-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-lg-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-lg-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xl-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xl-stretch"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xxl-start"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xxl-end"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xxl-center"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xxl-around"})}),e.jsx("li",{children:e.jsx("code",{children:".align-content-xxl-stretch"})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{id:"sass",className:"scroll-margin",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{tag:"h3",children:"Sass"})})}),e.jsx(t,{children:e.jsxs(n,{id:"utilities-api",className:"scroll-margin rounded-2",children:[e.jsx(c,{children:e.jsx(r,{children:e.jsx(x,{children:"Utilities API"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Flexbox utilities are declared in our utilities API in"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",e.jsx(p,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),e.jsx(d,{code:`
"flex": (
  	responsive: true,
  	property: flex,
  	values: (fill: 1 1 auto)
),
"flex-direction": (
  	responsive: true,
  	property: flex-direction,
  	class: flex,
  	values: row column row-reverse column-reverse
),
"flex-grow": (
  	responsive: true,
  	property: flex-grow,
  	class: flex,
 	values: (
		grow-0: 0,
		grow-1: 1,
  	)
),
"flex-shrink": (
  	responsive: true,
  	property: flex-shrink,
  	class: flex,
  	values: (
		shrink-0: 0,
		shrink-1: 1,
  )
),
"flex-wrap": (
  	responsive: true,
  	property: flex-wrap,
  	class: flex,
  	values: wrap nowrap wrap-reverse
),
"gap": (
  	responsive: true,
  	property: gap,
  	class: gap,
  	values: $spacers
),
"justify-content": (
  	responsive: true,
  	property: justify-content,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		between: space-between,
		around: space-around,
		evenly: space-evenly,
  	)
),
"align-items": (
  	responsive: true,
  	property: align-items,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		baseline: baseline,
		stretch: stretch,
  	)
),
"align-content": (
  	responsive: true,
  	property: align-content,
  	values: (
		start: flex-start,
		end: flex-end,
		center: center,
		between: space-between,
		around: space-around,
		stretch: stretch,
  	)
),
"align-self": (
  	responsive: true,
  	property: align-self,
  	values: (
		auto: auto,
		start: flex-start,
		end: flex-end,
		center: center,
		baseline: baseline,
		stretch: stretch,
  	)
),
"order": (
  	responsive: true,
  	property: order,
  	values: (
		first: -1,
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		last: 6,
  	),
),`,language:"scss"})]})]})})]})})]})})]})};export{J as default};
