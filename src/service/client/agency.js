import axios from 'axios'


export const get_agency = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/agency/get_all_agency',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


