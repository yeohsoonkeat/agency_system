/* eslint-disable react/jsx-key */
import React from 'react'
import { useSortBy, useAsyncDebounce, usePagination, useTable, useFilters, useGlobalFilter } from 'react-table'
import PropTypes from 'prop-types'



export default function Table({ data, columns}) {
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
			<div className="flex flex-col mt-10 ">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<div className="mb-2">
                                Search:{' '}
								<input
									value={value || ''}
									onChange={e => {
										setValue(e.target.value)
										onChange(e.target.value)
									}}
									placeholder={`${count} records...`}
									className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
								/>
							</div>
							<table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
								<thead className="text-sm lg:text-md bg-primary-default font-medium text-white">
									{headerGroups.map(headerGroup => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map(column => (
												<th
													{...column.getHeaderProps(column.getSortByToggleProps())}
													className="px-6 py-3 text-left tracking-wider"
													key={column}
												>
													{column.render('Header')}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{page.map(row => {
										prepareRow(row)
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map(cell => {
													return (
														<td
															{...cell.getCellProps()}
															className="px-6 py-4 whitespace-nowrap"
															key={cell}
														>
															<div className="text-sm text-gray-900">
																{cell.render('Cell')}
															</div>
														</td>
													)
												})}
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="pagination">
				<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					{'<<'}
				</button>{' '}
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					{'<'}
				</button>{' '}
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{'>'}
				</button>{' '}
				<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
					{'>>'}
				</button>{' '}
				<span>
                    Page{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{' '}
				</span>
				<span>
                    | Go to page:{' '}
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={e => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0
							gotoPage(page)
						}}
						style={{ width: '100px' }}
					/>
				</span>{' '}
				<select
					value={pageSize}
					onChange={e => {
						setPageSize(Number(e.target.value))
					}}
				>
					{[10, 20, 30, 40, 50].map(pageSize => (
						<option key={pageSize} value={pageSize}>
                            Show {pageSize}
						</option>
					))}
				</select>
			</div>

		</>
	)
}
Table.propTypes = {
	data: PropTypes.obj,
	columns: PropTypes.obj
}