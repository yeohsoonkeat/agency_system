import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'
import { get_plan } from '../../../service/client/Plan'

function PlanList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const [data, setData] = useState([])
	// const data = React.useMemo(
	// 	() => [
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'C',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'C',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'C',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'B',
	// 			phone: '0968663002',
	// 			status: 'Inactive',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		},
	// 		{
	// 			id: '1234567gfxdg',
	// 			fullname: 'Yeoh Soon Keat',
	// 			sex: 'Male',
	// 			group: 'A',
	// 			phone: '0968663002',
	// 			status: 'Active',
	// 			joined_at: new Date().toDateString()
	// 		}
	// 	],
	// 	[]
	// )
	useEffect(() => {
		const token = localStorage.getItem('token')
		get_plan(token).then(res => {
			if (!res?.data.error){
				console.log(res.data)
				setData(res.data)
			}
		}).catch(err =>  console.log(err))
	}, [])

	const columns = React.useMemo(
		() => [
			{
				Header: t('ID'),
				accessor: 'id',
			},
			{
				Header: t('PLAN NAME'),
				accessor: 'plan_name', // accessor is the "key" in the data
			},
			
			{
				Header: t('Commission Price'),
				accessor: 'commission_price',
			},
			{
				Header: t('LOCATION'),
				accessor: 'location',
			},
			{
				Header: t('IS COMMISSION'),
				accessor: 'is_commission',
			},
			{
				Header: t('CREATOR PLAN'),
				accessor: 'creator_plan',
			},
			{
				Header: t('DATE'),
				accessor: 'date',
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