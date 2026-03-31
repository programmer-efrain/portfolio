import{j as e,P as N,bp as v,S as w,Q as u,a as y,C as l,h as t,i as a,k as r,e as c,b as n,br as g,bs as f,N as $,c as o}from"./index-CH8wS3hI.js";import{B as C}from"./Breadcrumb-BaAopMTO.js";import{C as s}from"./CommonCodePreview-DEnCNn9V.js";import{C as h}from"./CommonDesc-C08fE1OW.js";const d=({className:b,headClassName:x,isActive:i,isFooter:j,isCaption:m,isResponsive:p})=>p?e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"1"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"2"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"3"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]})]})]})}):e.jsxs("table",{className:o("table",b),children:[m&&e.jsx("caption",{children:"List of users"}),e.jsx("thead",{className:x,children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:"First"}),e.jsx("th",{scope:"col",children:"Last"}),e.jsx("th",{scope:"col",children:"Handle"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:o({"table-active":i}),children:[e.jsx("th",{scope:"row",children:"1"}),e.jsx("td",{children:"Mark"}),e.jsx("td",{children:"Otto"}),e.jsx("td",{children:"@mdo"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"2"}),e.jsx("td",{children:"Jacob"}),e.jsx("td",{children:"Thornton"}),e.jsx("td",{children:"@fat"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"3"}),e.jsx("td",{colSpan:2,className:o({"table-active":i}),children:"Larry the Bird"}),e.jsx("td",{children:"@twitter"})]})]}),j&&e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"Footer"}),e.jsx("td",{children:"Footer"}),e.jsx("td",{children:"Footer"}),e.jsx("td",{children:"Footer"})]})})]}),Y=()=>e.jsxs(N,{title:v.content.subMenu.tables.text,children:[e.jsx(w,{children:e.jsx(u,{children:e.jsx(C,{list:[{title:"Content",to:"/content"},{title:"Tables",to:"/content/tables"}]})})}),e.jsx(y,{children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 my-4",children:[e.jsx("h1",{children:"Tables"}),e.jsx("p",{className:"lead",children:"Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap."})]}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"overview",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"Visibility",children:e.jsx(r,{tag:"h3",children:"Overview"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Due to the widespread use of ",e.jsx("code",{children:"<table>"})," elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are opt-in. Add the base class"," ",e.jsx("code",{children:".table"})," to any ",e.jsx("code",{children:"<table>"}),", then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent."]}),e.jsxs("p",{children:["Using the most basic table markup, here’s how"," ",e.jsx("code",{children:".table-"}),"based tables look in Bootstrap."]}),e.jsx(s,{code:`
<table className='table'>
	<thead>
		<tr>
			<th scope='col'>#</th>
			<th scope='col'>First</th>
			<th scope='col'>Last</th>
			<th scope='col'>Handle</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope='row'>1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
		<tr>
			<th scope='row'>2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		</tr>
		<tr>
			<th scope='row'>3</th>
			<td colSpan='2'>Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`,children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:"First"}),e.jsx("th",{scope:"col",children:"Last"}),e.jsx("th",{scope:"col",children:"Handle"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"1"}),e.jsx("td",{children:"Mark"}),e.jsx("td",{children:"Otto"}),e.jsx("td",{children:"@mdo"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"2"}),e.jsx("td",{children:"Jacob"}),e.jsx("td",{children:"Thornton"}),e.jsx("td",{children:"@fat"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"3"}),e.jsx("td",{colSpan:2,children:"Larry the Bird"}),e.jsx("td",{children:"@twitter"})]})]})]})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"modern",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"Visibility",children:e.jsx(r,{tag:"h3",children:"Modern"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Add the base class .table-modern to any ",e.jsx("code",{children:"<table>"}),"."]}),e.jsx(s,{code:`
<table className='table'>
	<thead>
		<tr>
			<th scope='col'>#</th>
			<th scope='col'>First</th>
			<th scope='col'>Last</th>
			<th scope='col'>Handle</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope='row'>1</th>
			<td>Mark</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
		<tr>
			<th scope='row'>2</th>
			<td>Jacob</td>
			<td>Thornton</td>
			<td>@fat</td>
		</tr>
		<tr>
			<th scope='row'>3</th>
			<td colSpan='2'>Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`,children:e.jsxs("table",{className:"table table-modern",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:"First"}),e.jsx("th",{scope:"col",children:"Last"}),e.jsx("th",{scope:"col",children:"Handle"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"1"}),e.jsx("td",{children:"Mark"}),e.jsx("td",{children:"Otto"}),e.jsx("td",{children:"@mdo"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"2"}),e.jsx("td",{children:"Jacob"}),e.jsx("td",{children:"Thornton"}),e.jsx("td",{children:"@fat"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"3"}),e.jsx("td",{colSpan:2,children:"Larry the Bird"}),e.jsx("td",{children:"@twitter"})]})]})]})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"variants",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"ContentCopy",children:e.jsx(r,{tag:"h3",children:"Variants"})})}),e.jsxs(c,{children:[e.jsx("p",{children:"Use contextual classes to color tables, table rows or individual cells."}),e.jsx(s,{code:`
// On tables
<table className='table table-primary'>...</table>
<table className='table table-secondary'>...</table>
<table className='table table-success'>...</table>
<table className='table table-danger'>...</table>
<table className='table table-warning'>...</table>
<table className='table table-info'>...</table>
<table className='table table-light'>...</table>
<table className='table table-dark'>...</table>

// On rows
<tr className='table-primary'>...</tr>
<tr className='table-secondary'>...</tr>
<tr className='table-success'>...</tr>
<tr className='table-danger'>...</tr>
<tr className='table-warning'>...</tr>
<tr className='table-info'>...</tr>
<tr className='table-light'>...</tr>
<tr className='table-dark'>...</tr>

// On cells (\`td\` or \`th\`)
<tr>
  <td className='table-primary'>...</td>
  <td className='table-secondary'>...</td>
  <td className='table-success'>...</td>
  <td className='table-danger'>...</td>
  <td className='table-warning'>...</td>
  <td className='table-info'>...</td>
  <td className='table-light'>...</td>
  <td className='table-dark'>...</td>
</tr>`,children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Class"}),e.jsx("th",{scope:"col",children:"Heading"}),e.jsx("th",{scope:"col",children:"Heading"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"Default"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-primary",children:[e.jsx("th",{scope:"row",children:"Primary"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-secondary",children:[e.jsx("th",{scope:"row",children:"Secondary"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-success",children:[e.jsx("th",{scope:"row",children:"Success"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-danger",children:[e.jsx("th",{scope:"row",children:"Danger"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-warning",children:[e.jsx("th",{scope:"row",children:"Warning"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-info",children:[e.jsx("th",{scope:"row",children:"Info"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-light",children:[e.jsx("th",{scope:"row",children:"Light"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]}),e.jsxs("tr",{className:"table-dark",children:[e.jsx("th",{scope:"row",children:"Dark"}),e.jsx("td",{children:"Cell"}),e.jsx("td",{children:"Cell"})]})]})]})}),e.jsxs(h,{color:"info",children:[e.jsx(n,{children:"Conveying meaning to assistive technologies"}),"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the ",e.jsx("code",{children:".visually-hidden"})," ","class."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"accented-tables",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"FormatAlignJustify",children:e.jsx(r,{tag:"h3",children:"Accented tables"})})}),e.jsxs(c,{children:[e.jsxs(l,{id:"striped-rows",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Striped rows"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Use ",e.jsx("code",{children:".table-striped"})," to add zebra-striping to any table row within the ",e.jsx("code",{children:"<tbody>"}),"."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-striped"})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-dark table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-dark table-striped"})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-success table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-success table-striped"})})})]})]})]}),e.jsxs(l,{id:"hoverable-rows",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Hoverable rows"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Add .table-hover to enable a hover state on table rows within a ",e.jsx("code",{children:"<tbody>"}),"."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-hover"})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-dark table-hover"})})}),e.jsx("div",{className:"col-lg-4",children:e.jsx(s,{code:`
<table className='table table-striped'>
  ...
</table>`,className:"mb-0",children:e.jsx(d,{className:"table-hover table-striped"})})})]})]})]}),e.jsxs(l,{id:"active-tables",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Active tables"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Highlight a table row or cell by adding a"," ",e.jsx("code",{children:".table-active"})," class."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className="table">
	<thead>
		...
	</thead>
	<tbody>
		<tr className="table-active">
			...
		</tr>
		<tr>
			...
		</tr>
		<tr>
			<th scope="row">3</th>
			<td colSpan="2" className="table-active">Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`,className:"mb-0",children:e.jsx(d,{isActive:!0})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className="table table-dark">
	<thead>
		...
	</thead>
	<tbody>
		<tr className="table-active">
			...
		</tr>
		<tr>
			...
		</tr>
		<tr>
			<th scope="row">3</th>
			<td colSpan="2" className="table-active">Larry the Bird</td>
			<td>@twitter</td>
		</tr>
	</tbody>
</table>`,className:"mb-0",children:e.jsx(d,{isActive:!0,className:"table-dark"})})})]})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"how-do-the-variants-and-accented-tables-work",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"Help",children:e.jsx(r,{tag:"h3",children:"How do the variants and accented tables work?"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["For the accented tables (",e.jsx("a",{href:"#striped-rows",children:"striped rows"}),","," ",e.jsx("a",{href:"#hoverable-rows",children:"hoverable rows"}),", and"," ",e.jsx("a",{href:"#active-tables",children:"active tables"}),"), we used some techniques to make these effects work for all our"," ",e.jsx("a",{href:"#variants",children:"table variants"}),":"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["We start by setting the background of a table cell with the"," ",e.jsx("code",{children:"--bs-table-bg"})," custom property. All table variants then set that custom property to colorize the table cells. This way, we don’t get into trouble if semi-transparent colors are used as table backgrounds."]}),e.jsxs("li",{children:["Then we add an inset box shadow on the table cells with"," ",e.jsx("code",{children:"box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);"})," ","to layer on top of any specified"," ",e.jsx("code",{children:"background-color"}),". Because we use a huge spread and no blur, the color will be monotone. Since"," ",e.jsx("code",{children:"--bs-table-accent-bg"})," is unset by default, we don’t have a default box shadow."]}),e.jsxs("li",{children:["When either ",e.jsx("code",{children:".table-striped"}),","," ",e.jsx("code",{children:".table-hover"})," or ",e.jsx("code",{children:".table-active"})," ","classes are added, the ",e.jsx("code",{children:"--bs-table-accent-bg"})," is set to a semitransparent color to colorize the background."]}),e.jsxs("li",{children:["For each table variant, we generate a"," ",e.jsx("code",{children:"--bs-table-accent-bg"})," color with the highest contrast depending on that color. For example, the accent color for ",e.jsx("code",{children:".table-primary"})," is darker while"," ",e.jsx("code",{children:".table-dark"})," has a lighter accent color."]}),e.jsx("li",{children:"Text and border colors are generated the same way, and their colors are inherited by default."})]}),e.jsx("p",{children:"Behind the scenes it looks like this:"}),e.jsx(g,{code:`
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
    $active-bg: mix($color, $background, percentage($table-active-bg-factor));

    --#{$prefix}table-bg: #{$background};
    --#{$prefix}table-striped-bg: #{$striped-bg};
    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
    --#{$prefix}table-active-bg: #{$active-bg};
    --#{$prefix}table-active-color: #{color-contrast($active-bg)};
    --#{$prefix}table-hover-bg: #{$hover-bg};
    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

    color: $color;
    border-color: mix($color, $background, percentage($table-border-factor));
  }
}`,language:"scss",className:"mb-0"})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"table-borders",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"BorderStyle",children:e.jsx(r,{tag:"h3",children:"Table borders"})})}),e.jsxs(c,{children:[e.jsxs(l,{id:"bordered-tables",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Bordered tables"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Add ",e.jsx("code",{children:".table-bordered"})," for borders on all sides of the table and cells."]}),e.jsx(s,{code:`
<table className='table table-bordered'>
	...
