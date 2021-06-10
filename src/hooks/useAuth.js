import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Loader from '@components/common/loader'
export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [pending, setPending] = useState(true)


	useEffect(() => {
		const tmp = {
			email:'email',
			name: 'test'
		}
		setCurrentUser(tmp)
		setPending(false)
	}, [])

	if (pending) {
		return <Loader/>
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser
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