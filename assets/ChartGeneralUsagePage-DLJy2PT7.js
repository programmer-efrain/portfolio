import{j as e,P as j,bp as l,S as x,Q as b,a as m,C as a,h as o,i as p,k as t,e as i,bq as u,l as n,bv as d,B as g}from"./index-CH8wS3hI.js";import{B as f}from"./Breadcrumb-BaAopMTO.js";import{C as c}from"./CommonHowToUse-BcBJRhEC.js";import{C as y}from"./CommonDesc-C08fE1OW.js";const A=()=>{const h=`
<Chart 
	series={ Array } 
	options={ Object } 
	type={ String } // 'line' || 'area' || 'bar' || 'pie' || 'donut' || 'scatter' || 'bubble' || 'heatmap' || 'radialBar' || 'rangeBar' || 'candlestick' || 'boxPlot' || 'radar' || 'polarArea' 
	height={ Number || String }
	width={ Number || String }
	className={ String } />`,P=`
	series: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.shape({
				name: PropTypes.string,
				data: PropTypes.arrayOf(
					PropTypes.oneOfType([
						PropTypes.string,
						PropTypes.number,
						PropTypes.arrayOf(
							PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
						),
						PropTypes.shape({
							x: PropTypes.oneOfType([
								PropTypes.string,
								PropTypes.number,
								PropTypes.arrayOf(
									PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
								),
								PropTypes.object,
							]),
							y: PropTypes.oneOfType([
								PropTypes.string,
								PropTypes.number,
								PropTypes.arrayOf(
									PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
								),
								PropTypes.object,
							]),
						}),
					]),
				),
			}),
		]),
	).isRequired,`,T=`
options: PropTypes.shape({
	annotations: PropTypes.object,
	chart: PropTypes.object,
	colors: PropTypes.array,
	dataLabels: PropTypes.object,
	fill: PropTypes.object,
	grid: PropTypes.object,
	labels: PropTypes.array,
	legend: PropTypes.object,
	markers: PropTypes.object,
	noData: PropTypes.object,
	plotOptions: PropTypes.object,
	responsive: PropTypes.array,
	series: PropTypes.array,
	states: PropTypes.object,
	stroke: PropTypes.object,
	subtitle: PropTypes.object,
	theme: PropTypes.object,
	title: PropTypes.object,
	tooltip: PropTypes.object,
	xaxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	yaxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}).isRequired,`,r=l.charts.subMenu;return e.jsxs(j,{title:l.charts.subMenu.chartsUsage.text,children:[e.jsx(x,{children:e.jsx(b,{children:e.jsx(f,{list:[{title:"Charts",to:"/charts"},{title:"General Usage",to:"/charts/general-usage"}]})})}),e.jsx(m,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsxs(a,{children:[e.jsx(o,{children:e.jsx(p,{icon:"Assignment",children:e.jsx(t,{children:"General Usage"})})}),e.jsx(i,{children:e.jsx(u,{children:h})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(a,{children:[e.jsx(o,{children:e.jsxs(p,{icon:"EditAttributes",children:[e.jsx(t,{children:"series"}),e.jsx(n,{children:"Chart"})]})}),e.jsxs(i,{children:[e.jsx(c,{isPrism:!0,children:P}),e.jsxs(y,{children:["More information,"," ",e.jsx(d,{href:"https://apexcharts.com/docs/series/",target:"_blank",rel:"noreferrer",children:"Apex Charts"}),"."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(a,{children:[e.jsx(o,{children:e.jsxs(p,{icon:"EditAttributes",children:[e.jsx(t,{children:"options"}),e.jsx(n,{children:"Chart"})]})}),e.jsxs(i,{children:[e.jsx(c,{isPrism:!0,children:T}),e.jsxs(y,{children:["More information,"," ",e.jsx(d,{href:"https://apexcharts.com/docs/options/annotations/",target:"_blank",rel:"noreferrer",children:"Apex Charts"}),"."]})]})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(a,{children:[e.jsx(o,{children:e.jsxs(p,{icon:"EditAttributes",children:[e.jsx(t,{children:"type"}),e.jsx(n,{children:"Chart"})]})}),e.jsx(o,{children:e.jsx(c,{isPrism:!0,children:"type: PropTypes.oneOf(['line', 'area', 'bar', 'pie', 'donut', 'scatter', 'bubble', 'heatmap', 'radialBar', 'rangeBar', 'candlestick', 'boxPlot', 'radar', 'polarArea']),"})}),e.jsx(i,{children:e.jsx("div",{className:"row g-3",children:Object.keys(r).map(s=>["chartsUsage","chartsSparkline"].includes(r[s].id)?null:e.jsx("div",{className:"col-xl-3 col-lg-4 col-md-6 col-12",children:e.jsx(g,{color:"info",isLight:!0,icon:r[s].icon,size:"lg",tag:"a",className:"w-100",to:`../${r[s].path}`,children:r[s].text})},r[s].id))})})]})})]})})]})};export{A as default};
