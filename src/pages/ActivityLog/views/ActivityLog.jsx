import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getAllActivityLogs } from '../../../service/client/activitylogs'
import Table from '../components/Table'


function ActivityLog() {
	const { t } = useTranslation()
	const [activityLogs, setActivityLogs] = useState([])
	
	useEffect(() => {
		const token = localStorage.getItem('token')
		getAllActivityLogs(token).then(res => {
			if (!res?.data.error){
				console.log(res.data)
				const show = res.data.filter((x)=>{
					x.date = x.date.slice(0,10)
					return x
				})
				
				setActivityLogs(show)
			}
		}).catch(err =>  console.log(err))
	}, [])
	

	const columns = React.useMemo(
		() => [
			{
				Header: t('ID'),
				accessor: 'id', // accessor is the "key" in the data
			},
			
			{
				Header: t('Action'),
				accessor: 'action',
			},
			{
				Header: t('Created By'),
				accessor: 'action_by',
			},
			{
				Header: t('Description'),
				accessor: 'description',
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
			<Table data={activityLogs} columns={columns} />
			
		</div>
	)
}

export default ActivityLog