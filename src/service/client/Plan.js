import axios from 'axios'

export const get_plan = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/plan/get_plan',
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
export const getAvailablePlan = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/plan/get_available_plan',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


export const create_plan = (token, plan) => {
	console.log(plan) 
	const data = JSON.stringify(plan)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/plan/create_plan',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}

export const deletePlan = (id) => {
	const token = localStorage.getItem('token')
	const config =  {
		method: 'delete',
		url: `http://localhost:8080/api/plan/delete_plan/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}

export const editPlan = (data,id) => {
	const token = localStorage.getItem('token')
	const config =  {
		method: 'put',
		url: `http://localhost:8080/api/plan/update_plan/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data:data
	}
	return axios(config)
}