import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import AgentReport from './views/AgentReport'

export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={AgentReport} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
