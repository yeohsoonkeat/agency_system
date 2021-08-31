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
				res.data.filter((x)=>{
		
					x.date = `${x.date}`
					// return x
				})
				console.log(res.data)
				setActivityLogs(res.data)
			}
		}).catch(err =>  console.log(err))
	}, [])
	

	const columns = React.useMemo(
		() => [
			{
				Header: t('ACTIVITY_ID'),
				accessor: 'id', // accessor is the "key" in the data
			},
			
			{
				Header: t('ACTIVITY_ACTION'),
				accessor: 'action',
			},
			{
				Header: t('ACTIVITY_CREATE'),
				accessor: 'action_by',
			},
			{
				Header: t('ACTIVITY_DESCRIPTION'),
				accessor: 'description',
			},
			{
				Header: t('ACTIVITY_DATE'),
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