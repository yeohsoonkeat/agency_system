import axios from 'axios'


export const getCommissionById = (token, commission_id, agencyId) => {
	const config = {
		method: 'get',
		// url : ` http://18.117.186.113/api/get_commission/${commission_id}`,
		url: ` http://18.117.186.113/api/commission/get_commission/${commission_id}/${agencyId}`,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}

export const get_commision = (token) => {
	const config =  {
		method: 'get',
		url: ' http://18.117.186.113/api/commission/get_all_commission/',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


export const createCommission = (data,token) => {
	const config =  {
		method: 'post',
		url: ' http://18.117.186.113/api/commission/create_commission',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data:data
	}
	return axios(config)
}


export const deleteCommission = (commission_id) => {
	const token = localStorage.getItem('token')
	const config =  {
		method: 'delete',
		url: ` http://18.117.186.113/api/commission/delete_commission/${commission_id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}



