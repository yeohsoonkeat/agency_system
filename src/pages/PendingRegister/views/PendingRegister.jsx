import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getAgentPending } from '../../../service/client/agency'
import Table from '../components/Table'


function PendingRegister() {
	const { t } = useTranslation()
	const [userPending,setUserPending] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		getAgentPending(token).then(res=>{
			console.log(res.data)
			setUserPending(res.data)
		})

	},[])


	const columns = React.useMemo(
		() => [
			{
				Header: t('PLAN_ID'),
				accessor: 'id',
			},
			{
				Header: t('USER_FULLNAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('USER_SEX'),
				accessor: 'gender',
			},
			{
				Header: t('USER_ADDRESS'),
				accessor: 'address',
			},
			{
				Header: t('USER_EMAIL'),
				accessor: 'email',
			},
			{
				Header: t('USER_PHONE'),
				accessor: 'phone1',
			},
			{
				Header: t('USER_IDCARD'),
				accessor: 'identify_card_number',
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
			<Table data={userPending} columns={columns} setData={setUserPending}/>
			
		</div>
	)
}

export default PendingRegister