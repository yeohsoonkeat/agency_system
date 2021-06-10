import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'


function AgentList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const data = React.useMemo(
		() => [
			{
				date: new Date().toDateString(),
				agent: 'Yeoh Soon Keat',
				project_location: 'Phnom Penh',
				land_no: 1,
				commision: '12%',
				commission_available: 'Yes'
			}
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: t('DATE'),
				accessor: 'date', // accessor is the "key" in the data
			},
			{
				Header: t('AGENT'),
				accessor: 'agent',
			},
			{
				Header: t('PROJECT_LOCATION'),
				accessor: 'project_location',
			},
			{
				Header: t('LAND_NO'),
				accessor: 'land_no',
			},
			{
				Header: t('COMMISION'),
				accessor: 'commision',
			},
			{
				Header: t('COMMISSION_AVAILABLE'),
				accessor: 'commission_available',
			}
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('AGENT')}</h1>
				<Link to={`${url}/new_agent`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        New Agent
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default AgentList