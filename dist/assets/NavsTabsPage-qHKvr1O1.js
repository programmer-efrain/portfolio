import{r as N,j as s,c as b,P,bp as u,S as B,Q as E,V as H,a as M,C as c,h as n,i as a,k as d,e as o,bq as R,l as h,m as x,b7 as i,D as g,o as D,q as k,s as L,N as V}from"./index-CH8wS3hI.js";import{B as F}from"./Breadcrumb-BaAopMTO.js";import{C as t}from"./CommonStoryBtn-BMxsH-1u.js";import{C as j}from"./CommonHowToUse-BcBJRhEC.js";import{C as S}from"./CommonDesc-C08fE1OW.js";const f=N.forwardRef(({children:l,className:m,...v},p)=>s.jsx("span",{ref:p,className:b("nav-link","cursor-pointer",m),"aria-current":"page",...v,children:l}));f.displayName="NavLinkDropdown";const e=N.forwardRef(({children:l,className:m,isActive:v,isDisable:p,...y},w)=>l.type.displayName==="Dropdown"?N.cloneElement(l,{tag:"li",className:b(l.props.className,"nav-item")}):s.jsx("li",{ref:w,className:b("nav-item",m),...y,children:N.cloneElement(l,{className:b(l.props.className,{active:v,disabled:p},"nav-link")})}));e.displayName="NavItem";const r=N.forwardRef(({tag:l="ul",children:m,className:v,design:p="pills",isFill:y,isJustified:w,isVertical:T,verticalBreakpoint:C,...A},I)=>s.jsx(l,{ref:I,className:b("nav",{[`nav-${p}`]:p,"nav-fill":y,"nav-justified":w},{[`flex${C?`-${C}`:""}-column`]:T||!!C},v),...A,children:m}));r.displayName="Nav";const q=()=>s.jsxs(P,{title:u.components.subMenu.navsTabs.text,children:[s.jsxs(B,{children:[s.jsx(E,{children:s.jsx(F,{list:[{title:u.components.text,to:`/${u.components.path}`},{title:u.components.subMenu.navsTabs.text,to:`/${u.components.subMenu.navsTabs.path}`}]})}),s.jsx(H,{children:s.jsx(t,{to:"/docs/components-nav--default"})})]}),s.jsx(M,{children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-12",children:s.jsxs(c,{children:[s.jsx(n,{children:s.jsx(a,{icon:"Assignment",children:s.jsx(d,{children:"General Usage"})})}),s.jsx(o,{children:s.jsx(R,{children:`
<Nav
	tag={ String } // 'ul' || 'nav'
	className={ String }
	design={ String } // 'tabs' || 'pills'
	isFill={ Boolean }
	isJustified={ Boolean }
	isVertical={ Boolean }
	verticalBreakpoint={ String } // 'sm' || 'md' || 'lg' || 'xl' || 'xxl'
	{...props}>
	
	{ // HTML example }
	<NavItem 
		className={ String }
		isActive={ Boolean }
		isDisable={ Boolean }
		{...props}>
		<a 
			href={ String }>
			{ String }
		</a>
	</NavItem>
	
	{ // NavLink example }
	<NavItem {...props}>
		<NavLink
			to={ String }
			{...props}>
			{ String }
		</NavLink>
	</NavItem>
	
	{ // HashLink example }
	<NavItem {...props}>
		<HashLink
			to={ String }
			{...props}>
			{ String }
		</NavLink>
	</NavItem>
	
	{ // Dropdown example }
	<NavItem {...props}>
		<Dropdown {...props}>
			<DropdownToggle {...props}>
				<NavLinkDropdown 
					className={ String }
					{...props}>
					Drop
				</NavLinkDropdown>
			</DropdownToggle>
			<DropdownMenu {...props}>
				<DropdownItem {...props}>
					... {// a, NavLink, HashLink }
				</DropdownItem>
				...
			</DropdownMenu>
		</Dropdown>
	</NavItem>
	...
</Nav>`})})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"DesignServices",children:[s.jsx(d,{children:"design"}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=design:pills"})})]}),s.jsx(n,{children:s.jsx(j,{children:"design: PropTypes.oneOf(['tabs', 'pills']),"})}),s.jsx(o,{children:s.jsxs("div",{className:"row g-3",children:[s.jsx("div",{className:"col-xl-6",children:s.jsxs(r,{design:"tabs",children:[s.jsx(e,{children:s.jsx("a",{href:"#",children:"Tabs"})}),s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})}),s.jsx(e,{children:s.jsxs(g,{children:[s.jsx(D,{children:s.jsx(f,{children:"Drop"})}),s.jsx(k,{children:s.jsx(L,{children:s.jsx(i,{to:"component",children:"nav link 2"})})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(r,{children:[s.jsx(e,{children:s.jsx("a",{href:"#",children:"Pills"})}),s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})}),s.jsx(e,{children:s.jsxs(g,{children:[s.jsx(D,{children:s.jsx(f,{children:"Drop"})}),s.jsx(k,{children:s.jsx(L,{children:s.jsx(i,{to:"component",children:"nav link 2"})})})]})})]})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"SwitchRight",iconColor:"danger",children:[s.jsx(d,{children:"isFill"}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=isFill:true"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isFill: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{isFill:!0,children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Much longer nav link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})}),s.jsx(e,{children:s.jsxs(g,{children:[s.jsx(D,{children:s.jsx(f,{children:"Drop"})}),s.jsx(k,{children:s.jsx(L,{children:s.jsx(i,{to:"component",children:"nav link 2"})})})]})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"BurstMode",iconColor:"secondary",children:[s.jsx(d,{children:"isJustified"}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=isJustified:true"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isJustified: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{isJustified:!0,children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Much longer nav link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})}),s.jsx(e,{children:s.jsxs(g,{children:[s.jsx(D,{children:s.jsx(f,{children:"Drop"})}),s.jsx(k,{children:s.jsx(L,{children:s.jsx(i,{to:"component",children:"nav link 2"})})})]})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"TextRotateVertical",iconColor:"info",children:[s.jsx(d,{children:"isVertical"}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=isVertical:true"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isVertical: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{isVertical:!0,children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"ContentCut",iconColor:"warning",children:[s.jsx(d,{children:"verticalBreakpoint"}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=verticalBreakpoint:xxl"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isVertical: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{isVertical:!0,verticalBreakpoint:"xxl",children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})})]})})]})}),s.jsx("div",{className:"col-12",children:s.jsxs(c,{children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"HotelClass",iconColor:"danger",children:[s.jsxs(d,{children:["className ",s.jsx("small",{children:"Example: Horizontal alignment"})]}),s.jsx(h,{children:"Nav"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav--default&args=className:justify-content-center"})})]}),s.jsx(n,{className:"pb-0",children:s.jsx(j,{children:"className: PropTypes.string,"})}),s.jsxs(o,{children:[s.jsxs(S,{className:"mb-4",children:[s.jsxs("p",{children:["Change the horizontal alignment of your nav with"," ",s.jsx(V,{to:"utilities/flex",children:"flexbox utilities"}),". By default, navs are left-aligned, but you can easily change them to center or right aligned."]}),s.jsxs("p",{children:["Centered with ",s.jsx("code",{children:".justify-content-center"}),":"]})]}),s.jsxs(r,{className:"justify-content-center",children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})})]}),s.jsxs(S,{className:"mb-4 mt-4",children:["Right-aligned with ",s.jsx("code",{children:".justify-content-end"}),":"]}),s.jsxs(r,{className:"justify-content-end",children:[s.jsx(e,{children:s.jsx(i,{to:"/components/navs-and-tabs",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})})]})]})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"ToggleOn",iconColor:"success",children:[s.jsx(d,{children:"isActive"}),s.jsx(h,{children:"NavItem"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav-sub-components-navitem--default&args=isActive:true"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isActive: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{children:[s.jsx(e,{isActive:!0,children:s.jsx("a",{href:"#",children:"Active"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})})]})})]})}),s.jsx("div",{className:"col-xl-6",children:s.jsxs(c,{stretch:!0,children:[s.jsxs(n,{children:[s.jsxs(a,{icon:"DoNotDisturbOn",iconColor:"danger",children:[s.jsx(d,{children:"isDisable"}),s.jsx(h,{children:"NavItem"})]}),s.jsx(x,{children:s.jsx(t,{to:"/story/components-nav-sub-components-navitem--default&args=isDisable:true"})})]}),s.jsx(n,{children:s.jsx(j,{children:"isDisable: PropTypes.bool,"})}),s.jsx(o,{children:s.jsxs(r,{children:[s.jsx(e,{isDisable:!0,children:s.jsx("a",{href:"#",children:"Disabled"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})}),s.jsx(e,{children:s.jsx("a",{href:"#",children:"Link"})})]})})]})})]})})]});export{q as default};
