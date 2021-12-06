import axios from 'axios'

export const getAllActivityLogs = (token) => {
	const config =  {
		method: 'get',
		url: ' http://18.117.186.113/api/activitylog/get-all-logs',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}