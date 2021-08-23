import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { getAgencyAvailalble, get_agency } from '../../../service/client/agency'
import tickoutline from '@iconify-icons/mdi/tick-outline'
import { InlineIcon } from '@iconify/react'
import { get_role } from '../../../service/client/Role'



export default function EditUser({onAgentAdd}) {
	const { t } = useTranslation()
	const [showModal, setShowModal] = useState(false)
	const [Agent, setAgent] = useState([])
	const [Ammount, setAmmount] = useState(0)
	const [SelectedAgent, setSelectedAgent] = useState()
    const [Role,setRole] = useState([])
    const [RoleID,setRoleID] = useState([])
    const [Leader,setLeader] = useState([])
	const [LeaderName,setLeaderName] = useState([])

	useEffect(() => {
		const token = localStorage.getItem('token')
		getAgencyAvailalble(token).then(res => {
			if (!res?.data.error){
				let agency = res.data.map(x => {
					return {
						'label': x.full_name,
						'value': x.full_name
					}
				})
				setLeader(agency)
			}
		}).catch(err =>  console.log(err))
		get_role(token).then(res => {
			if (!res?.data.error){
				let role = res.data.map(x => {
					return {
						'label': x.name,
						'value': x.id
					}
				})
				setRole(role)
			}
		}).catch(err =>  console.log(err))
        
	}, [])

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
    const onRoleChange = async (data) => {
		setRoleID(data.value)	
	}
    const onLeaderChange = async (data) => {
		console.log(data.value)
		setLeaderName(data.value)
	}

	return (
		<>
			<button
				className=" col-span-1 py-2 rounded-full hover:text-green-default"
				type="button"
				onClick={() => setShowModal(true)}
			>
				<InlineIcon icon={tickoutline} />
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
										{t('Select Role')}
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
											{t('LEADER')}
										</label>
										<Select 
											onChange={onLeaderChange}
											options={Leader}
										/>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="address">
											{t('LEADER')}
										</label>
										<input type="checkbox" value="true" />
									</div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('ROLE')}</label>
											<Select
												onChange={onRoleChange}											
												options={Role}		
											/>
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
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={onSubmit}
										>
											Approve
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

EditUser.propTypes = {
	onAgentAdd: PropTypes.func
}