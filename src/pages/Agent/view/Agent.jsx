import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'


function AgentList() {
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
				id: 'a',
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
				Header: 'FULL_NAME',
				accessor: 'fullname', // accessor is the "key" in the data
			},
			{
				Header: 'SEX',
				accessor: 'sex',
			},
			{
				Header: 'GROUP',
				accessor: 'group',
			},
			{
				Header: 'PHONE',
				accessor: 'phone',
			},
			{
				Header: 'STATUS',
				accessor: 'status',
			},
			{
				Header: 'JOINED_AT',
				accessor: 'joined_at',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('AGENT')}</h1>
				<Link to={`${url}/new_agent`} className="border-2 p-2 text-white opacity-80 hover:opacity-100 rounded items-center">
					<div>
                        {t('NEW_AGENT')}
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default AgentList