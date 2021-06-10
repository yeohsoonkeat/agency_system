import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../hooks/useAuth'

const ProtectedPendingRoutes = ({ Page, ...rest }) => {
	const { currentUser } = useContext(AuthContext)
	const approved = currentUser?.approved || true
	return (
		<Route
			{...rest}
			render={routeProps =>
				currentUser?  (
					!approved?
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
