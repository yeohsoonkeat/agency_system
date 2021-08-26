import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'



function InterestReport() {
	const { t } = useTranslation()
	const [agentCommissionReport, setAgentCommissionReport] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		get_agency(token).then(res=>{
			const show = res.data.filter((x)=>{
				x['commision_withdrawn'] = x.total_money - x.remaining_money
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				return x.is_verified == true && x.roleId != 1
				// x.role.name != 'admin'
			})
			setAgentCommissionReport(show)
		})
	},[])
	const data = React.useMemo(
		() => [
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			// {
			// 	Header: t('ID'),
			// 	accessor:'id'
			// },
			// {
			// 	Header: t('Group'),
			// 	accessor:'group'
			// },
			{
				Header: t('FULL NAME'),
				accessor:'full_name'
			},
			{
				Header: t('SEX'),
				accessor:'gender'
			},
			{
				Header: t('PHONE NUMBER'),
				accessor:'phone1'
			},
			{
				Header: t('WITHDRAW MONEY'),
				accessor:'commision_withdrawn'
			},
			{
				Header: t('REMAINING MONEY'),
				accessor:'remaining_money'
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">Commission Reports</h1>
			</div>
			<div className="mt-4"/>
			<Table data={agentCommissionReport} columns={columns} />
			
		</div>
	)
}

export default InterestReport