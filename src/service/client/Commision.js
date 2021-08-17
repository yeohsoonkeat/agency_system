import axios from 'axios'


export const get_commision = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/commission/get_all_commission/',
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
		url: 'http://localhost:8080/api/commission/create_commission',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data:data
	}
	return axios(config)
}



