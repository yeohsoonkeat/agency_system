import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import AgentList from './view/AgentList'
import NewAgent from './view/NewAgent'
import Agent from './view/Agent'
import Org from './view/Org'
import EditAgent from './view/EditAgent'

export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={AgentList} />
				<Route exact path={`${path}/new_agent`} component={NewAgent} />
				<Route path={`${path}/edit/:id`} component={EditAgent} />

				<Route path={`${path}/:id`} component={Org} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
