import axios from 'axios'


/**
 * 
 * @param {fullname_or_email, password} user 
 * @returns USER
 */
export const login_user = (user) => {
	const data = JSON.stringify(user)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/auth/login',
		headers: { 
			'Content-Type': 'application/json'
		},
		data : data
	}
	return axios(config)
}

export const get_user_profile = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/auth/get_user/',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


