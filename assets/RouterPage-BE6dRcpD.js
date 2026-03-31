import{r as f,j as e,P as T,bu as P,S as M,Q as V,V as U,B as u,bp as s,a as W,C as i,h as d,i as l,k as c,e as n,G as k,L as z,bq as a,l as m,A as x,m as v,c as b,b as G,I as X}from"./index-CH8wS3hI.js";import{B as Y}from"./Breadcrumb-BaAopMTO.js";import{a as $,C as q}from"./Checks-3cSzJQyw.js";import{V as r}from"./Visible-D55mKjuQ.js";import{A as K,a as J}from"./Accordion-BbeupE66.js";import{C as Q}from"./CommonUnderConstruction-BRxPlRQe.js";const se=()=>{const t={cra:"Create React App",vite:"Vite",nextjs:"NextJs"},[o,w]=f.useState(localStorage.getItem("facit_docChooseStarter")||t.cra),[p,_]=f.useState(!1),[h,I]=f.useState(!1),[g,D]=f.useState(!0),[j,O]=f.useState(!1),B=`
export interface PathRouteProps {
    caseSensitive?: NonIndexRouteObject["caseSensitive"];
    path?: NonIndexRouteObject["path"];
    id?: NonIndexRouteObject["id"];
    loader?: NonIndexRouteObject["loader"];
    action?: NonIndexRouteObject["action"];
    hasErrorBoundary?: NonIndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: NonIndexRouteObject["shouldRevalidate"];
    handle?: NonIndexRouteObject["handle"];
    index?: false;
    children?: React.ReactNode;
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
}
export interface LayoutRouteProps extends PathRouteProps {}
export interface IndexRouteProps {
    caseSensitive?: IndexRouteObject["caseSensitive"];
    path?: IndexRouteObject["path"];
    id?: IndexRouteObject["id"];
    loader?: IndexRouteObject["loader"];
    action?: IndexRouteObject["action"];
    hasErrorBoundary?: IndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: IndexRouteObject["shouldRevalidate"];
    handle?: IndexRouteObject["handle"];
    index: true;
    children?: undefined;
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
}

export declare type RouteProps = PathRouteProps | LayoutRouteProps | IndexRouteProps;
`,y={cra:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';
import ExamplePageAside from '../pages/_layout/_asides/ExamplePageAside';

const asides: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageAside /> },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
`,vite:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';
import ExamplePageAside from '../pages/_layout/_asides/ExamplePageAside';

const asides: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageAside /> },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
`,nextjs:""},H={cra:`
import React, { useContext } from 'react';
import Brand from '../../../layout/Brand/Brand';
import Navigation from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { exampleMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Aside, { AsideHead, AsideBody, AsideFoot } from '../../../layout/Aside/Aside';

const ExamplePageAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={exampleMenu} id='example-menu' />
			</AsideBody>
			<AsideFoot>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default ExamplePageAside;
`,vite:`
import React, { useContext } from 'react';
import Brand from '../../../layout/Brand/Brand';
import Navigation from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { exampleMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Aside, { AsideHead, AsideBody, AsideFoot } from '../../../layout/Aside/Aside';

const ExamplePageAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={exampleMenu} id='example-menu' />
			</AsideBody>
			<AsideFoot>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default ExamplePageAside;
`,nextjs:""},A={cra:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';
import ExamplePageHeader from '../pages/_layout/_headers/ExamplePageAside';

const headers: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageHeader /> },
	{ path: '*', element: <DefaultHeader /> },
];

