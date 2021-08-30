import axios from 'axios'

export const withDrawCash = (token, withdrawData) => { 
	const data = JSON.stringify(withdrawData)
	const config =  {
		method: 'post',
		url: `http://localhost:8080/api/commission/cash_out_commission/${withdrawData.commission_id}/${withdrawData.agency_id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}

export const agentWithdrawHistory = (token, history) => { 
	const data = JSON.stringify(history)
	const config =  {
		method: 'post',
		url: 'http://localhost:8080/api/cashoutHistory/query_cashoutHistory/',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}


export const allAgentWithdrawHistory = (token) => { 
	const config =  {
		method: 'get',
		url: 'http://localhost:8080/api/cashoutHistory/all',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
	}
	return axios(config)
}