import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'

function AgentList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const [data, setData] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		get_agency(token).then(res=>{
			const show = res.data.filter((x)=>{
				console.log(x.roleId)
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				return x.is_verified == true && x.roleId == 2
				// x.role.name != 'admin'
			})
			setData(show)
		})
	},[])
	

	const columns = React.useMemo(
		() => [
			{
				Header: t('AGENT_FULL_NAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('AGENT_SEX'),
				accessor: 'gender',
			},
			{
				Header: t('AGENT_PHONE'),
				accessor: 'phone1',
			},
			{
				Header: t('AGENT_STATUS'),
				accessor: 'status',
			},
			{
				Header: t('AGENT_REMAIN'),
				accessor: 'remaining_money',
			},
			{
				Header: t('AGENT_TOTAL'),
				accessor: 'total_money',
			},
			{
				Header: t('AGENT_JOINED_DATE'),
				accessor: 'date',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('AGENT')}</h1>
				<Link to={`${url}/new_agent`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        {t('NEW_AGENT')}
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default AgentList