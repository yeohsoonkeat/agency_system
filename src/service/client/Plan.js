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
export const getPlanById = (id,token) => {
	const config =  {
		method: 'get',
		url: `http://localhost:8080/api/plan/get_plan_id/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}
export const create_plan = (token, plan) => { 
	const data = JSON.stringify(plan)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/plan/create-plan',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}

