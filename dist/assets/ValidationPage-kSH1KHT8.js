import{y as x,j as a,P as b,bp as C,S as p,Q as k,a as f,C as n,h as r,i as c,k as h,e as d,l as j,bq as m,G as o,H as s,L as u,ab as g,ac as F,ak as N,a9 as V,ae as S,B as v,aa as B}from"./index-CH8wS3hI.js";import{B as y}from"./Breadcrumb-BaAopMTO.js";import{S as R}from"./Select-CWskhceH.js";import{a as L,C as t}from"./Checks-3cSzJQyw.js";const T=`<COMPONENT // Input || Select || Textarea || ChecksGroup || Checks
	onBlur={ Function } // Example: formik.handleBlur , Only Input, Select and Textarea
	isValid={ Boolean } // Example: formik.isValid , For formik 
	isTouched={ Boolean } // Example: formik.touched.NAME_OR_ID , For formik
	invalidFeedback={ String } // Example: formik.errors.NAME_OR_ID , For formik
	validFeedback={ String }
	isValidMessage={ Boolean }
	isTooltipFeedback={ Boolean }
 	{...props}/>`,D=`import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.validationFirstName) {
    errors.validationFirstName = 'Required';
  } else if (values.validationFirstName.length > 15) {
    errors.validationFirstName = 'Must be 15 characters or less';
  }
}

const ExampleForm = () => {
  const formik = ({
    initialValues: {},
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
	
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <FormGroup
        id='validationFirstName'
        label='First name'>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.validationFirstName}
          isValid={formik.isValid}
          isTouched={formik.touched.validationFirstName}
          invalidFeedback={formik.errors.validationFirstName}
          validFeedback='Looks good!'
        />
      </FormGroup>
      <Button
        type='submit'
        color='primary'
        isDisable={!formik.isValid && !!formik.submitCount}>
        Submit form
      </Button>
    </form>
  );
}

export default ExampleForm`,M=()=>{const i=x({initialValues:{validationFirstName:"",validationLastName:"",validationCustomUsername:"",validationCity:"",validationState:"",validationZip:"",validationDesc:"",validationRadios:"",validationCheck:!1},validate:e=>{const l={};return e.validationFirstName?e.validationFirstName.length>15&&(l.validationFirstName="Must be 15 characters or less"):l.validationFirstName="Required",e.validationLastName?e.validationLastName.length>20&&(l.validationLastName="Must be 20 characters or less"):l.validationLastName="Required",e.validationCustomUsername?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.validationCustomUsername)||(l.validationCustomUsername="Invalid email address"):l.validationCustomUsername="Required",e.validationCity||(l.validationCity="Please provide a valid city."),e.validationState||(l.validationState="Please select a valid state."),e.validationZip?e.validationZip.length!==5&&(l.validationZip="Must be 5 characters"):l.validationZip="Please provide a valid zip.",e.validationDesc?e.validationDesc.length<20&&(l.validationDesc=`Must be 20 characters or more, but currently ${e.validationDesc.length} characters`):l.validationDesc="Please provide a valid Desc.",e.validationRadios||(l.validationRadios="You must choose one before posting."),e.validationCheck||(l.validationCheck="You must agree before submitting."),l},onSubmit:e=>{alert(JSON.stringify(e,null,2))}});return a.jsxs(b,{title:C.forms.subMenu.validation.text,children:[a.jsx(p,{children:a.jsx(k,{children:a.jsx(y,{list:[{title:"Forms",to:"/forms"},{title:"Validation",to:"/forms/validation"}]})})}),a.jsx(f,{children:a.jsxs("div",{className:"row",children:[a.jsx("div",{className:"col-12",children:a.jsxs(n,{children:[a.jsx(r,{children:a.jsx(c,{icon:"VerifiedUser",children:a.jsx(h,{tag:"h2",children:"Validation"})})}),a.jsx(d,{children:a.jsxs("h3",{className:"text-muted",children:["We recommend using"," ",a.jsx("a",{href:"https://formik.org/docs/tutorial",target:"_blank",rel:"noreferrer",children:"formik"})," ","on forms. You can use the validation in a very comfortable way integrated with formik."]})}),a.jsx(r,{children:a.jsxs(c,{icon:"Assignment",children:[a.jsx(h,{children:"General Usage"}),a.jsx(j,{children:"Input and Textarea"})]})}),a.jsx(d,{children:a.jsx(m,{children:T})})]})}),a.jsx("div",{className:"col-12",children:a.jsx(n,{children:a.jsx(d,{children:a.jsx(m,{children:D})})})}),a.jsx("div",{className:"col-12",children:a.jsxs(n,{stretch:!0,tag:"form",noValidate:!0,onSubmit:i.handleSubmit,children:[a.jsx(r,{children:a.jsx(c,{children:a.jsx(h,{children:"Sample Validation Form"})})}),a.jsx(d,{children:a.jsxs("div",{className:"row g-4",children:[a.jsx(o,{id:"validationFirstName",label:"First name",className:"col-md-4",children:a.jsx(s,{onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationFirstName,isValid:i.isValid,isTouched:i.touched.validationFirstName,invalidFeedback:i.errors.validationFirstName,validFeedback:"Looks good!"})}),a.jsx(o,{id:"validationLastName",label:"Last name",className:"col-md-4",children:a.jsx(s,{onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationLastName,isValid:i.isValid,isTouched:i.touched.validationLastName,invalidFeedback:i.errors.validationLastName,validFeedback:"Looks good!"})}),a.jsxs(o,{className:"col-md-4",children:[a.jsx(u,{htmlFor:"validationUsername",children:"Mail address"}),a.jsxs(g,{children:[a.jsx(F,{id:"inputGroupPrepend",children:"@"}),a.jsx(s,{id:"validationCustomUsername",ariaDescribedby:"inputGroupPrepend",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationCustomUsername,isValid:i.isValid,isTouched:i.touched.validationCustomUsername,invalidFeedback:i.errors.validationCustomUsername,validFeedback:"Looks good!"})]})]}),a.jsx(o,{id:"validationCity",label:"City",className:"col-lg-6",children:a.jsx(s,{onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationCity,isValid:i.isValid,isTouched:i.touched.validationCity,invalidFeedback:i.errors.validationCity,validFeedback:"Looks good!"})}),a.jsx(o,{id:"validationState",label:"State",className:"col-md-3",children:a.jsx(R,{ariaLabel:"State",placeholder:"Choose...",list:[{value:"usa",text:"USA"},{value:"ca",text:"Canada"}],onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationState,isValid:i.isValid,isTouched:i.touched.validationState,invalidFeedback:i.errors.validationState})}),a.jsx(o,{id:"validationZip",label:"Zip",className:"col-md-3",children:a.jsx(s,{onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationZip,isValid:i.isValid,isTouched:i.touched.validationZip,invalidFeedback:i.errors.validationZip})}),a.jsx(o,{id:"validationDesc",label:"Desc",className:"col-lg-6",children:a.jsx(N,{onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.validationDesc,isValid:i.isValid,isTouched:i.touched.validationDesc,invalidFeedback:i.errors.validationDesc,validFeedback:"Looks good!"})}),a.jsxs(o,{className:"col-lg-6",children:[a.jsxs(u,{children:["Group checkboxes or radios on the same horizontal row by adding ",a.jsx("code",{children:"isInline"})]}),a.jsxs(L,{isValid:i.isValid,isTouched:i.touched.validationRadios,invalidFeedback:i.errors.validationRadios,children:[a.jsx(t,{type:"radio",id:"validationRadioOne",label:"One",name:"validationRadios",value:"first",onChange:i.handleChange,checked:i.values.validationRadios,isInline:!0}),a.jsx(t,{type:"radio",id:"validationRadioTwo",label:"Two",name:"validationRadios",value:"second",onChange:i.handleChange,checked:i.values.validationRadios,isInline:!0}),a.jsx(t,{type:"radio",id:"validationRadioThree",label:a.jsxs(a.Fragment,{children:["Three ",a.jsx("sup",{children:"(disabled)"})]}),name:"validationRadios",value:"third",onChange:i.handleChange,checked:i.values.validationRadios,isInline:!0,disabled:!0})]})]}),a.jsx(o,{className:"col-12",children:a.jsx(t,{id:"validationCheck",label:"Agree to terms and conditions",onChange:i.handleChange,checked:i.values.validationCheck,isValid:i.isValid,isTouched:i.touched.validationCheck,invalidFeedback:i.errors.validationCheck})})]})}),a.jsxs(V,{children:[a.jsx(S,{children:a.jsx(v,{type:"reset",color:"info",isOutline:!0,onClick:i.resetForm,children:"Reset"})}),a.jsx(B,{children:a.jsx(v,{type:"submit",color:"primary",isDisable:!i.isValid&&!!i.submitCount,children:"Submit form"})})]})]})})]})})]})};export{M as default};
