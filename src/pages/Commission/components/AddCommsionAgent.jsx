import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { getAgencyAvailalble, get_agency } from '../../../service/client/agency'


export default function AddCommisionAgent({onAgentAdd}) {
	const { t } = useTranslation()
	const [showModal, setShowModal] = useState(false)
	const [Agent, setAgent] = useState([])
	const [Ammount, setAmmount] = useState(0)
	const [SelectedAgent, setSelectedAgent] = useState()

	useEffect(() => {
		const token = localStorage.getItem('token')
		getAgencyAvailalble(token).then(res => {
			// console.log(res.data)
			if (!res?.data.error){
				const availableAgency = res.data.filter((x)=>{
					return x.roleId != 1
				})
				let agencies = availableAgency.map(x => {
					return {
							'label': x.full_name,
							'value': `${x.id}/${x.full_name}`,
	
					}
				
				})
				console.log(agencies)
				setAgent(agencies)
			}
		}).catch(err =>  console.log(err))
	}, [])

	const handleChange = (e) => {
		const { value } = e.target
		setAmmount(value)
	}

	const onSelect = (choice) => {
		setSelectedAgent(choice.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		let tmp = {
			'agent': SelectedAgent,
			'ammount': Ammount
		}
		onAgentAdd(tmp)
		setShowModal(false)
	}

	return (
		<>
			<button
				className=" col-span-1 py-2 rounded-full hover:text-green-default"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Add
			</button>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative md:w-6/12 my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg border-solid border-black-default shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-starT justify-between p-5 rounded-t">
									<h3 className="text-3xl font-semibold">
										{t('COMMISSION')}
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
											{t('AGENT')}
										</label>
										<Select 
											onChange={onSelect}
											name="agent"
											options={Agent}
										/>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="address">
											{t('AMMOUNT')}
										</label>
										<input onChange={handleChange} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500" type="number"/>
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
											onClick={onSubmit}
										>
											Add
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	)
}

AddCommisionAgent.propTypes = {
	onAgentAdd: PropTypes.func
}
