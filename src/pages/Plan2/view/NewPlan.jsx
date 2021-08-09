import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../hooks/useAuth'


function NewAgent() {
	const { t } = useTranslation()
	const {register,handleSubmit} = useForm()
	const { registerAuth } = useContext(AuthContext)
	const onSubmit = (data)=>{
		registerAuth(data)
	}

	return (
		<div >
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">New Agent</h1>		
			<form >
				<div className="relative p-6 flex-auto">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
								{t('Plan Name')}
							</label>
							<input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Plan name" />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
								{t('Plan Name')}
							</label>
							<input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-price" type="number" placeholder="Plan price" />
						</div>
						<div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
								{t('Date')}
							</label>
							<div className="relative">
								<select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
									<option>Jonh</option>
									<option>Cena</option>
									<option>Other</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
								Address
							</label>
							<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Steung Mean Chei" />
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
							 Descriptions
							</label>
							<textarea placeholder="More detail here" className="resize border rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
							{/* <input className="" id="grid-zip" type="phone" placeholder="More detail here" /> */}
						</div>
					</div>
					

				</div>
				{/*footer*/}
				<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
					<button
						className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
					>
						Close
					</button>
					<button
						className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="submit"
					>
						Add
					</button>
				</div>

			</form>
		</div>
	)
}

export default NewAgent