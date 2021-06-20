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