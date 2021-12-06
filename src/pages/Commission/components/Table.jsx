import React,{useState, useEffect} from 'react'
import { useSortBy, useAsyncDebounce, usePagination, useTable, useFilters, useGlobalFilter } from 'react-table'
import PropTypes from 'prop-types'
import { InlineIcon } from '@iconify/react'
import { Icon } from '@iconify/react'
import chevronRight from '@iconify-icons/mdi/chevron-right'
import chevronLeft from '@iconify-icons/mdi/chevron-left'
import pageLast from '@iconify-icons/mdi/page-last'
import pageFirst from '@iconify-icons/mdi/page-first'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import pencilOutline from '@iconify-icons/mdi/pencil-outline'
import cash from '@iconify-icons/mdi/cash'
import arrowDownDropCircleOutline from '@iconify-icons/mdi/arrow-down-drop-circle-outline'
import arrowUpDropCircleOutline from '@iconify-icons/mdi/arrow-up-drop-circle-outline'
import { Link, useRouteMatch } from 'react-router-dom'
import Modal from '../../../components/common/Modal'
import { useTranslation } from 'react-i18next'
import trashOutline from '@iconify-icons/mdi/trash-can-outline'
import { DateRange } from 'react-date-range'
import date from 'date-and-time'
import moment from 'moment'


