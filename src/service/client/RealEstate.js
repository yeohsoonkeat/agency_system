import axios from 'axios'
const BASE_URL = 'http://localhost:8080'
export const getRealEstateById = (id) => {
    const token = localStorage.getItem('token')
	const config =  {
		method: 'get',
		url: `${BASE_URL}/api/realEstate/get_realestate_by_planId/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}

export const getAllRealEstateById = (id) => {
    const token = localStorage.getItem('token')
	const config =  {
		method: 'get',
		url: `${BASE_URL}/api/realEstate/get_all_realestate_by_planId/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}
	return axios(config)
}

export const editRealEstate = (data,id) => {
    const token = localStorage.getItem('token')
	const config =  {
		method: 'put',
		url: `${BASE_URL}/api/realEstate/update_realestate/${id}`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}

export const getRealEstatesSpecificId = (data) => {
	console.log(data)
    const token = localStorage.getItem('token')
	const config =  {
		method: 'post',
		url: `${BASE_URL}/api/realEstate/get_realestates_by_id_specific`,
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		data: data
	}
	return axios(config)
}