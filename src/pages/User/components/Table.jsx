import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useSortBy, useAsyncDebounce, usePagination, useTable, useFilters, useGlobalFilter } from 'react-table'
import PropTypes from 'prop-types'
import { InlineIcon } from '@iconify/react'
import chevronRight from '@iconify-icons/mdi/chevron-right'
import chevronLeft from '@iconify-icons/mdi/chevron-left'
import pageLast from '@iconify-icons/mdi/page-last'
import pageFirst from '@iconify-icons/mdi/page-first'
import pencilAddOutline from '@iconify-icons/mdi/pencil-outline'
import arrowDownDropCircleOutline from '@iconify-icons/mdi/arrow-down-drop-circle-outline'
import arrowUpDropCircleOutline from '@iconify-icons/mdi/arrow-up-drop-circle-outline'
import printerOutline from '@iconify-icons/mdi/printer-outline'
import ReactToPrint from 'react-to-print'
import trashOutline from '@iconify-icons/mdi/trash-can-outline'
import Modal from '../../../components/common/Modal'
import { useTranslation } from 'react-i18next'




export default function Table({ data, columns }) {
	let componentRef = React.createRef()
	const { url } = useRouteMatch()
	const {t} = useTranslation()
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

	const count = preGlobalFilteredRows.length
	const [value, setValue] = React.useState(globalFilter)
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined)
	}, 200)

	return (
		<>
			<div className="flex flex-row justify-between">
				<div className="mb-5 mt-10 ">
					<ReactToPrint
						trigger={() => <button className="flex space-x-2 font-bold text-primary-default p-1 px-3 rounded">
							<InlineIcon icon={printerOutline} className="text-xl"/><span>{t('PRINT')}</span>
						</button>}
						content={() => componentRef}
					/>
				</div>
				<div className="mb-5 mt-10">
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
				</div>
			</div>
			<div className="flex flex-col mt-2 "  ref={(el) => (componentRef = el)}>
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow border-b border-gray-200 sm:rounded-lg">
							<table {...getTableProps()} className="min-w-full divide-y divide-gray-200 ">
								<thead className=" bg-primary-default text-sm lg:text-md text-white ">
									{headerGroups.map((headerGroup,index) => (
										<tr key={'row'+ index} {...headerGroup.getHeaderGroupProps()}>
											<th className="px-5">ID</th>
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
									{page.map((row,index) => {
										prepareRow(row)
										return (
											<tr key={'row-' + index} {...row.getRowProps()}>
												<td className="px-6">{index +1}</td>
												{row.cells.map((cell,index) => {
													return (
													
														<td
															{...cell.getCellProps()}
															className="px-6 py-4 whitespace-nowrap max-w-sm "
															key={'cell-' + index}
														>
															<div className="text-sm text-gray-900 overflow-x-hidden">
																{cell.render('Cell')}
															</div>
														</td>
														
													)
												})}
												<td>
													<button className="hover:text-green-default mr-2">
														<Link to={{pathname: `${url}/edit`, state: {data: row.original}}}>
															<InlineIcon icon={pencilAddOutline} />
														</Link>
													</button>
													<Modal id={row.values.commission_id} page='user' />
												</td>

											</tr>
										)
									})}
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
	data: PropTypes.array,
	columns: PropTypes.array
}