export default function Table({ datas, columns,handleDelete }) {
	const{t} =useTranslation()
	const [dateState, setDateState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key:'selection'
		}
	])
	const [startDate, setStartDate]  = useState()
	const [endDate, setendDate] = useState()
	const data = datas

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		preGlobalFilteredRows,
		setGlobalFilter,
		state: { pageIndex, pageSize, globalFilter },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0 },
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
	)
	const handleSelectedDelete = (id) => {
		handleDelete(id)
	}

	const count = preGlobalFilteredRows.length
	const { url } = useRouteMatch()
	const [value, setValue] = React.useState(globalFilter)
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)

	const selectionRange = {
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection'
	}
	var [dateRange, setDateRange] = useState([])
	const [isRange,setIsRange] =useState(false)
	function getDates(startDate, stopDates) {
		var dateArray = []
		var currentDate = moment(startDate)
		var stopDate = moment(stopDates)
		while (currentDate <= stopDate) {
			dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
			currentDate = moment(currentDate).add(1, 'days')
		}
		setDateRange(dateRange = dateArray)
		setIsRange(true)
		console.log(dateRange)
		return dateArray
	}
	

	const user = JSON.parse(localStorage.getItem('user'))
	return (
		<>
			<div className="mt-10">
                                {t('SEARCH')}:{' '}
				<input
					value={value || ''}
					onChange={e => {
						setValue(e.target.value)
						onChange(e.target.value)
					}}
					placeholder={`${count} ${t('RECORD')}...`}
					className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
				/>
				{/* <h1 className="inline-block mx-10">Date:</h1>
				<input type="date" onChange={e => {setValue(e.target.value) 
				onChange(e.target.value)}}></input> */}
				<h1 className="inline-block mx-10">From:</h1>

				<input type="date" onChange={e => {setStartDate(e.target.value) 
				console.log(startDate)
				}}></input>
				<h1 className="inline-block mx-10">To:</h1>

				<input type="date" onChange={e => {setendDate(e.target.value) 
				console.log(endDate)
				}}></input>

				<button onClick={() => getDates(startDate,endDate)}>Search</button>
				
			</div>
			
			<div className="flex flex-col mt-5 bg-white">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table {...getTableProps()} className="min-w-full divide-y divide-gray-200 ">
								<thead className=" bg-primary-default text-sm lg:text-md p-3 text-white">
									{headerGroups.map((headerGroup,index) => (
										<tr key={'row'+ index} {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column,index) => (
												<th
													{...column.getHeaderProps(column.getSortByToggleProps())}
													className="px-6 py-3 text-left tracking-wider "
													key={'column' + index}
												>
													{column.render('Header')}{' '}
													<span className="inline-block">
														{column.isSorted
															? column.isSortedDesc
																? <InlineIcon icon={arrowDownDropCircleOutline} />
																: <InlineIcon icon={arrowUpDropCircleOutline} />
															: ''}
													</span>
												</th>
											))}
											<th
												className="px-6 py-3 text-left tracking-wider"
											>
												
											</th>
										</tr>
									))}
								</thead>
								
								<tbody {...getTableBodyProps()}>
									{
									isRange ? 
									page
									.filter(x => dateRange.includes(x.values.date.split(' ')[0]))
									.map((row,index) => {
										prepareRow(row)
										console.log(page.filter(x => dateRange.includes(x.values.date.split(' ')[0])))
										console.log(row.original)
										return (
											<tr key={'row-' + index} {...row.getRowProps()} className={row.original.remaining_agency_commission_money == 0 ? 'text-red-500' : ''}>
												{row.cells.map((cell,index) => {
													if (cell.column.id != 'commission_id' && cell.column.id != 'agencyId')
													
													return (
														<>
														
															<td
																	{...cell.getCellProps()}
																	className="px-6 py-4 whitespace-nowrap "
																	key={'cell' + index}
																>									
																	<div className="text-sm flex space-x-3">
																		<h6>{cell.value}</h6>
																	</div>													
																</td>
															
														
														</>
														
														
													)
													
												})}
												{
													user.roleId == 2 ? null : (
														<td className="px-6 py-4 whitespace-nowrap space-x-3 text-right text-xl font-medium">
															<button  className="hover:text-green-default">
																<Link to={{
																	pathname:`${url}/${row.values.commission_id}/cashout/${row.values.agencyId}`,
																	state: {
																		hello: 'ow.cells[0]'
																	}
																}}>
																	<InlineIcon icon={cash} />
																</Link>
															</button>
														
															{row.original.remaining_agency_commission_money == row.original.total_agency_commission_money ?(
																<Modal id={row.values.commission_id} page='commission' handleSelectedDelete={handleSelectedDelete} />	
															):(
																<button disabled className=" text-gray-400">
																	{/*  onClick={() => setShowModal(true)}> */}
																	<InlineIcon icon={trashCanOutline} />
																</button>
															)
															}
															
														</td>
													)
												}
												
											</tr>
										)
									}): 
									page
									.map((row,index) => {
										prepareRow(row)
										return (
											<tr key={'row-' + index} {...row.getRowProps()} className={row.original.remaining_agency_commission_money == 0 ? 'text-red-500' : ''}>
												{row.cells.map((cell,index) => {
													if (cell.column.id != 'commission_id' && cell.column.id != 'agencyId')
													
													return (
														<>
														
															<td
																	{...cell.getCellProps()}
																	className="px-6 py-4 whitespace-nowrap "
																	key={'cell' + index}
																>									
																	<div className="text-sm flex space-x-3">
																		<h6>{cell.value}</h6>
																	</div>													
																</td>
															
														
														</>
														
														
													)
													
												})}
												{
													user.roleId == 2 ? null : (
														<td className="px-6 py-4 whitespace-nowrap space-x-3 text-right text-xl font-medium">
															<button  className="hover:text-green-default">
																<Link to={{
																	pathname:`${url}/${row.values.commission_id}/cashout/${row.values.agencyId}`,
																	state: {
																		hello: 'ow.cells[0]'
																	}
																}}>
																	<InlineIcon icon={cash} />
																</Link>
															</button>
														
															{row.original.remaining_agency_commission_money == row.original.total_agency_commission_money ?(
																<Modal id={row.values.commission_id} page='commission' handleSelectedDelete={handleSelectedDelete} />	
															):(
																<button disabled className=" text-gray-400">
																	{/*  onClick={() => setShowModal(true)}> */}
																	<InlineIcon icon={trashCanOutline} />
																</button>
															)
															}
															
														</td>
													)
												}
												
											</tr>
										)
									})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 flex flex-wrap space-y-2 space-x-2  mt-1">
				<div className="space-x-2 text-bold text-xl flex-1 flex">
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={pageFirst} />
					</button>
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={chevronLeft} />
					</button>
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={chevronRight} />

					</button>
					<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
						<span className="sr-only">Next</span>
						<InlineIcon icon={pageLast} />

					</button>
				</div>
				
				<div className="flex-1">
				{t('PAGE')} {' '}
					<strong>
						<input
							className=" w-1/5 text-center border"
							type="number"
							defaultValue={pageIndex + 1}
							onChange={e => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0
								gotoPage(page)
							}}
						/> of {pageOptions.length}
					</strong>
					
				</div>
				<select
					value={pageSize}
					onChange={e => {
						setPageSize(Number(e.target.value))
					}}
					className=" flex-1 p-1"
				>
					{[10, 20, 30, 40, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
							{t('SHOW')} {pageSize}
						</option>
					))}
				</select>
			</div>

		</>
	)
}
Table.propTypes = {
	datas: PropTypes.array,
	columns: PropTypes.array,
	handleDelete: PropTypes.func

}