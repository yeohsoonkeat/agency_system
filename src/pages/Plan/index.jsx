import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import NewPlan from './view/NewPlan'
import PlanList from './view/PlanList'


export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={PlanList} />
				<Route exact path={`${path}/new_plan`} component={NewPlan} />
				<Route path={`${path}/:id`} component={PlanList} />
				<Route path={`${path}/edit/:id`} component={PlanList} />
				<Redirect from="*" to="/404" />
			</Switch>
		</>
	)
}
