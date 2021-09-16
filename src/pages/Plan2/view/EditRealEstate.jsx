import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'
// import { editRela } from '../../../service/client/Plan'
import { Link, useHistory } from 'react-router-dom'
import { editRealEstate } from '../../../service/client/RealEstate'

function EditPlan(context) {
    const location = useLocation()
    const data = location.state.data
	// const data ={}
	console.log(data)
	const { t } = useTranslation()
	const history = useHistory()
	const {id} = useParams() 
	const {register,handleSubmit} = useForm()
	const onSubmit = async (realestate)=>{
		console.log(realestate)
		console.log(data.id)
		editRealEstate(realestate,data.id).then(res => {
			console.log(res)
			if (!res?.data.error){
				if(res.data.created == true){
					history.push(`/plan/real_estate/${id}`)
				}else{
					alert(res.data.message)
				}
			}
		}).catch(err =>  {
			console.log(err)})
	}

	return (
		<div >
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">EDIT REALESTATE</h1>		
			<form onSubmit={handleSubmit(onSubmit)} >
				<div className="relative p-6 flex-auto">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
								{t('REALESTATE NAME')}
							</label>
							<input defaultValue={data.realestate_name} {...register('realestate_name')} required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Plan name" />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
								{t('PRICE')}
							</label>
							<input defaultValue={data.realestate_price} {...register('realestate_price')} required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-price" type="number" placeholder="Plan price" />
						</div>
		
					</div>
					
					

				</div>
				{/*footer*/}
				<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
						Save
					</button>
				</div>

			</form>
		</div>
	)
}

export default EditPlan