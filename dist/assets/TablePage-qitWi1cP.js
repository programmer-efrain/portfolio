import{r as d,j as e,P,bp as a,S as j,Q as p,a as f,C as m,h as S,i as k,k as L,e as h,bq as F,I as N}from"./index-CH8wS3hI.js";import{B as y}from"./Breadcrumb-BaAopMTO.js";import{u as D,d as v,a as A}from"./useSortableData-_kbwLrZW.js";import{u as B}from"./useSelectTable-CnNW55yU.js";import{C as T}from"./Checks-3cSzJQyw.js";import"./Pagination-Bzwvwz0Q.js";import"./Select-CWskhceH.js";const J=()=>{const u=`
const Foo = () => {
	const data = [
		{id: 1, firstName: 'John', lastName: 'Doe' },
		{id: 2, firstName: 'Ella', lastName: 'Oliver' },
		{id: 3, firstName: 'Sam', lastName: 'Roberts' },
		{id: 4, firstName: 'Grace', lastName: 'Buckland' },
		{id: 5, firstName: 'Jane', lastName: 'Lee' },
		{id: 6, firstName: 'Chloe', lastName: 'Walker' },
		{id: 7, firstName: 'Ryan', lastName: 'McGrath' },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);

	const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);
	/**
	  *
	  * items: Array
	  * requestSort: Function
	  * getClassNamesFor: Function
	  *
	  */
	const onCurrentPageData = dataPagination(items, currentPage, perPage);
	/**
	  *
	  * onCurrentPageData: Array
	  *
	  */
	const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageData);
	/**
	  *
	  * selectTable: Object
	  * SelectAllCheck: Node
	  *
	  */

	return (
		<Card>
			<CardBody>
				<table>
					<thead className='table table-modern'>
						<tr>
							<th>{SelectAllCheck}</th>
							<th onClick={() => requestSort('firstName')}>
								First Name
								<Icon
									size='lg'
									className={getClassNamesFor('firstName')}
									icon='FilterList'
								/>
							</th>
							<th onClick={() => requestSort('lastName')}>
								Last Name
								<Icon
									size='lg'
									className={getClassNamesFor('lastName')}
									icon='FilterList'
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{onCurrentPageData.map((item) => (
							<tr key={item.id.toString()}>
								<td>
									<Checks
										id={item.id.toString()}
										name='selectedList'
										value={item.id}
										onChange={selectTable.handleChange}
										checked={selectTable.values.selectedList.includes( item.id.toString() )}
									/>
								</td>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardBody>
			<PaginationButtons
				data={items}
				label='items'
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
		</Card>
	);
}`,g=[{id:1,firstName:"John",lastName:"Doe"},{id:2,firstName:"Ella",lastName:"Oliver"},{id:3,firstName:"Sam",lastName:"Roberts"},{id:4,firstName:"Grace",lastName:"Buckland"},{id:5,firstName:"Jane",lastName:"Lee"},{id:6,firstName:"Chloe",lastName:"Walker"},{id:7,firstName:"Ryan",lastName:"McGrath"}],[s,C]=d.useState(1),[r,x]=d.useState(3),{items:l,requestSort:i,getClassNamesFor:n}=D(g),c=v(l,s,r),{selectTable:o,SelectAllCheck:b}=B(c);return e.jsxs(P,{title:a.components.subMenu.table.text,children:[e.jsx(j,{children:e.jsx(p,{children:e.jsx(y,{list:[{title:a.components.text,to:`/${a.components.path}`},{title:a.components.subMenu.table.text,to:`/${a.components.subMenu.table.path}`}]})})}),e.jsx(f,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsxs(m,{children:[e.jsx(S,{children:e.jsx(k,{icon:"Assignment",children:e.jsx(L,{children:"General Usage"})})}),e.jsx(h,{children:e.jsx(F,{children:u})})]})}),e.jsx("div",{className:"col-12",children:e.jsxs(m,{children:[e.jsx(h,{children:e.jsxs("table",{className:"table table-modern",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:50},children:b}),e.jsxs("th",{onClick:()=>i("firstName"),className:"cursor-pointer text-decoration-underline",children:["First Name"," ",e.jsx(N,{size:"lg",className:n("firstName"),icon:"FilterList"})]}),e.jsxs("th",{onClick:()=>i("lastName"),className:"cursor-pointer text-decoration-underline",children:["Last Name"," ",e.jsx(N,{size:"lg",className:n("lastName"),icon:"FilterList"})]})]})}),e.jsx("tbody",{children:c.map(t=>e.jsxs("tr",{children:[e.jsx("td",{"aria-label":"Check",children:e.jsx(T,{id:t.id.toString(),name:"selectedList",value:t.id,onChange:o.handleChange,checked:o.values.selectedList.includes(t.id.toString())})}),e.jsx("td",{children:t.firstName}),e.jsx("td",{children:t.lastName})]},t.id))})]})}),e.jsx(A,{data:l,label:"items",setCurrentPage:C,currentPage:s,perPage:r,setPerPage:x})]})})]})})]})};export{J as default};
