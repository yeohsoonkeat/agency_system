import axios from 'axios'


export const get_plan = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/plan/get-plan',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


