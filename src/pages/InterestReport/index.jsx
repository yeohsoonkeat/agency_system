import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import InterestReport from './views/InterestReport'
export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={InterestReport} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