</table>`,children:e.jsx(d,{className:"table-bordered"})}),e.jsxs("p",{children:[e.jsx(f,{to:"../utilities/borders/#border-color",children:"Border color utilities"})," ","can be added to change colors:"]}),e.jsx(s,{code:`
<table className='table table-bordered border-primary'>
	...
</table>`,children:e.jsx(d,{className:"table-bordered border-primary"})})]})]}),e.jsxs(l,{id:"tables-without-borders",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Tables without borders"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Add ",e.jsx("code",{children:".table-borderless"})," for a table without borders."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table table-borderless'>
	...
</table>`,children:e.jsx(d,{className:"table-borderless"})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table table-dark table-borderless'>
	...
</table>`,children:e.jsx(d,{className:"table-dark table-borderless"})})})]})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"small-tables",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"Straighten",children:e.jsx(r,{tag:"h3",children:"Small tables"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Add ",e.jsx("code",{children:".table-sm"})," to make any ",e.jsx("code",{children:".table"})," more compact by cutting all cell ",e.jsx("code",{children:"padding"})," in half."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table table-sm'>
	...
</table>`,children:e.jsx(d,{className:"table-sm"})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table table-dark table-sm'>
	...
</table>`,children:e.jsx(d,{className:"table-dark table-sm"})})})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"vertical-alignment",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"VerticalAlignCenter",children:e.jsx(r,{tag:"h3",children:"Vertical alignment"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Table cells of ",e.jsx("code",{children:"<thead>"})," are always vertical aligned to the bottom. Table cells in ",e.jsx("code",{children:"<tbody>"})," ","inherit their alignment from ",e.jsx("code",{children:"<table>"})," and are aligned to the the top by default. Use the"," ",e.jsx($,{to:"../utilities/vertical-align",children:"vertical align"})," ","classes to re-align where needed."]}),e.jsx(s,{code:`
<table className='table table-sm table-dark'>
	<div className='table-responsive'>
		<table className='table align-middle'>
			<thead>
				<tr>...</tr>
			</thead>
			<tbody>
				<tr>...</tr>
				<tr className='align-bottom'>...</tr>
				<tr>
					<td>...</td>
					<td>...</td>
					<td className='align-top'>This cell is aligned to the top.</td>
					<td>...</td>
				</tr>
			</tbody>
		</table>
	</div>
