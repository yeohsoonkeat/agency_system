import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import AddCommisionAgent from '../components/AddCommsionAgent'
import { getPlanById, get_plan } from '../../../service/client/Plan'
import { getCommissionById, get_commission_by_id } from '../../../service/client/Commision'
import { get_commision } from '../../../service/client/Commision'
import { useLocation, useParams } from 'react-router'

function CashOut(props) {
    const location = useLocation()
    console.log(location.state.hello)
	const { t } = useTranslation()
	const [Agency, setAgency] = useState([])
	const [Plans, setPlans] = useState([])
	const [CommissionTo, setCommissionTo] = useState([])
	const [CommissionPrice, setCommissionPrice] = useState([])
	const { register, handleSubmit, control } = useForm()
	const {id} = useParams()

	useEffect(() => {
		const token = localStorage.getItem('token')
		get_plan(token).then(res => {
			if (!res?.data.error){
				let k = res.data.map(x => {
					return {
						'label': x.plan_name,
						'value': x.id
					}
				})
				setPlans(k)
			}
		}).catch(err =>  console.log(err))
		setAgency([{
			'label': 'Agency',
			'value': 'agency_id'
		}])
		getCommissionById(token, id).then(x => {
			console.log(x.data)
			// console
			setCommissionTo(x.data)
			
		}).catch(err => {
			console.log(err)
		})

	}, [])

	const onSubmit = (data) => {
		console.log(data)
		const k = {
			'real_estate': data.real_estate,
			'plan_id': data.plan.value,
			'num_lots': data.number_lots,
			'total_commission_price': 1000,
			'agency': CommissionTo.map(x => {
				return { 'id': x.id, 'price': x.ammount }
			})

		}
		// alert(JSON.stringify(k))
		console.log(k)
	}

	const onAgentAdd = (data) => {
		let agent = data.agent.split('/')
		setCommissionTo([...CommissionTo, {
			'id': agent[0],
			'name': agent[1],
			'ammount': data.ammount
		}])
	}
	const onPlanChange = async (data) => {
		// alert(data.value)
		const token = localStorage.getItem('token')
		const plan = await getPlanById(data.value,token)
		setCommissionPrice(plan.data.commission_price)		
	}

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">Cash Out</h1>
			</div>
			<div className="mt-10" />
			<div>
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3">
										<p className=" col-span-2 font-bold text-lg">Agent commisions</p>
										<AddCommisionAgent onAgentAdd={onAgentAdd} />
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
													</tr>
													<tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr>

													{/* {CommissionTo.length === 0 && <tr className="py-2"><td colSpan={3} className="text-center">Nothing to show</td></tr>}
													{CommissionTo.length > 0 &&
														CommissionTo.map((x, index) => (
															<tr key={'agent_commision' + index} className="py-2">
																<td className=" p-1">{index + 1}</td>
																<td className="p-1">{x.agency.full_name}</td>
																<td className="p-1">{x.remaining_agency_commission_money}</td>
															</tr>
														))
													} */}

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