import{j as e,P as o,bp as c,S as d,Q as h,a as m,C as t,h as i,i as a,k as l,e as r,bs as x}from"./index-CH8wS3hI.js";import{B as p}from"./Breadcrumb-BaAopMTO.js";import{C as s}from"./CommonCodePreview-DEnCNn9V.js";import{C as n}from"./CommonDesc-C08fE1OW.js";const L=()=>e.jsxs(o,{title:c.utilities.subMenu.text.text,children:[e.jsx(d,{children:e.jsx(h,{children:e.jsx(p,{list:[{title:"Utilities",to:"/utilities"},{title:"Text",to:"/utilities/text"}]})})}),e.jsx(m,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Text"}),e.jsx("p",{className:"lead",children:"Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."})]}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"text-alignment",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Text alignment"})})}),e.jsxs(r,{children:[e.jsx("p",{children:"Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."}),e.jsxs(s,{code:`
<p className='text-start'>Start aligned text on all viewport sizes.</p>
<p className='text-center'>Center aligned text on all viewport sizes.</p>
<p className='text-end'>End aligned text on all viewport sizes.</p>

<p className='text-sm-start'>Start aligned text on viewports sized SM (small) or wider.</p>
<p className='text-md-start'>Start aligned text on viewports sized MD (medium) or wider.</p>
<p className='text-lg-start'>Start aligned text on viewports sized LG (large) or wider.</p>
<p className='text-xl-start'>Start aligned text on viewports sized XL (extra-large) or wider.</p>`,children:[e.jsx("p",{className:"text-start",children:"Start aligned text on all viewport sizes."}),e.jsx("p",{className:"text-center",children:"Center aligned text on all viewport sizes."}),e.jsx("p",{className:"text-end",children:"End aligned text on all viewport sizes."}),e.jsx("p",{className:"text-sm-start",children:"Start aligned text on viewports sized SM (small) or wider."}),e.jsx("p",{className:"text-md-start",children:"Start aligned text on viewports sized MD (medium) or wider."}),e.jsx("p",{className:"text-lg-start",children:"Start aligned text on viewports sized LG (large) or wider."}),e.jsx("p",{className:"text-xl-start",children:"Start aligned text on viewports sized XL (extra-large) or wider."})]}),e.jsx(n,{color:"info",children:"Note that we don’t provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read."})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"text-wrapping-and-overflow",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Text wrapping and overflow"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Wrap text with a ",e.jsx("code",{children:".text-wrap"})," class."]}),e.jsx(s,{code:`
<div className='badge bg-primary text-wrap' style={{ width: '6rem' }}>
	This text should wrap.
</div>`,children:e.jsx("div",{className:"badge bg-primary text-wrap",style:{width:"6rem"},children:"This text should wrap."})}),e.jsxs("p",{children:["Prevent text from wrapping with a ",e.jsx("code",{children:".text-nowrap"})," ","class."]}),e.jsx(s,{code:`
<div className='text-nowrap bg-light' style={{ width: '8rem' }}>
	This text should overflow the parent.
</div>`,children:e.jsx("div",{className:"text-nowrap bg-light",style:{width:"8rem"},children:"This text should overflow the parent."})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"word-break",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Word break"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Prevent long strings of text from breaking your components' layout by using ",e.jsx("code",{children:".text-break"})," to set"," ",e.jsx("code",{children:"word-wrap: break-word"})," and"," ",e.jsx("code",{children:"word-break: break-word"}),". We use"," ",e.jsx("code",{children:"word-wrap"})," instead of the more common"," ",e.jsx("code",{children:"overflow-wrap"})," for wider browser support, and add the deprecated ",e.jsx("code",{children:"word-break: break-word"})," to avoid issues with flex containers."]}),e.jsx(s,{children:e.jsx("p",{className:"text-break",children:"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"})}),e.jsxs(n,{children:["Note that"," ",e.jsx("a",{href:"https://rtlstyling.com/posts/rtl-styling#3.-line-break",target:"_blank",rel:"noreferrer",children:"breaking words isn’t possible in Arabic"}),", which is the most used RTL language. Therefore"," ",e.jsx("code",{children:".text-break"})," is removed from our RTL compiled CSS."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"text-transform",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Text transform"})})}),e.jsxs(r,{children:[e.jsx("p",{children:"Transform text in components with text capitalization classes."}),e.jsxs(s,{code:`
<p className='text-lowercase'>Lowercased text.</p>
<p className='text-uppercase'>Uppercased text.</p>
<p className='text-capitalize'>CapiTaliZed text.</p>`,children:[e.jsx("p",{className:"text-lowercase",children:"Lowercased text."}),e.jsx("p",{className:"text-uppercase",children:"Uppercased text."}),e.jsx("p",{className:"text-capitalize",children:"CapiTaliZed text."})]}),e.jsxs("p",{children:["Note how ",e.jsx("code",{children:".text-capitalize"})," only changes the first letter of each word, leaving the case of any other letters unaffected."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"font-size",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Font size"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Quickly change the ",e.jsx("code",{children:"font-size"})," of text. While our heading classes (e.g., ",e.jsx("code",{children:".h1"}),"–",e.jsx("code",{children:".h6"}),") apply"," ",e.jsx("code",{children:"font-size"}),", ",e.jsx("code",{children:"font-weight"}),", and"," ",e.jsx("code",{children:"line-height"}),", these utilities ",e.jsx("em",{children:"only"})," apply"," ",e.jsx("code",{children:"font-size"}),". Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases."]}),e.jsxs(s,{code:`
<p className='fs-1'>.fs-1 text</p>
<p className='fs-2'>.fs-2 text</p>
<p className='fs-3'>.fs-3 text</p>
<p className='fs-4'>.fs-4 text</p>
<p className='fs-5'>.fs-5 text</p>
<p className='fs-6'>.fs-6 text</p>`,children:[e.jsx("p",{className:"fs-1",children:".fs-1 text"}),e.jsx("p",{className:"fs-2",children:".fs-2 text"}),e.jsx("p",{className:"fs-3",children:".fs-3 text"}),e.jsx("p",{className:"fs-4",children:".fs-4 text"}),e.jsx("p",{className:"fs-5",children:".fs-5 text"}),e.jsx("p",{className:"fs-6",children:".fs-6 text"})]}),e.jsxs("p",{children:["Customize your available ",e.jsx("code",{children:"font-size"}),"s by modifying the ",e.jsx("code",{children:"$font-sizes"})," Sass map."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"font-weight-and-italics",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Font weight and italics"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Quickly change the ",e.jsx("code",{children:"font-weight"})," or"," ",e.jsx("code",{children:"font-style"})," of text with these utilities."," ",e.jsx("code",{children:"font-style"})," utilities are abbreviated as"," ",e.jsx("code",{children:".fst-*"})," and ",e.jsx("code",{children:"font-weight"})," utilities are abbreviated as ",e.jsx("code",{children:".fw-*"}),"."]}),e.jsxs(s,{code:`
<p className='fw-bold'>Bold text.</p>
<p className='fw-bolder'>Bolder weight text (relative to the parent element).</p>
<p className='fw-normal'>Normal weight text.</p>
<p className='fw-light'>Light weight text.</p>
<p className='fw-lighter'>Lighter weight text (relative to the parent element).</p>
<p className='fst-italic'>Italic text.</p>
<p className='fst-normal'>Text with normal font style</p>`,children:[e.jsx("p",{className:"fw-bold",children:"Bold text."}),e.jsx("p",{className:"fw-bolder",children:"Bolder weight text (relative to the parent element)."}),e.jsx("p",{className:"fw-normal",children:"Normal weight text."}),e.jsx("p",{className:"fw-light",children:"Light weight text."}),e.jsx("p",{className:"fw-lighter",children:"Lighter weight text (relative to the parent element)."}),e.jsx("p",{className:"fst-italic",children:"Italic text."}),e.jsx("p",{className:"fst-normal",children:"Text with normal font style"})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"line-height",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Line height"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Change the line height with ",e.jsx("code",{children:".lh-*"})," utilities."]}),e.jsxs(s,{code:`
<p className='lh-1'>...</p>
<p className='lh-sm'>...</p>
<p className='lh-base'>...</p>
<p className='lh-lg'>...</p>`,children:[e.jsx("p",{className:"lh-1",children:"Some placeholder content to show off the line height utilities. Happy birthday. You could've been the greatest. She ride me like a roller coaster. I messed around and got addicted. You just gotta ignite the light and let it shine! I'm intrigued, for a peek, heard it's fascinating. Catch her if you can. I should've told you what you meant to me 'Cause now I pay the price. Do you ever feel, feel so paper thin."}),e.jsx("p",{className:"lh-sm",children:"But you better choose carefully. Yo, shout out to all you kids, buying bottle service, with your rent money. She's sweet as pie but if you break her heart. Just own the night like the 4th of July! In another life I would be your girl. Playing ping pong all night long, everything's all neon and hazy. Shorty so bad, I’m sprung and I don’t care."}),e.jsx("p",{className:"lh-base",children:"I can feel a phoenix inside of me. Maybe a reason why all the doors are closed. We go higher and higher. Passport stamps, she's cosmopolitan. Someone said you had your tattoo removed. All my girls vintage Chanel baby. Someone said you had your tattoo removed."}),e.jsx("p",{className:"lh-lg",children:"But I will get there. This is real so take a chance and don't ever look back, don't ever look back. You could travel the world but nothing comes close to the golden coast. Of anything and everything. Venice beach and Palm Springs, summertime is everything. Do you ever feel already buried deep six feet under? It's time to bring out the big balloons. So cover your eyes, I have a surprise. So I don't have to say you were the one that got away."})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"monospace",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Monospace"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Change a selection to our monospace font stack with"," ",e.jsx("code",{children:".font-monospace"}),"."]}),e.jsx(s,{code:"<p className='font-monospace'>This is in monospace</p>",children:e.jsx("p",{className:"font-monospace",children:"This is in monospace"})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"reset-color",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Reset color"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Reset a text or link’s color with ",e.jsx("code",{children:".text-reset"}),", so that it inherits the color from its parent."]}),e.jsx(s,{code:`
<p className='text-muted'>
	Muted text with a<a href='#' className='text-reset'>reset link</a>.
</p>`,children:e.jsxs("p",{className:"text-muted",children:["Muted text with a",e.jsx("a",{href:"#",className:"text-reset",children:"reset link"}),"."]})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"text-decoration",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Text decoration"})})}),e.jsxs(r,{children:[e.jsx("p",{children:"Decorate text in components with text decoration classes."}),e.jsxs(s,{code:`
<p className='text-decoration-underline'>This text has a line underneath it.</p>
<p className='text-decoration-line-through'>This text has a line going through it.</p>
<a href='#' className='text-decoration-none'>This link has its text decoration removed</a>`,children:[e.jsx("p",{className:"text-decoration-underline",children:"This text has a line underneath it."}),e.jsx("p",{className:"text-decoration-line-through",children:"This text has a line going through it."}),e.jsx("a",{href:"#",className:"text-decoration-none",children:"This link has its text decoration removed"})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(t,{id:"sass",className:"scroll-margin",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{tag:"h3",children:"Sass"})})}),e.jsxs(r,{children:[e.jsxs(t,{id:"variables",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Variables"})})}),e.jsxs(r,{children:[e.jsx("p",{children:"Spacing utilities are declared via Sass map and then generated with our utilities API."}),e.jsx(s,{code:`
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
// stylelint-enable value-keyword-case
$font-family-base:            var(--#{$prefix}font-sans-serif);
$font-family-code:            var(--#{$prefix}font-monospace);

// $font-size-root effects the value of \`rem\`, which is used for as well font sizes, paddings and margins
// $font-size-base effects the font size of the body text
$font-size-root:              null;
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * .875;
$font-size-lg:                $font-size-base * 1.25;

$font-weight-lighter:         lighter;
$font-weight-light:           300;
$font-weight-normal:          400;
$font-weight-bold:            700;
$font-weight-bolder:          bolder;

$font-weight-base:            $font-weight-normal;

$line-height-base:            1.5;
$line-height-sm:              1.25;
$line-height-lg:              2;

$h1-font-size:                $font-size-base * 2.5;
$h2-font-size:                $font-size-base * 2;
$h3-font-size:                $font-size-base * 1.75;
$h4-font-size:                $font-size-base * 1.5;
$h5-font-size:                $font-size-base * 1.25;
$h6-font-size:                $font-size-base;`,language:"scss",className:"mb-4"}),e.jsxs("p",{children:["You can overwrite the"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_variables.scss"})," ","file in the ",e.jsx("code",{children:"src/styles/settings/_index.scss"})," ","file."]}),e.jsx(s,{code:`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// $font-family-base: 'Montserrat', sans-serif;
$font-family-base: 'Poppins', var(--bs-font-sans-serif);

$font-size-root:              0.8125rem; // \`13px\`
$font-size-base:              1rem; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * 0.875;
$font-size-lg:                $font-size-base * 1.25;`,language:"scss"})]})]}),e.jsxs(t,{id:"map",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Map"})})}),e.jsxs(r,{children:[e.jsx("p",{children:"Font-size utilities are generated from this map, in combination with our utilities API."}),e.jsx(s,{code:`
$font-sizes: (
	1: $h1-font-size,
	2: $h2-font-size,
	3: $h3-font-size,
	4: $h4-font-size,
	5: $h5-font-size,
	6: $h6-font-size
);`,language:"scss"})]})]}),e.jsxs(t,{id:"utilities-api",className:"scroll-margin rounded-2",children:[e.jsx(i,{children:e.jsx(a,{children:e.jsx(l,{children:"Utilities API"})})}),e.jsxs(r,{children:[e.jsxs("p",{children:["Font and text utilities are declared in our utilities API in"," ",e.jsx("code",{children:"node_modules/bootstrap/scss/_utilities.scss"}),"."," ",e.jsx(x,{to:"../utilities/api#using-the-api",children:"Learn how to use the utilities API."})]}),e.jsx(s,{code:`
"font-family": (
	property: font-family,
	class: font,
	values: (monospace: var(--#{$prefix}font-monospace))
),
"font-size": (
	rfs: true,
	property: font-size,
	class: fs,
	values: $font-sizes
),
"font-style": (
	property: font-style,
	class: fst,
	values: italic normal
),
"font-weight": (
	property: font-weight,
	class: fw,
	values: (
		light: $font-weight-light,
		lighter: $font-weight-lighter,
		normal: $font-weight-normal,
		bold: $font-weight-bold,
		bolder: $font-weight-bolder
	)
),
"line-height": (
	property: line-height,
	class: lh,
	values: (
		1: 1,
		sm: $line-height-sm,
		base: $line-height-base,
		lg: $line-height-lg,
	)
),
"text-align": (
	responsive: true,
	property: text-align,
	class: text,
	values: (
		start: left,
		end: right,
		center: center,
	)
),
"text-decoration": (
	property: text-decoration,
	values: none underline line-through
),
"text-transform": (
	property: text-transform,
	class: text,
	values: lowercase uppercase capitalize
),
"white-space": (
	property: white-space,
	class: text,
	values: (
		wrap: normal,
		nowrap: nowrap,
	s
),
"word-wrap": (
	property: word-wrap word-break,
	class: text,
	values: (break: break-word),
	rtl: false
),`,language:"scss"})]})]})]})]})})]})})]});export{L as default};
