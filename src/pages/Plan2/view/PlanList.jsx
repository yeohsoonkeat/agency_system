import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'
import { get_plan } from '../../../service/client/Plan'

function PlanList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const [data, setData] = useState([])
	
	useEffect(() => {
		const token = localStorage.getItem('token')
		get_plan(token).then(res => {
			if (!res?.data.error){
				res.data.filter((x)=>{
					x.is_commission? x['status'] = 'True': x['status'] = 'False'
					// return x.is_verified == true
				})
				
				setData(res.data)
			}
		}).catch(err =>  console.log(err))
	}, [])

	const columns = React.useMemo(
		() => [
			{
				Header: t('PLAN_ID'),
				accessor: 'id',
			},
			{
				Header: t('PLAN_NAME'),
				accessor: 'plan_name', // accessor is the "key" in the data
			},
			
			{
				Header: t('PLAN_COMMISSION_PRICE'),
				accessor: 'commission_price',
			},
			{
				Header: t('PLAN_LOCATION'),
				accessor: 'location',
			},
			{
				Header: t('IS_COMMISSION'),
				accessor: 'status',
			},
			{
				Header: t('PLAN_CREATOR'),
				accessor: 'creator_plan',
			},
			{
				Header: t('PLAN_DATE'),
				accessor: 'date',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('Plan')}</h1>
				<Link to={`${url}/new_agent`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        New Plan
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default PlanList