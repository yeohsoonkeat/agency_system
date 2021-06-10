
import React from 'react'

import { InlineIcon } from '@iconify/react'
import accountGroupOutline from '@iconify-icons/mdi/account-group-outline'
import pointOfSale from '@iconify-icons/mdi/point-of-sale'
import calendarTextOutline from '@iconify-icons/mdi/calendar-text-outline'


import { useTranslation } from 'react-i18next'


export default function Dashboard() {
	const { t } = useTranslation()

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
											10
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
											4
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
											$3,200
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
											{t('BALANCE')}
										</h5>
										<span className="font-semibold text-xl text-blueGray-700">
											$5,600
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