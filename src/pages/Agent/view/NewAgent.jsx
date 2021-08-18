import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { create_agency, getAgencyAvailalble } from '../../../service/client/agency'
import { useHistory } from 'react-router-dom'
import { get_role } from '../../../service/client/Role'
function NewAgent() {
	const { t } = useTranslation()
	const {register,handleSubmit} = useForm()
	const [Role,setRole] = useState([])
	const [RoleID,setRoleID] = useState([])
	const [Leader,setLeader] = useState([])
	const [LeaderName,setLeaderName] = useState([])
	const history = useHistory()
	
	useEffect(()=>{
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
	},[])
	const onRoleChange = async (data) => {
		setRoleID(data.value)	
	}
	const onLeaderChange = async (data) => {
		console.log(data.value)
		setLeaderName(data.value)
	}
	const onSubmit = async (data)=>{
		data['role_id'] = RoleID
		data['leader'] = LeaderName
		
		const token = localStorage.getItem('token')
		const createAgency = await create_agency(token,data)
		history.push('/agent')
	}
	return (
		<div >	
			<div className="flex w-full">
				
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('NEW_AGENT')}</h1>
			</div>
			<div className="mt-10"/>
			<div >
				<div className="md:grid md:grid-cols-4 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">AGENT</h3>
							<p className="mt-1 text-sm text-gray-600">
								Agent details
							</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form onSubmit={handleSubmit(onSubmit)} >
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Full Name')}</label>
											<input  {...register('full_name')} id="full_name" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Mongkul Makra Realty"/>
										</div>
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Email')}</label>
											<input {...register('email')} id="email" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="email" placeholder="example@gmail.com"/>
										</div>
									</div>



									<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Password')}</label>
											<input {...register('password')} id="password" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="password" placeholder="Enter the password"/>
										</div>
										
										<div className="grid grid-cols-1 ">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Gender')}</label>
											<select {...register('gender')} id="sex" className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent">
												<option>{t('Male')}</option>
												<option>{t('Female')}</option>
												<option>{t('Other')}</option>
											</select>
										</div>
									</div>
									<div className="grid grid-cols-1 mt-5 mx-7">
										<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Address')}</label>
										<input {...register('address')} id="address" required className="py-2 px-3 rounded-lg border-2 border-blueGray mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="address" placeholder="Kompong Speu"/>
									</div>
									{/* New */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('LEADER')}</label>
											{/* <select {...register('leader')} id="sex" className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent">
												<option>{t('Sopheak')}</option>
												<option>{t('Mari')}</option>
												<option>{t('Testing')}</option>
											</select> */}
											<Select
												onChange={onLeaderChange}											
												options={Leader}		
											/>
										</div>
										<div className="grid grid-cols-1 ">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('ROLE')}</label>
											{/* <select {...register('role')} id="sex" className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent">
												<option>{t('Admin')}</option>
												<option>{t('Agency')}</option>
												<option>{t('Sale')}</option>
											</select> */}
											<Select
												onChange={onRoleChange}											
												options={Role}		
											/>
										</div>
									</div>		
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Phone Number')}r</label>
											<input {...register('phone1')} className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="012345678" required />
										</div>
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Identify Card Number')}</label>
											<input {...register('identify_card_number')} required className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="1122"/>
										</div>
									</div>				
									
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewAgent