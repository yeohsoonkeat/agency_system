import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import AddCommisionAgent from '../components/AddCommsionAgent'
import { getAvailablePlan, getPlanById, get_plan } from '../../../service/client/Plan'
getAvailablePlan
import { createCommission } from '../../../service/client/Commision'
import { useHistory } from 'react-router-dom'

function NewCommison() {
	const { t } = useTranslation()
	const [numberLots, setNumberLots] = useState(1)
	const [CommissionPrice, setCommissionPrice] = useState(0)
	const [CommissionTotalPrice, setCommissionTotalPrice] = useState(0)
	const [Agency, setAgency] = useState([])
	const [Plans, setPlans] = useState([])
	const [selectedPlan, setSelectedPlan] = useState()
	const [CommissionTo, setCommissionTo] = useState([])
	const history = useHistory()
	const { register, handleSubmit, control } = useForm()

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

	}, [])

	const AlertMessage = () => {
		return(
			<div role="alert" className="mb-5">
				<div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
					Alert!
				</div>
				<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
					<p>Agent Commission must equal total commission</p>
				</div>
			</div>
		)
	}
	const [error, setError] = useState(false)
	const onSubmit = async(data) => {
		const commission = {
			'real_estate': data.real_estate,
			'plan_id': selectedPlan,
			'num_lots': data.number_lots,
			'total_commission_price': CommissionTotalPrice,
			'agency': CommissionTo.map(x => {
				return { 'agency_id': x.id, 'price': x.ammount }
			})

		}
	
		let totalMoneyCommission = 0
		CommissionTo.filter(x=>{
			totalMoneyCommission += Number(x.ammount)
		})
		console.log(commission)

		if(CommissionTotalPrice == totalMoneyCommission){
			const token = localStorage.getItem('token')
			createCommission(commission,token).then(res=>{
				setError(false)
				history.push('/commission')
				
			}).catch(err =>  console.log(err))		
		}else{
			setError(true)
		}
		
	}
	const numberLotsChange=(event)=>{
		setNumberLots(event.target.value)
		setCommissionTotalPrice(CommissionPrice * event.target.value )
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
		const token = localStorage.getItem('token')
		setSelectedPlan(data.value)
		const plan = await getPlanById(data.value,token)
		setCommissionPrice(plan.data.commission_price )
		// alert(CommissionPrice)
		setCommissionTotalPrice(plan.data.commission_price * numberLots)

	}

	const onDelete = (selected) => {
		setCommissionTo(
			CommissionTo.filter(x => x.id !== selected.id)
		)
	}

	const handleDeleteAgent = (e) => {
		e.preventDefault()
		console.log(CommissionTo)
		CommissionTo.pop()
	}
	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('NEW_COMMISSION')}</h1>
			</div>
			<div className="mt-10" />
			<div >
				<form onSubmit={handleSubmit(onSubmit)}>

					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">{t('COMMISION')}</h3>
								<p className="mt-1 text-sm text-gray-600">
									{t('COMMISSION_DETAIL')}
								</p>
							</div>
						</div>
						{/* <input onChange={event => setTitle(event.target.value)} /> */}
						{/* {numberLots} */}
						<div className="mt-5 md:mt-0 md:col-span-2">
						{error ? <AlertMessage/> : null}
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
												{t('COMMISSION_REAL_ESTATE')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input required {...register('real_estate')} type="text" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="number_lots"  className="block text-sm font-medium text-gray-700">
												{t('COMMISSION_NUMBER_LOTS')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input required {...register('number_lots')} onChange={numberLotsChange} type="number" className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="plan" className="block text-sm font-medium text-gray-700">
												{t('PLAN')}

											</label>
											<Select
												
												onChange={onPlanChange}
												options={Plans}
											/>
											
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
												{t('PLAN_COMMISSION_PRICE')}
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">

												<input disabled {...register('total_commission_price')} type="text" className="focus:ring-indigo-500 focus:border-indigo-500 p-1 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" value={CommissionTotalPrice} />

											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">{t('AGENT')}</h3>
								<p className="mt-1 text-sm text-gray-600">
									{t('AGENT_COMMISSION')}
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<div className="shadow sm:rounded-md ">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="grid grid-cols-3">
										<p className=" col-span-2 font-bold text-lg">{t('AGENT_COMMISSION')}</p>
										<AddCommisionAgent onAgentAdd={onAgentAdd} />
										<div className=" col-span-3">
											<table className="rounded-t-lg m-5 w-11/12 mx-auto bg-gray-200 text-gray-800">
												<tbody className=" text-center">
													<tr className="border-b-2 py-2 border-gray-300">
														<th className=" px-1">{t('NO.')} </th>
														<th className=" px-1">{t('NAME')}</th>
														<th className=" px-1">{t('AMMOUNT')}</th>
													</tr>

													{CommissionTo.length === 0 && <tr className="py-2"><td colSpan={3} className="text-center">{t('NOTHING TO SHOW')}</td></tr>}
													{CommissionTo.length > 0 &&
														CommissionTo.map((x, index) =>{ 
															console.log(CommissionTo)
															return(
															<tr key={'agent_commision' + index} className="py-2">
																<td className=" p-1">{index + 1}</td>
																<td className="p-1">{x.name}</td>
																<td className="p-1">{x.ammount}</td>
																<td className='p-1' ><button onClick={() => onDelete(x)}>delete</button></td>
															</tr>
														)})
													}

												</tbody>

											</table>
										</div>
									</div>

								</div>
							</div>
						</div>
						<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							{t('SAVE')}
						</button>

					</div>
				</form>
			</div>
		</div>
	)
}

export default NewCommison