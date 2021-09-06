import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../hooks/useAuth'
import { create_plan } from '../../../service/client/Plan'
import { Link, useHistory } from 'react-router-dom'
import { SheetJSApp } from '../../../components/excelReader/SheetJS'


function NewAgent(context) {
	// const Plan = lazy(() => import('./pages/Plan2'))
	const { t } = useTranslation()
	const history = useHistory()
	const {register,handleSubmit} = useForm()
	const onSubmit = async (data)=>{
		const token = localStorage.getItem('token')
		const result = await create_plan(token,data)
		if(result.data.message == 'Plan name is already existing !') alert(result.data.message)
		else history.push('/plan')
	}

	return (
		<div >
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">{t('NEW_PLAN')}</h1>		
			<div >	
		
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
									
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PLAN_NAME')}</label>
											<input  {...register('plan_name')} id="full_name" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
									</div>	

									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PRICE')}</label>
											<input  {...register('commission_price')} id="price" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="Price"/>
										</div>
									</div>		
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('DATE')}</label>
										<input type="date" {...register('date')} required></input>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
												<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PLAN_LOCATION')}</label>
												<input  {...register('location')} id="price" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Location"/>
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
												{t('ACTIVITY_DESCRIPTION')}
											</label>
											<textarea {...register('descriptions')} placeholder="More detail here" className="resize border rounded-md appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<SheetJSApp />
										</div>
									</div>	
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
								>
									<Link to='/plan'>
									Close
									</Link>
								</button>
								<button
									className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="submit"
								>
									Add
								</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default NewAgent