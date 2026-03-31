import{r as P,j as e,P as j,bu as s,S as C,Q as A,V as g,B as f,a as y,C as i,h as d,i as p,k as l,e as a,G as T,L as E,l as m,bq as n,A as b,I as S}from"./index-CH8wS3hI.js";import{B as W}from"./Breadcrumb-BaAopMTO.js";import{a as F,C as M}from"./Checks-3cSzJQyw.js";import{V as o}from"./Visible-D55mKjuQ.js";import{C as I}from"./CommonUnderConstruction-BRxPlRQe.js";const B=()=>{const t={cra:"Create React App",vite:"Vite",nextjs:"NextJs"},[r,v]=P.useState(localStorage.getItem("facit_docChooseStarter")||t.cra),u={cra:`
import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`,vite:`
import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`,nextjs:`
import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`},h={cra:`
/**
 * HERE ARE THE IMPORTS FOR THE APP
 */

const App = () => {
/**
 * HERE ARE THE FUNCTIONS FOR THE APP
 */
	return (
		<ThemeProvider {...themeProviderProps}>
			<ToastProvider {...toastProviderProps}>
				<TourProvider {...tourProviderProps}>
					<div className='app' {...appProps}>
						<AsideRoutes />
						<Wrapper />
					</div>
					<Portal id='portal-notification'>
						<ReactNotifications />
					</Portal>
				</TourProvider>
			</ToastProvider>
		</ThemeProvider>
	);
};

export default App;
`,vite:`
/**
 * HERE ARE THE IMPORTS FOR THE APP
 */

const App = () => {
/**
 * HERE ARE THE FUNCTIONS FOR THE APP
 */
	return (
		<ThemeProvider {...themeProviderProps}>
			<ToastProvider {...toastProviderProps}>
				<TourProvider {...tourProviderProps}>
					<div className='app' {...appProps}>
						<AsideRoutes />
						<Wrapper />
					</div>
					<Portal id='portal-notification'>
						<ReactNotifications />
					</Portal>
				</TourProvider>
			</ToastProvider>
		</ThemeProvider>
	);
};

export default App;
`,nextjs:`
import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`},x={cra:`
/**
 * HERE ARE THE IMPORTS FOR THE WRAPPER
 */
 
const Wrapper = () => {
	return (
		<>
			<WrapperContainer>
				<HeaderRoutes />
				<Content />
				<FooterRoutes />
			</WrapperContainer>
			<WrapperOverlay />
		</>
	);
};

export default Wrapper;
`,vite:`
/**
 * HERE ARE THE IMPORTS FOR THE WRAPPER
 */
 
const Wrapper = () => {
	return (
		<>
			<WrapperContainer>
				<HeaderRoutes />
				<Content />
				<FooterRoutes />
			</WrapperContainer>
			<WrapperOverlay />
		</>
	);
};

export default Wrapper;
`,nextjs:`
import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import './i18n';

const children = (
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`};return e.jsxs(j,{title:s.gettingStarted.subMenu.projectStructure.text,children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx(W,{list:[{title:s.gettingStarted.text,to:s.gettingStarted.path},{title:s.gettingStarted.subMenu.projectStructure.text,to:s.gettingStarted.subMenu.projectStructure.path}]})}),e.jsxs(g,{children:[e.jsx("span",{children:e.jsx("i",{children:"Next step"})}),e.jsx(f,{tag:"a",color:"success",isLight:!0,icon:s.routes.subMenu.router.icon,to:`../${s.routes.subMenu.router.path}`,children:s.routes.subMenu.router.text})]})]}),e.jsxs(y,{children:[e.jsxs("div",{className:"row h-100 align-content-start",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs(i,{className:"position-sticky sticky-top-size",children:[e.jsx(d,{children:e.jsx(p,{icon:"FollowTheSigns",iconColor:"success",children:e.jsx(l,{children:"Choose your preference"})})}),e.jsxs(a,{children:[e.jsx("p",{children:"3 different options are offered according to the needs of your project."}),e.jsxs(T,{children:[e.jsx(E,{children:"Choose"}),e.jsx(F,{children:Object.keys(t).map(c=>e.jsx(M,{type:"radio",name:"chooseStarter",id:t[c],label:t[c],value:t[c],onChange:R=>{localStorage.setItem("facit_docChooseStarter",R.target.value),v(R.target.value)},checked:r},c))})]})]})]})}),e.jsxs("div",{className:"col-md-9",children:[e.jsxs(o,{is:[t.cra,t.vite].includes(r),children:[e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(p,{icon:"InsertDriveFile",iconColor:"success",children:[e.jsx(l,{children:"index.tsx"}),e.jsx(o,{is:r===t.cra||r===t.vite,children:e.jsx(m,{children:"src/index.tsx"})})]})}),e.jsxs(a,{children:[e.jsx(o,{is:r===t.cra,children:e.jsx(n,{children:u.cra})}),e.jsx(o,{is:r===t.vite,children:e.jsx(n,{children:u.vite})}),e.jsx(o,{is:[t.cra,t.vite].includes(r),children:e.jsx(b,{color:"info",isLight:!0,icon:"Info",className:"flex-nowrap mt-4",children:"If you want to use React 17, you can uncomment the lines for 17 and then comment the lines for 18."})})]})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(p,{icon:"InsertDriveFile",iconColor:"success",children:[e.jsx(l,{children:"App.tsx"}),e.jsx(o,{is:r===t.cra||r===t.vite,children:e.jsx(m,{children:"src/App/App.tsx"})})]})}),e.jsxs(a,{children:[e.jsx(o,{is:r===t.cra,children:e.jsx(n,{children:h.cra})}),e.jsx(o,{is:r===t.vite,children:e.jsx(n,{children:h.vite})})]})]}),e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(p,{icon:"InsertDriveFile",iconColor:"success",children:[e.jsx(l,{children:"Wrapper.tsx"}),e.jsx(o,{is:r===t.cra||r===t.vite,children:e.jsx(m,{children:"src/layout/Wrapper/Wrapper.tsx"})})]})}),e.jsxs(a,{children:[e.jsx(o,{is:r===t.cra,children:e.jsx(n,{children:x.cra})}),e.jsx(o,{is:r===t.vite,children:e.jsx(n,{children:x.vite})})]})]})]}),e.jsx(o,{is:r===t.nextjs,children:e.jsx(i,{children:e.jsx(a,{children:e.jsx(I,{})})})})]})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx(i,{children:e.jsx(a,{children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col",children:[e.jsx(S,{icon:"CheckCircle",size:"lg",className:"me-2 text-muted"}),e.jsx("span",{children:"If you are ready, you can proceed to the next step."})]}),e.jsx("div",{className:"col-auto",children:e.jsx(f,{tag:"a",color:"success",isLight:!0,icon:"NavigateNext",to:`../${s.routes.subMenu.router.path}`,children:"Next"})})]})})})})})]})]})};export{B as default};
