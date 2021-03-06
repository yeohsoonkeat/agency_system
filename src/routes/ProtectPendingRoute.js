import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../hooks/useAuth'

const ProtectedPendingRoutes = ({ Page, ...rest }) => {
	const { currentUser } = useContext(AuthContext)
	const is_verified = currentUser?.is_verified
	return (
		<Route
			{...rest}
			render={routeProps =>
				currentUser?  (
					!is_verified?
						<Page routeProps/>:
						<Redirect to="/"/>
				):(
					<Redirect to={'/auth'} />
				)}
		/>
	)
}

ProtectedPendingRoutes.propTypes = {
	Page: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.func
	])
}

export default ProtectedPendingRoutes
