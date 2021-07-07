import axios from 'axios'


export const get_commision = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/commission/get_commission',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


