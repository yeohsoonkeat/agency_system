import React from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'


function ActivityLog() {
	const { t } = useTranslation()
	const data = React.useMemo(
		() => [
			{
				id: '1234567gfxdg',
				module: 'Plan',
				action: 'Create',
				created_by: 'Samnang',
				date: '2021-08-17 19:23:25',
			},
			{
				id: '1234567gfxdg',
				module: 'Plan',
				action: 'Update',
				created_by: 'Bot',
				date: '	2021-08-17 19:23:25',
			},
			{
				id: '1234567gfxdg',
				module: 'Plan',
				action: 'Delete',
				created_by: 'Daro',
				date: '	2021-08-17 19:23:25',
			}
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: t('ID'),
				accessor: 'id', // accessor is the "key" in the data
			},
			{
				Header: t('Module'),
				accessor: 'module',
			},
			{
				Header: t('Action'),
				accessor: 'action',
			},
			{
				Header: t('Created By'),
				accessor: 'created_by',
			},
			{
				Header: t('Date'),
				accessor: 'date',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('ACTIVITY_LOG')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns} />
			
		</div>
	)
}

export default ActivityLog