import axios from 'axios'

export const getAllActivityLogs = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/activitylog/get-all-logs',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}