export default headers;
`,vite:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';
import ExamplePageHeader from '../pages/_layout/_headers/ExamplePageAside';

const headers: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageHeader /> },
	{ path: '*', element: <DefaultHeader /> },
];

export default headers;
`,nextjs:""},E={cra:`
import React  from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { exampleMenu } from '../../../menu';

const ExamplePageHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<Navigation menu={exampleMenu} id='example-menu' horizontal/>
			</HeaderLeft>
			<HeaderRight>
				Header Right Content
			</HeaderRight>
		</Header>
	);
};

export default ExamplePageHeader;
`,vite:`
import React  from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { exampleMenu } from '../../../menu';

const ExamplePageHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<Navigation menu={exampleMenu} id='example-menu' horizontal/>
			</HeaderLeft>
			<HeaderRight>
				Header Right Content
			</HeaderRight>
		</Header>
	);
};

export default ExamplePageHeader;
`,nextjs:""},N={cra:`
import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/presentation/auth/Login';

const ExamplePage: lazy(() => import('../pages/ExamplePage'));

const contents: RouteProps[] = [
	{ path: '/', element: <HomePage /> },
	{ path: 'login', element: <Login /> },
	{ path: 'example-page', element: <ExamplePage /> },
];

export default contents;
`,vite:`
import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/presentation/auth/Login';

const ExamplePage: lazy(() => import('../pages/ExamplePage'));

const contents: RouteProps[] = [
	{ path: '/', element: <HomePage /> },
	{ path: 'login', element: <Login /> },
	{ path: 'example-page', element: <ExamplePage /> },
];

export default contents;
`,nextjs:""},S={cra:`
import React from 'react';
import PageWrapper from '../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../layout/SubHeader/SubHeader';
import Page from '../layout/Page/Page';

const ExamplePage = () => {
	return (
		<PageWrapper title='Example Page' isProtected>
			<SubHeader>
				<SubHeaderLeft>Sub Header Left</SubHeaderLeft>
				<SubHeaderRight>Sub Header Right</SubHeaderRight>
			</SubHeader>
			<Page>Page content</Page>
		</PageWrapper>
	);
};

export default ExamplePage;

`,vite:`
import React from 'react';
import PageWrapper from '../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../layout/SubHeader/SubHeader';
import Page from '../layout/Page/Page';

const ExamplePage = () => {
	return (
		<PageWrapper title='Example Page' isProtected>
			<SubHeader>
				<SubHeaderLeft>Sub Header Left</SubHeaderLeft>
				<SubHeaderRight>Sub Header Right</SubHeaderRight>
			</SubHeader>
			<Page>Page content</Page>
		</PageWrapper>
	);
};

export default ExamplePage;

`,nextjs:""},C={cra:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';
import ExamplePageFooter from '../pages/_layout/_footers/ExamplePageFooter';

const footers: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageFooter /> },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
`,vite:`
import React from 'react';
import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';
import ExamplePageFooter from '../pages/_layout/_footers/ExamplePageFooter';

