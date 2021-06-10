import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import auth from 'service/auth/index'

import { AuthContext } from 'hooks/useAuth'
import { useForm } from 'react-hook-form'


export default function Form () {
	const { t } = useTranslation('agent')
	const [loading,setLoding] = useState(false)
	const [message,setMessage] = useState('')
	const { register, handleSubmit } = useForm()

	
	const onSubmit = async(data) =>{
		try{			
			setLoding(false)
			window.open('/pending','_self')
		}catch(e){
			setLoding(false)
			setMessage(e.message)
		}
	}


	const handleCancel = async() =>{
		await auth.logout()
	}

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			
			<div className={`flex min-h-screen bg-gray-200 items-center justify-center ${loading? 'animate-pulse':''}`}>
				
				<div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
					{message && <p className="text-red-400 text-center w-full  break-words p-3 mt-5 mb-5 bg-red-50 border-l-4">{message}</p> }
					<div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t bg-primary-default">
						<div className="flex">
							<h1 className="text-yellow-lite font-bold md:text-2xl text-xl">{t('Fill your information')}</h1>
						</div>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Full Name')}</label>
						<input required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Mongkul Makra Realty" {...register('fullname',{require:true})} />
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('SEX')}</label>
						<select className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" {...register('sex',{require:true})}>
							<option>{t('Male')}</option>
							<option>{t('Female')}</option>
						</select>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Address')}</label>
						<input required className="py-2 px-3 rounded-lg border-2 border-blueGray mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="address" placeholder="Kompong Speu" {...register('address',{require:true})} />
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Phone Number')}r</label>
							<input className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="012345678" required  {...register('phonenumber',{require:true,})}/>
						</div>
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Identify Card Number')}</label>
							<input required className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="1122" {...register('idnumber',{require:true})} />
						</div>
					</div>

					<div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
						<button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={handleCancel}>{t('Cancel')}</button>
						<button className='w-auto bg-green-500 hover:bg-green-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="submit">{t('Create')}</button>
					</div>

				</div>
			</div>
		</form>
	)
}