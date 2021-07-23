import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteMatch } from 'react-router-dom'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'

function AgentList() {
	const { t } = useTranslation()
	const { url } = useRouteMatch()
	const [data, setData] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		get_agency(token).then(res=>{
			res.data.filter((x)=>{
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
			})
			console.log(res.data)
			setData(res.data)
		})
	},[])
	

	const columns = React.useMemo(
		() => [
			{
				Header: t('FULL NAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('ID'),
				accessor: 'id',
			},
			{
				Header: t('SEX'),
				accessor: 'gender',
			},
			{
				Header: t('PHONE'),
				accessor: 'phone1',
			},
			{
				Header: t('STATUS'),
				accessor: 'status',
			},
			{
				Header: t('REMAINING MONEY'),
				accessor: 'remaining_money',
			},
			{
				Header: t('TOTAL MONEY'),
				accessor: 'total_money',
			},
			{
				Header: t('JOINED DATE'),
				accessor: 'date',
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
                        New Agent
					</div>
				</Link>
			</div>
			<div className="mt-4"/>
			<Table data={data} columns={columns}/>
		</div>
	)
}

export default AgentList