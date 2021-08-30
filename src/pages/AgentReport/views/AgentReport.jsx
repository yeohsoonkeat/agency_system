import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'



function AgentReport() {
	const { t } = useTranslation()
	const [agentReport, setAgentReport] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		get_agency(token).then(res=>{
			const show = res.data.filter((x)=>{
				x['commision_withdrawn'] = x.total_money - x.remaining_money
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				console.log(x)
				return x.is_verified == true && x.roleId != 1
				// x.role.name != 'admin'
			})
			setAgentReport(show)
		})
	},[])

	const columns = React.useMemo(
		() => [
			{
				HEADER: t('AGENT_ID'),
				accessor: 'id'
			},
			{
				Header: t('AGENT_FULL_NAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('AGENT_SEX'),
				accessor: 'gender',
			},
			// {
			// 	Header: t('Leader'),
			// 	accessor: 'leader',
			// },
			{
				Header: t('AGENT_PHONE'),
				accessor: 'phone1',
			},
			{
				Header: t('AGENT_TOTAL_WITHDRAWN'),
				accessor: 'commision_withdrawn',
			},
			{
				Header: t('AGENT_TOTAL_COMMISSION'),
				accessor: 'total_money',
			},
			{
				Header: t('AGENT_REMAINING'),
				accessor: 'remaining_money',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('AGENT_REPORT')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={agentReport} columns={columns} />
			
		</div>
	)
}

export default AgentReport