import React from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'


function ActivityLog() {
	const { t } = useTranslation()
	const data = React.useMemo(
		() => [
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				commision_withdrawn: '100$',
				commision_in_account: '1000$'
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				commision_withdrawn: '100$',
				commision_in_account: '1000$'
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				commision_withdrawn: '100$',
				commision_in_account: '1000$'
			}
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: t('FULL_NAME'),
				accessor: 'fullname', // accessor is the "key" in the data
			},
			{
				Header: t('SEX'),
				accessor: 'sex',
			},
			{
				Header: t('GROUP'),
				accessor: 'group',
			},
			{
				Header: t('PHONE'),
				accessor: 'phone',
			},
			{
				Header: t('WITHDRAWN'),
				accessor: 'commision_withdrawn',
			},
			{
				Header: t('IN_ACCOUNT'),
				accessor: 'commision_in_account',
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