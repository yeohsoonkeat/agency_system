import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import PendingRegister from './views/PendingRegister'
export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={PendingRegister} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
