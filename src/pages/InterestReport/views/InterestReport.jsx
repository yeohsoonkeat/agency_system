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
			res.data.filter(x=>{
				x.realestate_plan = `${x.commission.real_estate}/ ${x.plan.plan_name}`
			})
			console.log(res.data)
			setAgentCommissionReport(res.data)
		})
	},[])

	const columns = React.useMemo(
		() => [
			{
				Header: t('INTEREST_ID'),
				accessor:'id'
			},
			{
				Header: t('INTEREST_FULL_NAME'),
				accessor:'agency.full_name'
			},
			{
				Header: t('INTEREST_REAL_ESTATE/INTEREST_PLAN'),
				accessor:'realestate_plan'
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
				Header: t('INTEREST_CREATOR'),
				accessor:'creator'
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