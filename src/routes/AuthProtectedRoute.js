import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../hooks/useAuth'

const ProtectedRoutes = ({ Page, ...rest }) => {
	const { currentUser } = useContext(AuthContext)
	console.log(currentUser)
	const is_verified = currentUser?.is_verified
	console.log(currentUser)
	console.log(is_verified)
	return (
		<Route
			{...rest}
			render={routeProps =>
				currentUser? (
					!is_verified? 
						<Redirect to="/pending"/>:
						<Redirect to='/' />
				):(
					<Page routeProps />
				)}
		/>
	)
}

ProtectedRoutes.propTypes = {
	Page: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func
	])
}

export default ProtectedRoutes
