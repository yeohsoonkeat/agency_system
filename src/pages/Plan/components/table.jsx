import React from 'react'
import { InlineIcon } from '@iconify/react'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import pencilOutline from '@iconify-icons/mdi/pencil-outline'
import { useTranslation } from 'react-i18next'


const agents = [
	{
		plan_name: 'Koh kimochi',
		location: 'Steung Mean Chei',
		price: '$12345',
		commision: '$240',
		created_at: new Date().toDateString()
	}
]

export default function Table() {
	const { t } = useTranslation('agent')
	return (
		<div className="flex flex-col mt-2 ">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="text-sm lg:text-md bg-primary-default font-medium text-white">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>
										{t('PLAN_NAME')}

									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>
										{t('PRICE')}
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>
										{t('COMMISION')}
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>
										{t('LOCATION')}

									</th>

									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>
										{t('CREATED_AT')}
									</th>
									
									<th
										scope="col"
										className="px-6 py-3 text-left tracking-wider"
									>

									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{agents.map((agent, index) => (
									<tr key={agent.plan_name + index}>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{agent.plan_name}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{agent.price}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{agent.commision}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{agent.location}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{agent.created_at}</div>
										</td>
										
										<td className="px-6 py-4 whitespace-nowrap space-x-3 text-right text-xl font-medium">
											<button className="hover:text-accent-yellow">
												<InlineIcon icon={pencilOutline} />
											</button>
											<button className="hover:text-red-default">
												<InlineIcon icon={trashCanOutline} title="Delete" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
