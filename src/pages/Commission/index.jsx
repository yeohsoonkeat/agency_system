import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import Receipt from './components/Receipt'
import CashOut from './view/CashOut'
import CommissionList from './view/CommissionList'
import NewCommison from './view/NewCommison'



export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={CommissionList} />
				<Route exact path={`${path}/new_commision`} component={NewCommison} />
				<Route path={`${path}/receipt`} component={Receipt} />
				<Route exact path={`${path}/:id/cashout/:agencyId`} component={CashOut} />
				<Route path={`${path}/:id`} component={CommissionList}/>
				<Route path={`${path}/edit/:id`} component={CommissionList} />
				<Redirect from="*" to="/404" />
			</Switch>
		</>
	)
}