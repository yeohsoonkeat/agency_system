
import axios from 'axios'


export const getDashboardInfo = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/dashboard/all-info',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}