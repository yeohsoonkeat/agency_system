import React from 'react'
import { useTranslation } from 'react-i18next'
import Address from '../components/addressModal'


function NewPlan() {
	const { t } = useTranslation('plan')

	return (
		<div >
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">New Plan</h1>
			<form >
				<div className="relative p-6 flex-auto">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
								{t('PLAN_NAME')}
							</label>
							<input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
								Address
							</label>
							<Address />
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-2">
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
								Plan Created At
							</label>
							<input type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
						</div>
						<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
								Price ($)
							</label>
							<input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
						</div>
					</div>

				</div>
				{/*footer*/}
				<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
					<button
						className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="button"
					>
						Back
					</button>
					<button
						className=" bg-primary-default text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="submit"
					>
						Add
					</button>
				</div>

			</form>

		</div>
	)
}

export default NewPlan