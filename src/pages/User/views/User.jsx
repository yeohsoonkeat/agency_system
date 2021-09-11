import React, { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next'
import Table from '../components/Table'
import { get_agency } from '../../../service/client/agency'


function User() {
	const { t } = useTranslation()
	const [agency, setAgency] = useState([])
	useEffect(()=>{
		const token = localStorage.getItem('token')
		// const user = localStorage.getItem('user')
		const user = JSON.parse(localStorage.getItem('user'))
		// console.log(user)
		get_agency(token).then(res=>{
			const show = res.data.filter((x)=>{
				x.is_verified? x['status'] = 'Active': x['status'] = 'Inactive'
				x.leader == null? x.leader = 'No Leader': x.leader
				return x.is_verified == true && x.id != user.id
			
				// x.role.name != 'admin'
			})

			
			setAgency(show)
		})
	},[])


	const columns = React.useMemo(
		() => [
			{
				Header: t('USER_FULLNAME'),
				accessor: 'full_name', // accessor is the "key" in the data
			},
			{
				Header: t('USER_SEX'),
				accessor: 'gender',
			},
			{
				Header: t('USER_ROLE'),
				accessor: 'role.name',
			},
			{
				Header: t('USER_LEADER'),
				accessor: 'leader',
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
				Header: t('USER_ADDRESS'),
				accessor: 'address',
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
				<h1 className="flex-1 font-bold text-3xl text-yellow-lite">{t('USER')}</h1>
			</div>
			<div className="mt-4"/>
			<Table data={agency} columns={columns} />
			
		</div>
	)
}

export default User