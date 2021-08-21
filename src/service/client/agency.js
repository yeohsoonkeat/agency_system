import data from '@iconify-icons/mdi/chevron-right'
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

export const getAgencyLeader = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/agency/get_all_leader',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}

export const getAgentPending = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/agency/get_agent_pending',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}
export const getAgencyAvailalble = (token) => {
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/agency/get_agency_available',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}


export const create_agency = (token,agency) => {
	const data = JSON.stringify(agency)
	console.log(data)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/agency/create_agency',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}


export const createAgentByAdmin = (token,agency) => {
	const data = JSON.stringify(agency)
	console.log(data)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/agency/create_agency_by_admin',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}


