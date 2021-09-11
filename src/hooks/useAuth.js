import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loader from '@components/common/loader'
import { get_user_profile, login_user, register_user } from '../service/auth'
import { set } from 'react-hook-form'
import { stringify } from 'postcss'
export const AuthContext = React.createContext()
import { changeLanguage } from './useTranslation'


const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false)
	const [pending, setPending] = useState(false)
	const [error, setError] = useState(false)


	useEffect(() => {
		// get user if user is login return user else message
		const token = localStorage.getItem('token')
		setPending(true)
		get_user_profile(token).then(x =>{			
			setCurrentUser(x.data)
			setPending(false)
		}).catch(err => {
			setCurrentUser(false)
			setPending(false)
		})
		setPending(false)
	}, [])

	if (pending) {
		if(error){
			return (
				<Loader error={true}/>
			)
		}
		return <Loader/>
	}

	const login = (param) => {
		setPending(true)
		login_user(param).then(x => {
			if (x.data.auth) {
				console.log(x.data)
				setCurrentUser(x.data.user)
				localStorage.setItem('token', x.data.token)
				localStorage.setItem('user', JSON.stringify(x.data.user))
				changeLanguage(localStorage.setItem('i18nextLng', 'kh'))
				setPending(false)
			}
		}).catch(err => {
			setCurrentUser(false)
			// setPending(false)
			setError(true)
			// alert('Login failed')
		})
	}

	const registerAuth = (param) => {
		setPending(true)
		register_user(param).then(x => {
			setCurrentUser(x.data.user)
			localStorage.setItem('token', x.data.token)
			localStorage.setItem('user', JSON.stringify(x.data.user))
			setPending(false)
		}).catch(err => {
			setCurrentUser(false)
			setPending(false)
			alert('Login failed')
		})
	}
	const logout = () => {
		setPending(true)
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		setCurrentUser(false)
		setPending(false)
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				login,
				logout,
				registerAuth
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