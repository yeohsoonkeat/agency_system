import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import { getCommissionById } from '../../../service/client/Commision'
import { useLocation, useParams } from 'react-router'
import WithdrawCash from '../components/WithdrawCash'
import { agentWithdrawHistory } from '../../../service/client/WithdrawCash'
import { Link, useHistory } from 'react-router-dom'


function CashOut(props) {
    const location = useLocation()
    // console.log(location.state.hello)
	const { t } = useTranslation()
	const [Agency, setAgency] = useState([])
	const [agentWithDrawHistory, setAgentWithDrawHistory] = useState([])
	const [Plans, setPlans] = useState([])
	const [CommissionTo, setCommissionTo] = useState([])
	const { register, handleSubmit, control } = useForm()
	const {id, agencyId} = useParams()

	useEffect(() => {
		let data = {}
		data['commission_id'] = id
		data['agency_id'] = agencyId
		const token = localStorage.getItem('token')
		agentWithdrawHistory(token,data).then(res => {
			if (!res?.data.error){
				console.log(res.data)
				res.data.filter((x) =>{
					x.date = x.date.slice(0,10)
				})
				setAgentWithDrawHistory(res.data)
			}
		}).catch(err =>  console.log(err))
		setAgency([{
			'label': 'Agency',
			'value': 'agency_id'
		}])
		getCommissionById(token, id, agencyId).then(x => {
			setCommissionTo(x.data)
			
		}).catch(err => {
			console.log(err)
		})

	}, [])


	const onAgentAdd = (data) => {
		let agent = data.agent.split('/')
		setCommissionTo([...CommissionTo, {
			'id': agent[0],
			'name': agent[1],
			'ammount': data.ammount
		}])
	}

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">Cash Out</h1>
			</div>
			<div className="mt-10" />
			<div>
		
					<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Commission</h3>
								<p className="mt-1 text-sm text-gray-600">
									Commission Detail
								</p>
							</div>
						</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3">
										<p className=" col-span-2 font-bold text-lg">Agent commisions</p>
										<WithdrawCash onAgentAdd={onAgentAdd} Commission ={CommissionTo[0]}/>
										<div className=" col-span-3">
											<table className="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-200 text-gray-800">
												<tbody className=" text-center">
													<tr className="border-b-2 py-2 border-gray-300">
														<th className=" px-1">No. </th>
														<th className=" px-1">Name</th>
														<th className=" px-1">Ammount</th>
													</tr>

													{CommissionTo.length === 0 && <tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr>}
													{CommissionTo.length > 0 &&
														CommissionTo.map((x, index) => (
															
															<tr key={'agent_commision' + index} className="py-2">
																<td className=" p-1">{index + 1}</td>
																<td className="p-1">{x.agency.full_name}</td>
																<td className="p-1">{x.remaining_agency_commission_money}</td>
															</tr>
														))
													}

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">History </h3>
								<p className="mt-1 text-sm text-gray-600">
									History Detail
								</p>
							</div>
						</div>
						</div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3">
										<p className=" col-span-2 font-bold text-lg">Cashout History</p>
										<div className=" col-span-3">
											<table className="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-200 text-gray-800">
												<tbody className=" text-center">
													<tr className="border-b-2 py-2 border-gray-300">
														<th className=" px-1">No. </th>
														<th className=" px-1">Name</th>
														<th className=" px-1">Ammount</th>
														<th className=" px-1">Date</th>
													</tr>
													{/* <tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr> */}

													{agentWithDrawHistory.length === 0 && <tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr>}
													{agentWithDrawHistory.length > 0 &&
														agentWithDrawHistory.map((x, index) => (
															<tr key={'history_cashout' + index} className="py-2">
																<td className=" p-1">{index + 1}</td>
																<td className="p-1">{x.agency.full_name}</td>
																<td className="p-1">{x.cash_out_amount}</td>
																<td className="p-1">{x.date}</td>
															</tr>
														))
													}

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
}

export default CashOut