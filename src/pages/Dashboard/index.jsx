
import React, { useEffect, useState } from 'react'
import { InlineIcon } from '@iconify/react'
import accountGroupOutline from '@iconify-icons/mdi/account-group-outline'
import pointOfSale from '@iconify-icons/mdi/point-of-sale'
import calendarTextOutline from '@iconify-icons/mdi/calendar-text-outline'


import { useTranslation } from 'react-i18next'
import { getDashboardInfo } from '../../service/client/DashboardInfo'


export default function Dashboard() {
	const { t } = useTranslation()
	const [totalPlans, setTotalPlans] = useState(0)
	const [totalAgents, setTotalAgents] = useState(0)
	const [totalMoneys, setTotalMoneys] = useState(0)
	const [totalWithdrawnMoneys, setTotalWithdrawnMoneys] = useState(0)
	useEffect(() => {
		const token = localStorage.getItem('token')
		getDashboardInfo(token).then(res => {
			if (!res?.data.error){
				console.log(res.data)
				Number(1234567890).toLocaleString()
				setTotalAgents(res.data.totalAgents)
				setTotalPlans(res.data.totalPlans)
				setTotalMoneys(res.data.totalMoney)
				setTotalWithdrawnMoneys(res.data.totalWithdrawnMoney)

			}
		}).catch(err =>  console.log(err))
	}, [])
	return (
		<>
			<div>
				{/* Card stats */}
				<div className="flex flex-wrap">
					<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
							<div className="flex-auto p-4">
								<div className="flex flex-wrap">
									<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
										<h5 className=" text-gray-500 font-semibold text-2xs">
											{t('AGENT')}
										</h5>
										<span className="font-semibold text-xl text-blueGray-700">
											{totalAgents}
										</span>
									</div>
									<div className="relative w-auto pl-4 flex-initial">
										<div className="text-white p-3 text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
											<InlineIcon icon={accountGroupOutline} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
							<div className="flex-auto p-4">
								<div className="flex flex-wrap">
									<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
										<h5 className=" text-gray-500 font-semibold text-2xs">
											{t('PLAN')}
										</h5>
										<span className="font-semibold text-xl text-blueGray-700">
											{totalPlans}
										</span>
									</div>
									<div className="relative w-auto pl-4 flex-initial">
										<div className="text-green p-3 text-white text-center text-2xl inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500">
											<InlineIcon icon={accountGroupOutline} />
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
							<div className="flex-auto p-4">
								<div className="flex flex-wrap">
									<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
										<h5 className=" text-gray-500 font-semibold text-2xs">
											{t('MONEY_WITHDRAWN')}
										</h5>
										<span className="font-semibold text-xl text-blueGray-700">
											$ {Number(totalWithdrawnMoneys).toLocaleString()}
										</span>
									</div>
									<div className="relative w-auto pl-4 flex-initial">
										<div className="text-white p-3 text-2xl text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
											<InlineIcon icon={pointOfSale} />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
							<div className="flex-auto p-4">
								<div className="flex flex-wrap">
									<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
										<h5 className=" text-gray-500 font-semibold text-2xs">
											{t('TOTAL_COMMISSION')}
										</h5>
										<span className="font-semibold text-xl text-blueGray-700">
											$ {Number(totalMoneys).toLocaleString()}
										</span>
									</div>
									<div className="relative w-auto pl-4 text-2xl flex-initial">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-500">
											<InlineIcon icon={calendarTextOutline} />
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}