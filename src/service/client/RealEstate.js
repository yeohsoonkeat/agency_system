import axios from 'axios'

export const getRealEstateById = (id) => {
    const token = localStorage.getItem('token')
	const config =  {
		method: 'get',
		url: `http://localhost:8080/api/realEstate/get_realestate_by_planId/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}