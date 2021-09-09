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
	const user = JSON.parse(localStorage.getItem('user'))
	useEffect(() => {
		const token = localStorage.getItem('token')
		get_commision(token).then(x => {
			setCommission(x.data)
		}).catch(err => {
			console.log(err)
		})
	}, [])
	const handleDelete = (id) => {
		setCommission(
			commission.filter(x => x.commission_id != id)
		)
		console.log(id)
	}

	const columns = React.useMemo(
		() => [
			{
				Header: t('COMMISSION_DATE'),
				accessor: 'date',
			},
			{
				Header: t('COMMISSION_REAL_ESTATE'),
				accessor: 'real_estate',
			},
			{
				Header: t('COMMISSION_PLAN'),
				accessor: 'plan.plan_name',
			},
			{
				Header: t('COMMISSION_PLAN_LOCATION'),
				accessor: 'plan.location',
			},
			{
				Header: t('COMMISSION_AGENCY'),
				accessor: 'agency.full_name',
			},
			{
				Header: t('COMMISSION_TOTAL_MONEY'),
				accessor: 'total_agency_commission_money',
			},
			{
				Header: t('COMMISSION_REMAIN_MONEY'),
				accessor: 'remaining_agency_commission_money',
			},
			{
				accessor: 'commission_id',
			},
			{
				accessor: 'agencyId'
			}
			
		],
		[]
	)

	return (
		<div >
			{/* {JSON.stringify(commission)} */}
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('COMMISION')}</h1>
				{
					user.roleId == 2 ? null :(
						<Link to={`${url}/new_commision`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
							<div>
								{t('NEW_COMMISSION')}
							</div>
						</Link>
					)
				}
				
			</div>
			<div className="mt-4"/>
			<Table data={commission} columns={columns} handleDelete={handleDelete}/>
		</div>
	)
}

export default AgentList