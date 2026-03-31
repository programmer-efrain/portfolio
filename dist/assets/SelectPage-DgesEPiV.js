import{y as u,j as e,P as L,bp as B,S as A,Q as D,V as E,a as z,C as n,h as l,i as r,k as a,e as i,l as o,bq as b,m as x,G as c,B as j,a9 as f,L as p}from"./index-CH8wS3hI.js";import{B as G}from"./Breadcrumb-BaAopMTO.js";import{S as t,a as k,O as s}from"./Select-CWskhceH.js";import{C as T}from"./CommonDesc-C08fE1OW.js";import{C as m}from"./CommonHowToUse-BcBJRhEC.js";import{C as h}from"./CommonStoryBtn-BMxsH-1u.js";const N=[{value:1,text:"One"},{value:2,text:"Two"},{value:3,text:"Three"},{value:4,text:"Four"},{value:5,text:"Five"},{value:6,text:"Six"}],q=()=>{const O=`
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={ Array } // [ {value: String, text: String}, ... ]
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object}
	defaultValue={ String || Array} // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props} />`,P=`
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={null}
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object }
	defaultValue={ String || Array } // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}>
		<Option value={ String }>...</Option>
		...
</Select>`,F=`
<Select
	id={ String }
	name={ String }
	className={ String }
	placeholder={ String }
	required={ Boolean }
	ariaDescribedby={ String }
	ariaLabelledby={ String }
	ariaLabel={ String }
	list={null}
	multiple={ Boolean }
	title={ String }
	size={ String } // null || 'sm' || 'lg'
	disabled={ Boolean }
	value={ String || Object }
	defaultValue={ String || Array } // '...' || [ {value: String, text: String}, ... ]
	onBlur={ Function }
	onChange={ Function }
	onFocus={ Function }
	onInput={ Function }
	onInvalid={ Function }
	onSelect={ Function }
 	{...props}>
 		<Options list={ Array } />
</Select>`,C=e.jsx("a",{href:"#firstWay",className:"text-decoration-none",children:e.jsx("sup",{children:"[1]"})}),w=e.jsx("a",{href:"#secondWay",className:"text-decoration-none",children:e.jsx("sup",{children:"[2]"})}),W=e.jsx("a",{href:"#thirdWay",className:"text-decoration-none",children:e.jsx("sup",{children:"[3]"})}),S=u({initialValues:{exampleSelectOneWay:""},onSubmit:d=>{alert(JSON.stringify(d,null,2))}}),g=u({initialValues:{exampleSelectTwoWay:""},onSubmit:d=>{alert(JSON.stringify(d,null,2))}}),y=u({initialValues:{exampleSelectThreeWay:""},onSubmit:d=>{alert(JSON.stringify(d,null,2))}}),v=u({initialValues:{exampleMultiSelect:["1","2"]},onSubmit:d=>{alert(JSON.stringify(d,null,2))}});return e.jsxs(L,{title:B.forms.subMenu.select.text,children:[e.jsxs(A,{children:[e.jsx(D,{children:e.jsx(G,{list:[{title:"Forms",to:"/forms"},{title:"Select",to:"/forms/select"}]})}),e.jsx(E,{children:e.jsx(h,{to:"/docs/forms-select--default"})})]}),e.jsx(z,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx(r,{icon:"Assignment",children:e.jsx(a,{tag:"h2",children:"Select"})})}),e.jsx(i,{children:e.jsxs("h3",{className:"text-muted",children:["Customize the native ",e.jsx("code",{children:"<select>"}),"s with custom props and CSS that changes the element’s initial appearance."]})}),e.jsx(l,{children:e.jsxs(r,{icon:"Assignment",children:[e.jsx(a,{children:"General Usage"}),e.jsx(o,{children:"Select, Options and Option"})]})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-lg-4",children:[e.jsx("h4",{id:"firstWay",className:"scroll-margin",children:"1. Way"}),e.jsx(b,{children:O})]}),e.jsxs("div",{className:"col-lg-4",children:[e.jsx("h4",{id:"secondWay",className:"scroll-margin",children:"2. Way"}),e.jsx(b,{children:F})]}),e.jsxs("div",{className:"col-lg-4",children:[e.jsx("h4",{id:"thirdWay",className:"scroll-margin",children:"3. Way"}),e.jsx(b,{children:P})]})]})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(n,{children:[e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs(n,{className:"mb-0",stretch:!0,tag:"form",onSubmit:S.handleSubmit,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"Ballot",children:[e.jsxs(a,{children:["list ",C]}),e.jsx(o,{children:"Select"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--default"})})]}),e.jsx(l,{children:e.jsxs(m,{children:[e.jsx("div",{children:"list: PropTypes.arrayOf("}),e.jsxs("div",{className:"ps-3",children:["PropTypes.shape(","{"]}),e.jsxs("div",{className:"ps-3",children:[e.jsx("div",{className:"ps-3",children:"value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"}),e.jsx("div",{className:"ps-3",children:"text: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"}),e.jsx("div",{className:"ps-3",children:"label: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"})]}),e.jsxs("div",{className:"ps-3",children:["}","),"]}),e.jsx("div",{children:"),"})]})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsx(c,{id:"exampleSelectOneWay",label:"Please select",className:"col-12",children:e.jsx(t,{ariaLabel:"Default select example",placeholder:"Open this select menu",onChange:S.handleChange,value:S.values.exampleSelectOneWay,list:N})}),e.jsx("div",{className:"col-12 d-flex justify-content-md-end",children:e.jsx(j,{type:"submit",color:"info",children:"Submit"})})]})})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs(n,{className:"mb-0",stretch:!0,tag:"form",onSubmit:g.handleSubmit,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"Ballot",children:[e.jsxs(a,{children:["list ",w]}),e.jsx(o,{children:"Options"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--second-way"})})]}),e.jsx(l,{children:e.jsxs(m,{children:[e.jsx("div",{children:"list: PropTypes.arrayOf("}),e.jsxs("div",{className:"ps-3",children:["PropTypes.shape(","{"]}),e.jsxs("div",{className:"ps-3",children:[e.jsx("div",{className:"ps-3",children:"value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"}),e.jsx("div",{className:"ps-3",children:"text: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"}),e.jsx("div",{className:"ps-3",children:"label: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),"})]}),e.jsxs("div",{className:"ps-3",children:["}","),"]}),e.jsx("div",{children:"),"})]})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsx(c,{id:"exampleSelectTwoWay",label:"Please select",className:"col-12",children:e.jsx(t,{ariaLabel:"Default select example",placeholder:"Open this select menu",onChange:g.handleChange,value:g.values.exampleSelectTwoWay,children:e.jsx(k,{list:N})})}),e.jsx("div",{className:"col-12 d-flex justify-content-md-end",children:e.jsx(j,{type:"submit",color:"info",children:"Submit"})})]})})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs(n,{className:"mb-0",stretch:!0,tag:"form",onSubmit:y.handleSubmit,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"Ballot",children:[e.jsxs(a,{children:["value & children ",W]}),e.jsx(o,{children:"Option"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--third-way"})})]}),e.jsx(l,{children:e.jsxs(m,{children:[e.jsx("div",{children:"children: PropTypes.string.isRequired,"}),e.jsx("div",{children:"value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),"})]})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsx(c,{id:"exampleSelectThreeWay",label:"Please select",className:"col-12",children:e.jsxs(t,{ariaLabel:"Default select example",placeholder:"Open this select menu",onChange:y.handleChange,value:y.values.exampleSelectThreeWay,children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"}),e.jsx(s,{value:"4",children:"Four"})]})}),e.jsx("div",{className:"col-12 d-flex justify-content-md-end",children:e.jsx(j,{type:"submit",color:"info",children:"Submit"})})]})})]})})]})}),e.jsx(f,{children:e.jsxs(T,{children:["Custom ",e.jsx("code",{children:"<select>"})," menus need only a custom class, .form-select to trigger the custom styles. Custom styles are limited to the ",e.jsx("code",{children:"<select>"}),"’s initial appearance and cannot modify the ",e.jsx("code",{children:"<option>"}),"s due to browser limitations."]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs(n,{stretch:!0,tag:"form",onSubmit:v.handleSubmit,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"DynamicFeed",children:[e.jsx(a,{children:"multiple"}),e.jsx(o,{children:"Select"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--default&args=multiple:true"})})]}),e.jsx(l,{children:e.jsx(m,{children:"multiple: PropTypes.bool,"})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsx(c,{id:"exampleMultiSelect",label:"Select one",className:"col-12",children:e.jsxs(t,{ariaLabel:"Default select example",multiple:!0,onChange:v.handleChange,value:v.values.exampleMultiSelect,children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"}),e.jsx(s,{value:"4",children:"Four"})]})}),e.jsx("div",{className:"col-12 d-flex justify-content-md-end",children:e.jsx(j,{type:"submit",color:"info",children:"Submit"})})]})}),e.jsx(f,{children:e.jsxs(T,{children:["Selecting multiple options vary in different operating systems and browsers:",e.jsxs("ul",{children:[e.jsxs("li",{children:["For windows: Hold down the ",e.jsx("kbd",{children:"control"})," (ctrl) button to select multiple options"]}),e.jsxs("li",{children:["For Mac: Hold down the ",e.jsx("kbd",{children:"command"})," button to select multiple options"]})]})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs(n,{stretch:!0,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"GppBad",iconColor:"danger",children:[e.jsx(a,{children:"disabled"}),e.jsx(o,{children:"Select"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--default&args=disabled:true"})})]}),e.jsx(l,{children:e.jsx(m,{children:"disabled: PropTypes.bool,"})}),e.jsx(i,{children:e.jsxs(c,{children:[e.jsx(p,{htmlFor:"smallSelect",children:"Disabled Select"}),e.jsxs(t,{id:"smallSelect",ariaLabel:"Default select example",placeholder:"Open this select menu",disabled:!0,children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"})]})]})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsxs(n,{stretch:!0,children:[e.jsxs(l,{children:[e.jsxs(r,{icon:"Straighten",iconColor:"success",children:[e.jsx(a,{children:"size"}),e.jsx(o,{children:"Select"})]}),e.jsx(x,{children:e.jsx(h,{to:"/story/forms-select--default&args=size:lg"})})]}),e.jsx(l,{children:e.jsx(m,{children:"size: PropTypes.oneOf(['lg', 'sm']),"})}),e.jsx(i,{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs(c,{className:"col-12",children:[e.jsx(p,{htmlFor:"smallSelect",children:"Small"}),e.jsxs(t,{id:"smallSelect",ariaLabel:"Default select example",placeholder:"Open this select menu",size:"sm",children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"})]})]}),e.jsxs(c,{className:"col-12",children:[e.jsx(p,{htmlFor:"defaultSelect",children:"Default"}),e.jsxs(t,{id:"defaultSelect",ariaLabel:"Default select example",placeholder:"Open this select menu",children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"})]})]}),e.jsxs(c,{className:"col-12",children:[e.jsx(p,{htmlFor:"largeSelect",children:"Large"}),e.jsxs(t,{id:"largeSelect",ariaLabel:"Default select example",placeholder:"Open this select menu",size:"lg",children:[e.jsx(s,{value:"1",children:"One"}),e.jsx(s,{value:"2",children:"Two"}),e.jsx(s,{value:"3",children:"Three"})]})]})]})}),e.jsx(f,{children:e.jsxs(T,{children:["Set heights using size props like ",e.jsx("code",{children:"lg"})," and"," ",e.jsx("code",{children:"sm"}),"."]})})]})})]})})]})};export{N as SELECT_OPTIONS,q as default};