</table>`,children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table align-middle",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"w-25",children:"Heading 1"}),e.jsx("th",{scope:"col",className:"w-25",children:"Heading 2"}),e.jsx("th",{scope:"col",className:"w-25",children:"Heading 3"}),e.jsx("th",{scope:"col",className:"w-25",children:"Heading 4"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsx("td",{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."})]}),e.jsxs("tr",{className:"align-bottom",children:[e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: bottom;"})," from the table row"]}),e.jsx("td",{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsxs("td",{children:["This cell inherits"," ",e.jsx("code",{children:"vertical-align: middle;"})," from the table"]}),e.jsx("td",{className:"align-top",children:"This cell is aligned to the top."}),e.jsx("td",{children:"This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells."})]})]})]})})})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"nesting",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"CopyAll",children:e.jsx(r,{tag:"h3",children:"Nesting"})})}),e.jsxs(c,{children:[e.jsx("p",{children:"Border styles, active styles, and table variants are not inherited by nested tables."}),e.jsx(s,{code:`
<table className='table table-striped'>
	<thead>...</thead>
	<tbody>
		...
		<tr>
			<td colSpan='4'>
				<table className='table mb-0'>
					...
				</table>
			</td>
		</tr>
		...
	</tbody>
</table>`,children:e.jsxs("table",{className:"table table-striped table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"#"}),e.jsx("th",{scope:"col",children:"First"}),e.jsx("th",{scope:"col",children:"Last"}),e.jsx("th",{scope:"col",children:"Handle"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"1"}),e.jsx("td",{children:"Mark"}),e.jsx("td",{children:"Otto"}),e.jsx("td",{children:"@mdo"})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:4,children:e.jsxs("table",{className:"table mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Header"}),e.jsx("th",{scope:"col",children:"Header"}),e.jsx("th",{scope:"col",children:"Header"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"A"}),e.jsx("td",{children:"First"}),e.jsx("td",{children:"Last"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"B"}),e.jsx("td",{children:"First"}),e.jsx("td",{children:"Last"})]}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"C"}),e.jsx("td",{children:"First"}),e.jsx("td",{children:"Last"})]})]})]})})}),e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:"3"}),e.jsx("td",{children:"Larry"}),e.jsx("td",{children:"the Bird"}),e.jsx("td",{children:"@twitter"})]})]})]})}),e.jsxs(h,{children:[e.jsx(n,{id:"how-nesting-works",className:"scroll-margin",children:"How nesting works"}),e.jsxs("p",{children:["To prevent any styles from leaking to nested tables, we use the child combinator (",e.jsx("code",{children:">"}),") selector in our CSS. Since we need to target all the ",e.jsx("code",{children:"td"}),"s and"," ",e.jsx("code",{children:"th"}),"s in the ",e.jsx("code",{children:"thead"}),","," ",e.jsx("code",{children:"tbody"}),", and ",e.jsx("code",{children:"tfoot"}),", our selector would look pretty long without it. As such, we use the rather odd looking"," ",e.jsx("code",{children:".table > :not(caption) > * > *"})," selector to target all ",e.jsx("code",{children:"td"}),"s and ",e.jsx("code",{children:"th"}),"s of the",e.jsx("code",{children:".table"}),", but none of any potential nested tables."]}),e.jsxs("p",{children:["Note that if you add ",e.jsx("code",{children:"<tr>"}),"s as direct children of a table, those ",e.jsx("code",{children:"<tr>"})," will be wrapped in a ",e.jsx("code",{children:"<tbody>"})," by default, thus making our selectors work as intended."]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"anatomy",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"PivotTableChart",children:e.jsx(r,{tag:"h3",children:"Anatomy"})})}),e.jsxs(c,{children:[e.jsxs(l,{id:"table-head",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Table head"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Similar to tables and dark tables, use the modifier classes ",e.jsx("code",{children:".table-light"})," or"," ",e.jsx("code",{children:".table-dark"})," to make"," ",e.jsx("code",{children:"<thead>"}),"s appear light or dark gray."]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table'>
	<thead className='table-light'>
		...
	</thead>
	<tbody>
		...
	</tbody>
</table>`,className:"mb-0",children:e.jsx(d,{headClassName:"table-light"})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx(s,{code:`
<table className='table'>
	<thead className='table-dark'>
		...
	</thead>
	<tbody>
		...
	</tbody>
</table>`,className:"mb-0",children:e.jsx(d,{headClassName:"table-dark"})})})]})]})]}),e.jsxs(l,{id:"table-foot",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Table foot"})})}),e.jsx(c,{children:e.jsx(s,{code:`
<table className='table'>
	<thead>
		...
	</thead>
	<tbody>
		...
	</tbody>
	<tfoot>
		...
	</tfoot>
</table>`,children:e.jsx(d,{isFooter:!0})})})]}),e.jsxs(l,{id:"captions",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Captions"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["A ",e.jsx("code",{children:"<caption>"})," functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."]}),e.jsx(s,{code:`
<table className='table'>
	<caption>List of users</caption>
	<thead>...</thead>
	<tbody>...</tbody>
</table>`,children:e.jsx(d,{isCaption:!0})}),e.jsxs("p",{children:["You can also put the ",e.jsx("code",{children:"<caption>"})," on the top of the table with ",e.jsx("code",{children:".caption-top"}),"."]}),e.jsx(s,{code:`
<table className='table caption-top'>
	<caption>List of users</caption>
	<thead>...</thead>
	<tbody>...</tbody>
</table>`,children:e.jsx(d,{isCaption:!0,className:"caption-top"})})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"responsive-tables",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"AspectRatio",children:e.jsx(r,{tag:"h3",children:"Responsive tables"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a ",e.jsx("code",{children:".table"})," with ",e.jsx("code",{children:".table-responsive"}),". Or, pick a maximum breakpoint with which to have a responsive table up to by using"," ",e.jsx("code",{children:".table-responsive{-sm | -md | -lg | -xl | -xxl}"}),"."]}),e.jsxs(h,{className:"mb-4",children:[e.jsx(n,{children:"Vertical clipping/truncation"}),e.jsxs("p",{children:["Responsive tables make use of"," ",e.jsx("code",{children:"overflow-y: hidden"}),", which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets."]})]}),e.jsxs(l,{id:"always-responsive",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Always responsive"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Across every breakpoint, use"," ",e.jsx("code",{children:".table-responsive"})," for horizontally scrolling tables."]}),e.jsx(s,{code:`
<div className='table-responsive'>
	<table className='table'>...</table>
</div>`,children:e.jsx(d,{isResponsive:!0})})]})]}),e.jsxs(l,{id:"breakpoint-specific",className:"scroll-margin rounded-2",children:[e.jsx(t,{children:e.jsx(a,{children:e.jsx(r,{children:"Breakpoint specific"})})}),e.jsxs(c,{children:[e.jsxs("p",{children:["Use"," ",e.jsx("code",{children:".table-responsive{-sm|-md|-lg|-xl|-xxl}"})," ","as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally."]}),e.jsx("p",{children:e.jsx("b",{children:"These tables may appear broken until their responsive styles apply at specific viewport widths."})}),e.jsx(s,{code:`
<div className='table-responsive'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-sm'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-md'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-lg'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-xl'>
	<table className='table'>...</table>
</div>

<div className='table-responsive-xxl'>
	<table className='table'>...</table>
</div>`,children:e.jsx(d,{isResponsive:!0})})]})]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(l,{id:"customizing-in-sass",className:"scroll-margin",children:[e.jsx(t,{children:e.jsx(a,{icon:"Code",children:e.jsx(r,{tag:"h3",children:"Customizing in Sass"})})}),e.jsxs(c,{children:[e.jsxs("ul",{children:[e.jsxs("li",{children:["The factor variables (",e.jsx("code",{children:"$table-striped-bg-factor"}),",",e.jsx("code",{children:"$table-active-bg-factor"})," &"," ",e.jsx("code",{children:"$table-hover-bg-factor"}),") are used to determine the contrast in table variants."]}),e.jsxs("li",{children:["Apart from the light & dark table variants, theme colors are lightened by the ",e.jsx("code",{children:"$table-bg-level"})," variable."]})]}),e.jsx(g,{code:`
$table-cell-padding-y:        .5rem;
$table-cell-padding-x:        .5rem;
$table-cell-padding-y-sm:     .25rem;
$table-cell-padding-x-sm:     .25rem;

$table-cell-vertical-align:   top;

$table-color:                 $body-color;
$table-bg:                    transparent;

$table-th-font-weight:        null;

$table-striped-color:         $table-color;
$table-striped-bg-factor:     .05;
$table-striped-bg:            rgba($black, $table-striped-bg-factor);

$table-active-color:          $table-color;
$table-active-bg-factor:      .1;
$table-active-bg:             rgba($black, $table-active-bg-factor);

$table-hover-color:           $table-color;
$table-hover-bg-factor:       .075;
$table-hover-bg:              rgba($black, $table-hover-bg-factor);

$table-border-factor:         .1;
$table-border-width:          $border-width;
$table-border-color:          $border-color;

$table-striped-order:         odd;

$table-group-separator-color: currentColor;

$table-caption-color:         $text-muted;

$table-bg-scale:              -80%;

$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
);`,language:"scss",className:"my-0"})]})]})})]})})]});export{Y as default};
