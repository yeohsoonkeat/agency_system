import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../../../hooks/useAuth'
import { get_commision } from '../../../service/client/Commision'
import Table from '../components/Table'


function AgentList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const [commission, setCommission] = useState([])

	useEffect(() => {
		const token = localStorage.getItem('token')
		get_commision(token).then(x => {
			setCommission(x.data)
		}).catch(err => {
			console.log(err)
		})
	}, [])


	const columns = React.useMemo(
		() => [
			{
				Header: t('Date'),
				accessor: 'date',
			},
			{
				Header: t('Real Estate'),
				accessor: 'real_estate',
			},
			{
				Header: t('Plan'),
				accessor: 'plan.plan_name',
			},
			{
				Header: t('Plan Location'),
				accessor: 'plan.location',
			},
			{
				Header: t('Number Lots'),
				accessor: 'num_lots',
			},
			{
				Header: t('Agency'),
				accessor: 'agency.full_name',
			},
			{
				Header: t('Total Commission Money'),
				accessor: 'total_agency_commission_money',
			},
			{
				Header: t('Remaining Commission Money'),
				accessor: 'remaining_agency_commission_money',
			},
			{
				accessor: 'commission_id',
			}
			
		],
		[]
	)

	return (
		<div >
			{/* {JSON.stringify(commission)} */}
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('COMMISSION')}</h1>
				<Link to={`${url}/new_commision`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        New Commission
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={commission} columns={columns}/>
		</div>
	)
}

export default AgentList