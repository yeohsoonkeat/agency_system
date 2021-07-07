import React from 'react'
import Table from '../components/table'
import Pagination from '../components/pagination'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'


function PlanList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const agents = [
		{
			plan_name: 'Koh kimochi',
			location: 'Steung Mean Chei',
			price: '$12345',
			commision: '$240',
			created_at: new Date().toDateString()
		}
	]
	return (
		<div >
		
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('PLAN')}</h1>
				<Link to={`${url}/new_plan`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
						New Plan
					</div>
				</Link>
			</div>
			<div className="py-1 mt-4">
				<div className="my-2 flex sm:flex-row flex-col">
					<div className="block relative">
						<span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
							<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
								<path
									d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
								</path>
							</svg>
						</span>
						<input placeholder="Search"
							className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
					</div>
				</div>
			</div>
			<Table />
		</div>
	)
}

export default PlanList