const footers: RouteProps[] = [
	{ path: 'login', element: null },
	{ path: 'example-page', element: <ExamplePageFooter /> },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
`,nextjs:""},F={cra:`
import React from 'react';
import Footer from '../../../layout/Footer/Footer';

const DefaultFooter = () => {
	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						Footer Left
					</div>
					<div className='col-auto'>
						Footer Right
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;

`,vite:`
import React from 'react';
import Footer from '../../../layout/Footer/Footer';

const DefaultFooter = () => {
	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						Footer Left
					</div>
					<div className='col-auto'>
						Footer Right
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;

`,nextjs:""};return e.jsxs(T,{title:P.routes.subMenu.router.text,children:[e.jsxs(M,{children:[e.jsx(V,{children:e.jsx(Y,{list:[{title:P.routes.text,to:P.routes.path},{title:P.routes.subMenu.router.text,to:P.routes.subMenu.router.path}]})}),e.jsxs(U,{children:[e.jsx(u,{tag:"a",color:"info",isLight:!0,icon:s.components.icon,to:`../${s.components.path}`,children:s.components.text}),e.jsx(u,{tag:"a",color:"info",isLight:!0,icon:s.forms.icon,to:`../${s.forms.path}`,children:s.forms.text})]})]}),e.jsxs(W,{children:[e.jsxs("div",{className:"row h-100 align-content-start",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs(i,{className:"position-sticky sticky-top-size",children:[e.jsx(d,{children:e.jsx(l,{icon:"FollowTheSigns",iconColor:"success",children:e.jsx(c,{children:"Choose your preference"})})}),e.jsxs(n,{children:[e.jsx("p",{children:"3 different options are offered according to the needs of your project."}),e.jsxs(k,{children:[e.jsx(z,{children:"Choose"}),e.jsx($,{children:Object.keys(t).map(R=>e.jsx(q,{type:"radio",name:"chooseStarter",id:t[R],label:t[R],value:t[R],onChange:L=>{localStorage.setItem("facit_docChooseStarter",L.target.value),w(L.target.value)},checked:o},R))})]})]})]})}),e.jsxs("div",{className:"col-md-9",children:[e.jsxs(r,{is:[t.cra,t.vite].includes(o),children:[e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsxs(i,{children:[e.jsx(d,{children:e.jsx(l,{icon:"AltRoute",children:e.jsx(c,{children:"Route"})})}),e.jsxs(n,{children:[e.jsx("p",{children:"Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative."}),e.jsx("p",{children:'One of the most unique aspects of the project is definitely the "Route" structure. You can set Aside, Header, Footer and of course Content for any path you want, you can even not put them if you wish.'}),e.jsxs("strong",{children:["You can use all props of the"," ",e.jsx("a",{href:"https://reactrouter.com/en/main/route/route",target:"_blank",rel:"noreferrer",children:"React Router Dom"})," ","when defining a route."]}),e.jsx(K,{id:"RoutePropsAccordion",className:"mt-3",children:e.jsx(J,{id:"RouteProps",title:"Type Declaration - RouteProps[]",icon:"VpnKey",children:e.jsx(a,{children:B})})})]})]})}),e.jsxs("div",{className:"row mb-4",style:{height:400},children:[e.jsx("div",{className:"col-3 h-100",children:e.jsx("div",{className:"h-100 d-flex justify-content-center align-items-center border border-3 border-warning rounded rounded-4 fw-bold text-warning",children:"asideRoutes"})}),e.jsx("div",{className:"col-9 h-100",children:e.jsxs("div",{className:"h-100 d-flex flex-column align-items-stretch",children:[e.jsx("div",{className:"d-flex justify-content-center align-items-center border border-3 border-info rounded rounded-4 fw-bold text-info p-3",children:"headerRoutes"}),e.jsx("div",{className:"h-100 d-flex justify-content-center align-items-center border border-3 border-success rounded rounded-4 fw-bold text-success p-3 my-4",children:"contentRoutes"}),e.jsx("div",{className:"d-flex justify-content-center align-items-center border border-3 border-danger rounded rounded-4 fw-bold text-danger p-3",children:"footerRoutes"})]})})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(l,{icon:"AccountTree",iconColor:"warning",children:[e.jsx(c,{children:"asideRoutes.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/routes/asideRoutes.tsx"})})]})}),e.jsxs(n,{children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:y.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:y.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"}),e.jsxs(x,{color:"warning",isLight:!0,icon:"Warning",className:"mt-3",children:["If you don't want it to be ",e.jsx("b",{children:"Aside"})," in a path, simply give the",e.jsx("code",{className:"px-2",children:"element"})," prop the value"," ",e.jsx("code",{className:"px-2",children:"null"}),"."]})]})]}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsxs(l,{icon:"InsertDriveFile",iconColor:"warning",children:[e.jsx(c,{children:"ExamplePageAside.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/pages/_layout/_asides/ExamplePageAside.tsx"})})]}),e.jsx(v,{children:e.jsx(u,{isOutline:!0,color:p?"danger":"info",icon:p?"VisibilityOff":"Visibility",onClick:()=>_(!p),children:p?"Hide":"Show"})})]}),e.jsxs(n,{children:[e.jsxs(r,{is:p,children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:H.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:H.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"})]}),e.jsx(x,{className:b({"mt-3":p}),icon:"Info",color:"info",isLight:!0,children:"Much more detailed usage is available in demos."})]})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(l,{icon:"AccountTree",iconColor:"info",children:[e.jsx(c,{children:"headerRoutes.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/routes/headerRoutes.tsx"})})]})}),e.jsxs(n,{children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:A.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:A.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"}),e.jsxs(x,{color:"warning",isLight:!0,icon:"Warning",className:"mt-3",children:["If you don't want it to be ",e.jsx("b",{children:"Header"})," in a path, simply give the",e.jsx("code",{className:"px-2",children:"element"})," prop the value"," ",e.jsx("code",{className:"px-2",children:"null"}),"."]})]})]}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsxs(l,{icon:"InsertDriveFile",iconColor:"info",children:[e.jsx(c,{children:"ExamplePageHeader.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/pages/_layout/_headers/ExamplePageHeader.tsx"})})]}),e.jsx(v,{children:e.jsx(u,{isOutline:!0,color:h?"danger":"info",icon:h?"VisibilityOff":"Visibility",onClick:()=>I(!h),children:h?"Hide":"Show"})})]}),e.jsxs(n,{children:[e.jsxs(r,{is:h,children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:E.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:E.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"})]}),e.jsx(x,{className:b({"mt-3":h}),icon:"Info",color:"info",isLight:!0,children:"Much more detailed usage is available in demos."})]})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(l,{icon:"AccountTree",iconColor:"success",children:[e.jsx(c,{children:"contentRoutes.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/routes/contentRoutes.tsx"})})]})}),e.jsxs(n,{children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:N.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:N.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"})]})]}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsxs(l,{icon:"InsertDriveFile",iconColor:"success",children:[e.jsx(c,{children:"ExamplePage.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/pages/ExamplePage.tsx"})})]}),e.jsx(v,{children:e.jsx(u,{isOutline:!0,color:g?"danger":"info",icon:g?"VisibilityOff":"Visibility",onClick:()=>D(!g),children:g?"Hide":"Show"})})]}),e.jsxs(n,{children:[e.jsxs(x,{icon:"Shield",color:"warning",className:"flex-nowrap",isLight:!0,children:[e.jsx(G,{children:"Public and Private Page"}),"You can check if a page is private from within the page. By default, all pages are private, but if you wish, you can give the ",e.jsx("code",{children:"PageWrapper"})," component the value"," ",e.jsx("code",{children:"false"})," to the ",e.jsx("code",{children:"isProtected"})," prop (Example: Login, 404, etc.)."]}),e.jsxs(r,{is:g,children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:S.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:S.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"})]}),e.jsx(x,{className:b({"mt-3":g}),icon:"Info",color:"info",isLight:!0,children:"Much more detailed usage is available in demos."})]})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(l,{icon:"AccountTree",iconColor:"danger",children:[e.jsx(c,{children:"footerRoutes.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/routes/footerRoutes.tsx"})})]})}),e.jsxs(n,{children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:C.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:C.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"}),e.jsxs(x,{color:"warning",isLight:!0,icon:"Warning",className:"mt-3",children:["If you don't want it to be ",e.jsx("b",{children:"Footer"})," in a path, simply give the",e.jsx("code",{className:"px-2",children:"element"})," prop the value"," ",e.jsx("code",{className:"px-2",children:"null"}),"."]})]})]}),e.jsxs(i,{children:[e.jsxs(d,{children:[e.jsxs(l,{icon:"InsertDriveFile",iconColor:"danger",children:[e.jsx(c,{children:"ExamplePageFooter.tsx"}),e.jsx(r,{is:[t.cra,t.vite].includes(o),children:e.jsx(m,{children:"src/pages/_layout/_footers/ExamplePageFooter.tsx"})})]}),e.jsx(v,{children:e.jsx(u,{isOutline:!0,color:j?"danger":"info",icon:j?"VisibilityOff":"Visibility",onClick:()=>O(!j),children:j?"Hide":"Show"})})]}),e.jsxs(n,{children:[e.jsxs(r,{is:j,children:[e.jsx(r,{is:o===t.cra,children:e.jsx(a,{children:F.cra})}),e.jsx(r,{is:o===t.vite,children:e.jsx(a,{children:F.vite})}),e.jsx(r,{is:o===t.nextjs,children:"Under Construction"})]}),e.jsx(x,{className:b({"mt-3":j}),icon:"Info",color:"info",isLight:!0,children:"Much more detailed usage is available in demos."})]})]})]}),e.jsx(r,{is:o===t.nextjs,children:e.jsx(i,{children:e.jsx(n,{children:e.jsx(Q,{})})})})]})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(i,{children:e.jsx(n,{children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col",children:[e.jsx(X,{icon:"CheckCircle",size:"lg",className:"me-2 text-muted"}),e.jsx("span",{children:"If you are ready, you can proceed to the next step."})]}),e.jsx("div",{className:"col-auto",children:e.jsx(u,{tag:"a",color:"info",isLight:!0,icon:s.components.icon,to:`../${s.components.path}`,children:s.components.text})}),e.jsx("div",{className:"col-auto",children:e.jsx(u,{tag:"a",color:"info",isLight:!0,icon:s.forms.icon,to:`../${s.forms.path}`,children:s.forms.text})})]})})})})})]})]})};export{se as default};
