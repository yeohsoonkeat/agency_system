import axios from 'axios'

export const get_role = (token) => {
	const config =  {
		method: 'get',
		url: ' http://18.117.186.113/api/role/get_role',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}