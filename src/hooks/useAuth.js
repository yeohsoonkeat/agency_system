import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loader from '@components/common/loader'
import { get_user_profile, login_user } from '../service/auth'
export const AuthContext = React.createContext()


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false)
	const [pending, setPending] = useState(true)


	useEffect(() => {
		// get user if user is login return user else message
		const token = localStorage.getItem('token')
		get_user_profile(token).then(x =>{			
			setCurrentUser(x.data)
			setPending(false)
		}).catch(err => {
			setCurrentUser(false)
			setPending(false)
		})
	}, [])

	if (pending) {
		return <Loader/>
	}

	const login = (param) => {
		setPending(true)
		login_user(param).then(x => {
			if (x.data.auth) {
				setCurrentUser(x.data.user)
				localStorage.setItem('token', x.data.token)
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

		setCurrentUser(tmp)
		setPending(false)
	}
	const logout = () => {
		setPending(true)
		localStorage.clear()
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