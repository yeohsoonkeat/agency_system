import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { set, useForm } from 'react-hook-form'
import { create_plan } from '../../../service/client/Plan'
import { Link, useHistory } from 'react-router-dom'
import { SheetJSApp } from '../../../components/excelReader/SheetJS'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'
import { editPlan } from '../../../service/client/Plan'

function EditPlan(context) {
	const location = useLocation()
	const data = location.state.data
	const { t } = useTranslation()
	const history = useHistory()
	const {id} = useParams() 
	const {register,handleSubmit} = useForm()
	const [sheetData,setSheetData] = useState([])
	const [error,setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const onSubmit = async (data)=>{
		data['realestates'] = sheetData
		editPlan(data,id).then(res => {
			// console.log(res)
			if (!res?.data.error){
				if(res.data.created == true){
					setSuccess(true)
					setTimeout(() => {
						setSuccess(false)
						history.push('/plan')					

					}, 1500)
				}else{
					alert(res.data.message)
				}
			}
		}).catch(err =>  {
			console.log(err)})
	}

	const EditSuccess = () => {
		return(
			<div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md text-green-700" role="alert">
			<div className="flex">
				<div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
				<div>
				<p className="font-bold">Edit Success</p>
				{/* <p class="text-sm">Make sure you know how these changes affect you.</p> */}
				</div>
			</div>
			</div>
		)
		
	}
	return (
		<div >
			{/* <pre>{JSON.stringify(data, null, 1)}</pre> */}
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">{t('EDIT PLAN')}</h1>			
			<div className="mt-10"/>
			<div >
				<div className="md:grid md:grid-cols-4 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							{/* <h3 className="text-lg font-medium leading-6 text-gray-900">AGENT</h3> */}
							<p className="mt-1 text-sm text-gray-600">
								Plan details
							</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						{
							success ? (
								<EditSuccess />
							) : null
						}
						<form onSubmit={handleSubmit(onSubmit)} >
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
										
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PLAN_NAME')}</label>
											<input defaultValue={data.plan_name} {...register('plan_name')} required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Plan name" />
											{error ? <p className="font-small text-red-500">Plan name is already have !!</p> : null}
										</div>
										
									</div>	

									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PRICE')}</label>
											<input defaultValue={data.commission_price} {...register('commission_price')} required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-price" type="number" placeholder="Plan price" />
										</div>
									</div>		
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('DATE')}</label>
										<input defaultValue={data.date} type="date" {...register('date')} required></input>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
												<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('PLAN_LOCATION')}</label>
												<input defaultValue={data.location} {...register('location')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Steung Mean Chei" />
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
												{t('ACTIVITY_DESCRIPTION')}
											</label>
											<textarea defaultValue={data.descriptions} {...register('descriptions')} placeholder="More detail here" className="resize border rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
										</div>
									</div>	
									<div className="grid grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
										<div className="grid grid-cols-1">
											<SheetJSApp toChild={setSheetData} SheetData= {sheetData}/>
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
									Edit
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

export default EditPlan