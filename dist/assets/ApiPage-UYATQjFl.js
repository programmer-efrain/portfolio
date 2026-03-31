import{j as e,P as r,bp as o,S as d,Q as n,a as h,C as s,e as t,h as a,i as c,k as l,br as i}from"./index-CH8wS3hI.js";import{B as p}from"./Breadcrumb-BaAopMTO.js";const L=()=>e.jsxs(r,{title:o.utilities.subMenu.api.text,children:[e.jsx(d,{children:e.jsx(n,{children:e.jsx(p,{list:[{title:"Utilities",to:"/utilities"},{title:"API",to:"/utilities/api"}]})})}),e.jsx(h,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Utility API"}),e.jsx("p",{className:"lead",children:"The utility API is a Sass-based tool to generate utility classes."})]}),e.jsx("div",{className:"col-12",children:e.jsx(s,{children:e.jsxs(t,{children:[e.jsxs("p",{children:["Bootstrap utilities are generated with our utility API and can be used to modify or extend our default set of utility classes via Sass. Our utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you’re unfamiliar with Sass maps, read up on the"," ",e.jsx("a",{href:"https://sass-lang.com/documentation/values/maps",target:"_blank",rel:"noreferrer",children:"official Sass docs"})," ","to get started."]}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"$utilities"})," map contains all our utilities and is later merged with your custom ",e.jsx("code",{children:"$utilities"})," map, if present. The utility map contains a keyed list of utility groups which accept the following options:"]}),e.jsx(s,{shadow:"none",borderSize:1,stretch:!0,children:e.jsx(t,{children:e.jsxs("table",{className:"table text-start mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Option"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"property"})}),e.jsx("td",{children:e.jsx("strong",{children:"Required"})}),e.jsx("td",{children:"Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"values"})}),e.jsx("td",{children:e.jsx("strong",{children:"Required"})}),e.jsxs("td",{children:["List of values, or a map if you don’t want the class name to be the same as the value. If ",e.jsx("code",{children:"null"})," is used as map key, it isn’t compiled."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"class"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["Variable for the class name if you don’t want it to be the same as the property. In case you don’t provide the"," ",e.jsx("code",{children:"class"})," key and"," ",e.jsx("code",{children:"property"})," key is an array of strings, the class name will be the first element of the ",e.jsx("code",{children:"property"})," array."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"state"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["List of pseudo-class variants like"," ",e.jsx("code",{children:":hover"})," or ",e.jsx("code",{children:":focus"})," ","to generate for the utility. No default value."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"responsive"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["Boolean indicating if responsive classes need to be generated. ",e.jsx("code",{children:"false"})," by default."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rfs"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["Boolean to enable fluid rescaling. Have a look at the"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/getting-started/rfs/",target:"_blank",rel:"noreferrer",children:"RFS"})," ","page to find out how this works."," ",e.jsx("code",{children:"false"})," by default."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"print"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["Boolean indicating if print classes need to be generated. ",e.jsx("code",{children:"false"})," by default."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rtl"})}),e.jsx("td",{children:"Optional"}),e.jsxs("td",{children:["Boolean indicating if utility should be kept in RTL. ",e.jsx("code",{children:"true"})," by default."]})]})]})]})})})]})})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"api-explained",className:"scroll-margin",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{tag:"h3",children:"API explained"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["All utility variables are added to the ",e.jsx("code",{children:"$utilities"})," ","variable within our ",e.jsx("code",{children:"_utilities.scss"})," stylesheet. Each group of utilities looks something like this:"]}),e.jsx(i,{code:`
$utilities: (
	"opacity": (
		property: opacity,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
  	)
 );`,language:"scss"}),e.jsx("p",{children:"Which outputs the following:"}),e.jsx(i,{code:`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }`,language:"scss",className:"mb-4"}),e.jsxs(s,{id:"custom-class-prefix",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Custom class prefix"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use the ",e.jsx("code",{children:"class"})," option to change the class prefix used in the compiled CSS:"]}),e.jsx(i,{code:`
$utilities: (
	"opacity": (
		property: opacity,
		class: o,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`,language:"scss",className:"mb-4"}),e.jsx("p",{children:"Output:"}),e.jsx(i,{code:`
.o-0 { opacity: 0; }
.o-25 { opacity: .25; }
.o-50 { opacity: .5; }
.o-75 { opacity: .75; }
.o-100 { opacity: 1; }`,language:"scss",className:"mb-0"})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"states",className:"scroll-margin",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{tag:"h3",children:"States"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Use the ",e.jsx("code",{children:"state"})," option to generate pseudo-class variations. Example pseudo-classes are ",e.jsx("code",{children:":hover"})," and"," ",e.jsx("code",{children:":focus"}),". When a list of states are provided, classnames are created for that pseudo-class. For example, to change opacity on hover, add ",e.jsx("code",{children:"state: hover"})," and you’ll get ",e.jsx("code",{children:".opacity-hover:hover"})," in your compiled CSS."]}),e.jsxs("p",{children:["Need multiple pseudo-classes? Use a space-separated list of states: ",e.jsx("code",{children:"state: hover focus"}),"."]}),e.jsx(i,{code:`
$utilities: (
	"opacity": (
		property: opacity,
		class: opacity,
		state: hover,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
);`,language:"scss",className:"mb-4"}),e.jsx("p",{children:"Output:"}),e.jsx(i,{code:`
.opacity-0-hover:hover { opacity: 0; }
.opacity-25-hover:hover { opacity: .25; }
.opacity-50-hover:hover { opacity: .5; }
.opacity-75-hover:hover { opacity: .75; }
.opacity-100-hover:hover { opacity: 1; }`,language:"scss",className:"mb-4"}),e.jsxs(s,{id:"responsive-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Responsive utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Add the ",e.jsx("code",{children:"responsive"})," boolean to generate responsive utilities (e.g., ",e.jsx("code",{children:".opacity-md-25"}),") across"," ",e.jsx("a",{href:"https://getbootstrap.com/docs/5.0/layout/breakpoints/",target:"_blank",rel:"noreferrer",children:"all breakpoints"}),"."]}),e.jsx(i,{code:`
$utilities: (
	"opacity": (
		property: opacity,
		responsive: true,
		values: (
			0: 0,
			25: .25,
			50: .5,
			75: .75,
			100: 1,
		)
	)
 );`,language:"scss",className:"mb-4"}),e.jsx("p",{children:"Output:"}),e.jsx(i,{code:`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media (min-width: 576px) {
	.opacity-sm-0 { opacity: 0; }
	.opacity-sm-25 { opacity: .25; }
	.opacity-sm-50 { opacity: .5; }
	.opacity-sm-75 { opacity: .75; }
	.opacity-sm-100 { opacity: 1; }
}

@media (min-width: 768px) {
	.opacity-md-0 { opacity: 0; }
	.opacity-md-25 { opacity: .25; }
	.opacity-md-50 { opacity: .5; }
	.opacity-md-75 { opacity: .75; }
	.opacity-md-100 { opacity: 1; }
}

@media (min-width: 992px) {
	.opacity-lg-0 { opacity: 0; }
	.opacity-lg-25 { opacity: .25; }
	.opacity-lg-50 { opacity: .5; }
	.opacity-lg-75 { opacity: .75; }
	.opacity-lg-100 { opacity: 1; }
}

@media (min-width: 1200px) {
	.opacity-xl-0 { opacity: 0; }
	.opacity-xl-25 { opacity: .25; }
	.opacity-xl-50 { opacity: .5; }
	.opacity-xl-75 { opacity: .75; }
	.opacity-xl-100 { opacity: 1; }
}

@media (min-width: 1400px) {
	.opacity-xxl-0 { opacity: 0; }
	.opacity-xxl-25 { opacity: .25; }
	.opacity-xxl-50 { opacity: .5; }
	.opacity-xxl-75 { opacity: .75; }
	.opacity-xxl-100 { opacity: 1; }
}`,language:"scss",className:"mb-0"})]})]}),e.jsxs(s,{id:"changing-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Changing utilities"})})}),e.jsxs(t,{children:[e.jsx("p",{children:"Override existing utilities by using the same key. For example, if you want additional responsive overflow utility classes, you can do this:"}),e.jsx(i,{code:`
$utilities: (
	"overflow": (
		responsive: true,
		property: overflow,
		values: visible hidden scroll auto,
	),
);`,language:"scss",className:"mb-0"})]})]}),e.jsxs(s,{id:"print-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Print utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Enabling the ",e.jsx("code",{children:"print"})," option will"," ",e.jsx("strong",{children:"also"})," generate utility classes for print, which are only applied within the"," ",e.jsx("code",{children:"@media print { ... }"})," media query."]}),e.jsx(i,{code:`
$utilities: (
	"opacity": (
    	property: opacity,
    	print: true,
    	values: (
      		0: 0,
      		25: .25,
      		50: .5,
      		75: .75,
      		100: 1,
    	)
  	)
 );`,language:"scss",className:"mb-4"}),e.jsx("p",{children:"Output:"}),e.jsx(i,{code:`
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media print {
  	.opacity-print-0 { opacity: 0; }
  	.opacity-print-25 { opacity: .25; }
  	.opacity-print-50 { opacity: .5; }
  	.opacity-print-75 { opacity: .75; }
  	.opacity-print-100 { opacity: 1; }
}`,language:"scss",className:"mb-0"})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(s,{id:"using-the-api",className:"scroll-margin",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{tag:"h3",children:"Using the API"})})}),e.jsxs(t,{children:[e.jsx("p",{children:"Now that you’re familiar with how the utilities API works, learn how to add your own custom classes and modify our default utilities."}),e.jsxs(s,{id:"add-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Add utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["New utilities can be added to the default"," ",e.jsx("code",{children:"$utilities"})," map with a"," ",e.jsx("code",{children:"map-merge"}),". Use the"," ",e.jsx("code",{children:"src/styles/utilities/_index.scss"})," file to write new, then use the ",e.jsx("code",{children:"map-merge"})," to add your additional utilities. For example, here’s how to add a responsive ",e.jsx("code",{children:"cursor"})," utility with three values."]}),e.jsx(i,{code:`
$utilities: map-merge(
  	$utilities,
  	(
    	"cursor": (
      		property: cursor,
      		class: cursor,
      		responsive: true,
      		values: auto pointer grab,
    	)
  	)
);`,language:"scss",className:"mb-0"})]})]}),e.jsxs(s,{id:"modify-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Modify utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Modify existing utilities in the default"," ",e.jsx("code",{children:"$utilities"})," map with ",e.jsx("code",{children:"map-get"})," ","and ",e.jsx("code",{children:"map-merge"})," functions. In the example below, we’re adding an additional value to the"," ",e.jsx("code",{children:"width"})," utilities. Start with an initial"," ",e.jsx("code",{children:"map-merge"})," and then specify which utility you want to modify. From there, fetch the nested"," ",e.jsx("code",{children:'"width"'})," map with ",e.jsx("code",{children:"map-get"})," to access and modify the utility’s options and values."]}),e.jsx(i,{code:`
$utilities: map-merge(
	$utilities,
		(
			"width": map-merge(
				map-get($utilities, "width"),
			(
				values: map-merge(
					map-get(map-get($utilities, "width"), "values"),
					(10: 10%),
				),
			),
		),
	)
);`,language:"scss",className:"mb-4"}),e.jsxs(s,{id:"rename-utilities",className:"scroll-margin rounded-1",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{tag:"h6",children:"Rename utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Missing v4 utilities, or used to another naming convention? The utilities API can be used to override the resulting ",e.jsx("code",{children:"class"})," of a given utility—for example, to rename"," ",e.jsx("code",{children:".ms-*"})," utilities to oldish"," ",e.jsx("code",{children:".ml-*"}),":"]}),e.jsx(i,{code:`
$utilities: map-merge(
	$utilities, (
		"margin-start": map-merge(
			map-get($utilities, "margin-start"),
			( class: ml ),
		),
	)
);`,language:"scss",className:"mb-0"})]})]})]})]}),e.jsxs(s,{id:"remove-utilities",className:"scroll-margin rounded-2",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{children:"Remove utilities"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Remove any of the default utilities by setting the group key to ",e.jsx("code",{children:"null"}),". For example, to remove all our"," ",e.jsx("code",{children:"width"})," utilities, create a"," ",e.jsx("code",{children:"$utilities"})," ",e.jsx("code",{children:"map-merge"})," and add"," ",e.jsx("code",{children:'"width": null'})," within."]}),e.jsx(i,{code:`
$utilities: map-merge(
	$utilities,
	(
		"width": null
	)
);`,language:"scss",className:"mb-4"}),e.jsxs(s,{id:"remove-utility-in-rtl",className:"scroll-margin rounded-1",children:[e.jsx(a,{children:e.jsx(c,{children:e.jsx(l,{tag:"h6",children:"Remove utility in RTL"})})}),e.jsxs(t,{children:[e.jsxs("p",{children:["Some edge cases make"," ",e.jsx("a",{href:"https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl",target:"_blank",rel:"noreferrer",children:"RTL styling difficult"}),", such as line breaks in Arabic. Thus utilities can be dropped from RTL output by setting the"," ",e.jsx("code",{children:"rtl"})," option to ",e.jsx("code",{children:"false"}),":"]}),e.jsx(i,{code:`
$utilities: (
	"word-wrap": (
		property: word-wrap word-break,
		class: text,
		values: (break: break-word),
		rtl: false
	),
);`,language:"scss",className:"mb-4"}),e.jsx("p",{children:"Output:"}),e.jsx(i,{code:`
/* rtl:begin:remove */
.text-break {
	word-wrap: break-word !important;
  	word-break: break-word !important;
}
/* rtl:end:remove */`,language:"scss",className:"mb-4"}),e.jsxs("p",{children:["This doesn’t output anything in RTL, thanks to"," ",e.jsxs("a",{href:"https://rtlcss.com/learn/usage-guide/control-directives/#remove",target:"_blank",rel:"noreferrer",children:["the RTLCSS ",e.jsx("code",{children:"remove"})," control directive"]}),"."]})]})]})]})]})]})]})})]})})]});export{L as default};
