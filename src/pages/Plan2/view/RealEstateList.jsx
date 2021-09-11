import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import TableRealEstate from '../components/TableRealEstate'
import { get_plan } from '../../../service/client/Plan'
import { getAllRealEstateById } from '../../../service/client/RealEstate'
import { useParams } from 'react-router-dom'
function RealEstateList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
    const {id, } = useParams() 
	const [data, setData] = useState([])
	
	useEffect(() => {
        // const id = 1
		const token = localStorage.getItem('token')
		getAllRealEstateById(id).then(res => {
			if (!res?.data.error){
				res.data.filter((x)=>{
					x.is_used? x['status'] = 'True': x['status'] = 'False'
					// return x.is_verified == true
				})
				console.log(res.data)
				setData(res.data)
			}
		}).catch(err =>  console.log(err))
	}, [])

	const handleDelete = (id) => {
		setData(
			data.filter(x => x.id != id)
		)
		console.log(id)
	}
	const columns = React.useMemo(
		() => [
            {
				Header: t('PLAN NAME'),
				accessor: 'plan.plan_name',
			},
			
			{
				Header: t('REAL ESTATE NAME'),
				accessor: 'realestate_name', // accessor is the "key" in the data
			},
			{
				Header: t('IS USED'),
				accessor: 'status',
			},
			{
				accessor: 'id',
			},
		],
		[]
	)

	return (
		<div >
			<div className="flex w-full">
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('REAL ESTATE')}</h1>
			</div>
			<div className="mt-4"/>
			<TableRealEstate data={data} columns={columns} handleDelete={handleDelete}/>
		</div>
	)
}

export default RealEstateList