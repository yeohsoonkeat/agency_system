import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { withDrawCash } from '../../../service/client/WithdrawCash'
import { Link, useHistory } from 'react-router-dom'

export default function WithdrawCash({onAgentAdd,Commission}) {
	const { t } = useTranslation()
	const [showModal, setShowModal] = useState(false)
	const [Ammount, setAmmount] = useState(0)
	const today = Date.now()
	const now = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(today)
	const {id, agencyId} = useParams() 
	const {register,handleSubmit} = useForm()
	const history = useHistory()

	useEffect(() => {
	

	}, [])

	const handleChange = (e) => {
		const { value } = e.target
		setAmmount(value)
		
	}

	const onSubmit = (data) => {
		data['date']= now
		data['agency_id'] = agencyId
		data['commission_id'] = id
		if(Commission.remaining_agency_commission_money <= 0) {
			alert('You can not withdrawn money!')
			return
		}
		if(Ammount <= 0){
			alert('Amount Money must be greater than 0 !')
			return
		}
		const token = localStorage.getItem('token')
		withDrawCash(token,data).then(res => {
			console.log(res.data.message)
		}).catch(err =>  console.log(err))
		setShowModal(false)
		history.push('/commission')
	}

	return (
		<>
			<button
				className=" col-span-1 py-2 rounded-full hover:text-green-default"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Withdraw
			</button>
			{showModal ? (
				<>
					<form onSubmit={handleSubmit(onSubmit)} >
						<div
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						>	
							<div className="relative md:w-6/12 my-6 mx-auto max-w-3xl">
								{/*content*/}
								<div className="border-0 rounded-lg border-solid border-black-default shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									{/*header*/}
									<div className="flex items-starT justify-between p-5 rounded-t">
										<h3 className="text-3xl font-semibold">
											{t('CASH OUT')}
										</h3>
										<button
											className="p-1 ml-auto bg-transparent border-0 loat-right text-3xl leading-none font-semibold outline-none focus:outline-none"
											onClick={() => setShowModal(false)}
										>
											<span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
												×
											</span>
										</button>
									</div>
									<div>
										<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="address">
												{t('Date')}
											</label>
											<input disabled value={now} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" />
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="address">
												{t('AMMOUNT')}
											</label>
											<input value={Commission.remaining_agency_commission_money} disabled className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" type="number" />
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="address">
												{t('Withdraw Amount')}
											</label>
											<input required {...register('cash_out_amount')} onChange={handleChange} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" type="number" />
										</div>
										<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
											<button
												className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="reset"
												onClick={() => setShowModal(false)}
											>
												Close
											</button>
											<button
												className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
												type="submit"
											>
												Add
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</form>
				</>
			) : null}
		</>
	)
}

WithdrawCash.propTypes = {
	onAgentAdd: PropTypes.func,
	Commission: PropTypes.any
}
