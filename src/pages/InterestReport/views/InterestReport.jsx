import React from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'



function InterestReport() {
	const { t } = useTranslation()
	const data = React.useMemo(
		() => [
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
			{
				id: '14211',
				group: 'A',
				fullname: 'Kong Panhabot',
				sex: 'male',
				phone: '015642673',
				withdraw:'$2000',
				remain:'$3000'
			},
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: t('ID'),
				accessor:'id'
			},
			{
				Header: t('Group'),
				accessor:'group'
			},
			{
				Header: t('FULL NAME'),
				accessor:'fullname'
			},
			{
				Header: t('SEX'),
				accessor:'sex'
			},
			{
				Header: t('PHONE NUMBER'),
				accessor:'phone'
			},
			{
				Header: t('WITHDRAW MONEY'),
				accessor:'withdraw'
			},
			{
				Header: t('REMAINING MONEY'),
				accessor:'remain'
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">Interest Reports</h1>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns} />
			
		</div>
	)
}

export default InterestReport