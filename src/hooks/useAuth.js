import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loader from '@components/common/loader'
import { login_user } from '../service/auth'
export const AuthContext = React.createContext()


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false)
	const [pending, setPending] = useState(true)


	useEffect(() => {
		// get user if user is login return user else message
		let tmp ={
			is_active: true,
			is_verified: true,
			_id: '60cd8ba12db8e2469023fa93',
			full_name: 'Admin Page',
			email: 'admin@gmail.com',
			sex: 'Male',
			address: 'Battambang',
			phone_number: 'Battambang',
			identify_card_number: '1234567890',
			date: '2021-06-19T06:16:01.876Z',
		}
		setCurrentUser(false)
		setPending(false)
	}, [])

	if (pending) {
		return <Loader/>
	}

	const login = (param) => {
		setPending(true)
		login_user(param).then(x => {
			if (x.data.auth) {
				setCurrentUser(x.data.user)
				setPending(false)
			}
		}).catch(err => {
			setCurrentUser(false)
			setPending(false)
			alert('Login failed')
		})	
	}
	
	const register = (params) => {
		console.log(params)
		setPending(true)
		let tmp ={
			is_active: true,
			is_verified: false,
			_id: '60cd8ba12db8e2469023fa93',
			full_name: 'Admin Page',
			email: 'admin@gmail.com',
			sex: 'Male',
			address: 'Battambang',
			phone_number: 'Battambang',
			identify_card_number: '1234567890',
			date: '2021-06-19T06:16:01.876Z',
		}

		// call register service with params

		setCurrentUser(tmp)
		setPending(false)
	}
	const logout = () => {
		setPending(true)
		// logout delete cookie

		setCurrentUser(false)
		setPending(false)
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				login,
				logout,
				register
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.node
}
export default AuthProvider