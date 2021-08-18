import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import User from './views/User'
export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={User} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
