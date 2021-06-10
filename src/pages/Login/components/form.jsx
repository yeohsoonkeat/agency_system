import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'



export default function Form () {
	const { t } = useTranslation()
	return(
		<form>
			
			<div className="flex min-h-screen bg-gray-200 items-center justify-center">
				
				<div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
					<div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t bg-primary-default">
						<div className="flex">
							<h1 className="text-yellow-lite font-bold md:text-2xl text-xl">{t('Fill your information')}</h1>
						</div>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Full Name')}</label>
						<input required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Mongkul Makra Realty"/>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('SEX')}</label>
						<select className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent">
							<option>{t('Male')}</option>
							<option>{t('Female')}</option>
						</select>
					</div>

					<div className="grid grid-cols-1 mt-5 mx-7">
						<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Address')}</label>
						<input required className="py-2 px-3 rounded-lg border-2 border-blueGray mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="address" placeholder="Kompong Speu"/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Phone Number')}r</label>
							<input className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="012345678" required />
						</div>
						<div className="grid grid-cols-1">
							<label className="uppercase md:text-sm text-xs text-primary-default text-light font-semibold">{t('Identify Card Number')}</label>
							<input required className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="number" placeholder="1122"/>
						</div>
					</div>

					<div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
						<button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>{t('Cancel')}</button>
						<button className='w-auto bg-green-500 hover:bg-green-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' type="submit">{t('Create')}</button>
					</div>

				</div>
			</div>
		</form>
	)
}