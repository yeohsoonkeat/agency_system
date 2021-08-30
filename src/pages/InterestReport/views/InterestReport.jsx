import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'
import { allAgentWithdrawHistory } from '../../../service/client/WithdrawCash'



function InterestReport() {
	const { t } = useTranslation()
	const [agentCommissionReport, setAgentCommissionReport] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		allAgentWithdrawHistory(token).then(res=>{
			const show = res.data.map((x)=>{
				// x['commision_withdrawn'] = x.total_money - x.remaining_money
				// x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				// return x.is_verified == true && x.roleId != 1
				x.date = x.date.slice(0,10)
				// x.role.name != 'admin'
			})
			console.log(show)
			setAgentCommissionReport(res.data)
		})
	},[])

	const columns = React.useMemo(
		() => [
			{
				Header: t('INTEREST_ID'),
				accessor:'id'
			},
			// {
			// 	Header: t('Group'),
			// 	accessor:'group'
			// },
			{
				Header: t('INTEREST_FULL_NAME'),
				accessor:'agency.full_name'
			},
			{
				Header: t('INTEREST_REAL_ESTATE'),
				accessor:'commission.real_estate'
			},
			// {
			// 	Header: t('PHONE NUMBER'),
			// 	accessor:'phone1'
			// },
			{
				Header: t('INTEREST_TOTAL_MONEY'),
				accessor:'cash_out_amount'
			},
			{
				Header: t('INTEREST_DATE'),
				accessor:'date'
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('INTEREST')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={agentCommissionReport} columns={columns} />
			
		</div>
	)
}

export default InterestReport