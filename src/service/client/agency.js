import axios from 'axios'


export const get_agency = (token) => {
	const config =  {
		method: 'get',
		url: ' http://18.117.186.113/api/agency/get_all_agency',
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
		url: ' http://18.117.186.113/api/agency/get_all_leader',
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
		url: ' http://18.117.186.113/api/agency/get_agent_pending',
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
		url: ' http://18.117.186.113/api/agency/get_agency_available',
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
		url: ' http://18.117.186.113/api/agency/create_agency',
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
		url: ' http://18.117.186.113/api/agency/create_agency_by_admin',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}


export const getApprovedAgent = (data,token,id) => {
	const config =  {
		method: 'post',
		url: ` http://18.117.186.113/api/agency/update_role_leader/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}


export const updateAgency = (id,data) => {
	console.log(id)
	const token = localStorage.getItem('token')
	console.log(token)
	const config =  {
		method: 'put',
		url: ` http://18.117.186.113/api/agency/update_agency/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}
