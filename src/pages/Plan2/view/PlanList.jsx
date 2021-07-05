import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'


function PlanList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const data = React.useMemo(
		() => [
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'C',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'C',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'C',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'B',
				phone: '0968663002',
				status: 'Inactive',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
			},
			{
				id: '1234567gfxdg',
				fullname: 'Yeoh Soon Keat',
				sex: 'Male',
				group: 'A',
				phone: '0968663002',
				status: 'Active',
				joined_at: new Date().toDateString()
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
				Header: t('ID'),
				accessor: 'id',
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
				Header: t('STATUS'),
				accessor: 'status',
			},
			{
				Header: t('JOINED_AT'),
				accessor: 'joined_at',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('Plan')}</h1>
				<Link to={`${url}/new_agent`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        New Plan
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default PlanList