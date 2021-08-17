import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import ActivityLog from './views/ActivityLog'
export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={ActivityLog} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
