import React from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'


function PendingRegister() {
	const { t } = useTranslation()
	
	const data = React.useMemo(
		() => [
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				email: 'kongpanhabot2000@gmail.com',
				phone: '0968663002',
				id_card: '10020'
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				email: 'kongpanhabot2000@gmail.com',
				phone: '0968663002',
				id_card: '10020'
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				email: 'kongpanhabot2000@gmail.com',
				phone: '0968663002',
				id_card: '10020'
			},
		],
		[]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: t('FULL NAME'),
				accessor: 'fullname', // accessor is the "key" in the data
			},
			{
				Header: t('SEX'),
				accessor: 'sex',
			},
			{
				Header: t('EMAIL'),
				accessor: 'email',
			},
			{
				Header: t('PHONE'),
				accessor: 'phone',
			},
			{
				Header: t('ID CARD'),
				accessor: 'id_card',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('PENDING_REGISTER')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns} />
			
		</div>
	)
}

export default PendingRegister