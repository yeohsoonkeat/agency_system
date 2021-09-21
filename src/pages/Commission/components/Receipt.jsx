import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { set, useForm } from 'react-hook-form'
import { create_plan } from '../../../service/client/Plan'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { SheetJSApp } from '../../../components/excelReader/SheetJS'
import logo from '../../../assets/images/logo.png'
import ReactToPrint from 'react-to-print'
import { InlineIcon } from '@iconify/react'
import printerOutline from '@iconify-icons/mdi/printer-outline'


function Receipt(context) {
	// const Plan = lazy(() => import('./pages/Plan2'))
	const { t } = useTranslation()
	let componentRef = React.useRef()

	const history = useHistory()
    const location = useLocation()
    const data = location.state.data
	const protery_code = `${data.plan.plan_name}-${data.commission.real_estate}-${data.id}`
    // console.log(location.state.data)
	const Receipt = () => {
		return(
			<div>    
                <div className=" md:mt-0 md:col-span-2">
						<form>
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <h1 className="uppercase text-xs text-primary-default text-center text-light font-semibold">{t('COMMISSION_REPORT')}</h1>
                <div className="flex justify-between px-10">
                    <div className="flex-1">
                        <img src={logo} className="w-10"></img>
                    </div>
                    <div className="flex-1 float-right text-right text-xs ">
                        <h1> Code: 5012</h1>
						{console.log(location.state.data)}
						{console.log(data)}
                    </div>
                </div>				
									<div className="grid grid-cols-2 gap-5 md:gap-8 mx-7 text-xs">
										<div className="grid grid-cols-1">
											<label className="uppercase text-xs text-primary-default text-light font-semibold">{t('SELLER_NAME')}</label>
											<input disabled  id="full_name" value={data.agency.full_name} required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
                                        <div className="grid grid-cols-1">
											<label className="uppercase text-xs text-primary-default text-light font-semibold">{t('EXPENSE_DATE')}</label>
											<input disabled  id="full_name" value={data.date} required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
									</div>	
                                    <div className="grid grid-cols-2 gap-5 md:gap-8 mx-7 text-xs">
										<div className="grid grid-cols-1">
											<label className="uppercase  text-xs text-primary-default text-light font-semibold">{t('PROPERTY_CODE')}</label>
											<input disabled value={protery_code} id="plan" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
                                        <div className="grid grid-cols-1">
											<label className="uppercase  text-xs text-primary-default text-light font-semibold">{t('PROJECT')}</label>
											<input disabled value={data.plan.plan_name} id="full_name" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
									</div>	
                                    <div className="grid grid-cols-1 gap-5 md:gap-8 mx-7 text-xs">
										<div className="grid grid-cols-1">
											<label className="uppercase  text-xs text-primary-default text-light font-semibold">{t('PAID_AMMOUNT')}</label>
											<input disabled value={data.cash_out_amount} id="full_name" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder="Plan Name"/>
										</div>
									</div>	
                                    <div className="grid grid-cols-1 gap-5 md:gap-8 mx-7 text-xs">
										<div className="grid grid-cols-1">
											<label className="uppercase text-xs text-primary-default text-light font-semibold">{t('REMAINING_AMMOUNT')}</label>
											<input disabled value={data.remaining_amount} id="full_name" required className="py-2 px-3 rounded-lg border-2 border-blueGray-500 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent" type="text" placeholder=""/>
										</div>
									</div>		
                                    <div className="flex justify-evenly align-middle text-xs">
                                        <div className>
                                            <h1 className="mx-9">Accountant</h1>
                                            <h1 className="mt-16">_________________________</h1>
                                        </div>
                                        <div className>
                                            <h1 className="mx-9">Receive By</h1>
                                            <h1 className="mt-16">_________________________</h1>
                                        </div>
                                        <div className>
                                            <h1 className="mx-9">Paid By</h1>
                                            <h1 className="mt-16">_________________________</h1>
                                        </div>
                                    </div>

								</div>
							</div>
						</form>
					</div>
            </div>
		)
	}
	return (
		<div >
            <div className="flex justify-between">
			<h1 className="mb-5 font-bold text-3xl text-yellow-lite">{t('Receipt')}</h1>	
				<ReactToPrint
					trigger={() => <button className="flex space-x-2 font-bold text-white p-1 px-3 rounded">
						<InlineIcon icon={printerOutline} className="text-xl text-white"/><span>{t('PRINT')}</span>
					</button>}
					content={() => componentRef.current}
					
				/>
            </div>
			<div ref={componentRef}>
				<Receipt/>
				<Receipt/>
			</div>
		</div>
	)
}

export default Receipt