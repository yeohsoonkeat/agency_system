import React, { lazy, Suspense} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import ProtectedRoute from './routes/ProtectedRoute'
import BaseLayout from '@components/layout/base/index'
import Loader from '@components/common/loader'
// import ProtectedFormRoute from 'routes/ProtectedFormRoute'
import ProtectedPendingRoute from './routes/ProtectPendingRoute'
import AuthProvider from './hooks/useAuth'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(()=>import('./pages/Login'))
const NotFoundPage = lazy(() => import('./pages/404-page'))
const Agent = lazy(() => import('./pages/Agent'))
const Plan = lazy(() => import('./pages/Plan'))
const Commission = lazy(() => import('./pages/Commission'))
const SignupForm = lazy(() => import('./pages/Login/components/form'))
const Pending = lazy(() => import('./pages/Login/components/Pending'))



const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Suspense fallback={<Loader/>}>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/404' component={NotFoundPage} /> 
						<Route exact path='/signupform' component={SignupForm} /> 
						<ProtectedPendingRoute path="/pending"component={Pending} />

						<BaseLayout>
							<Switch>
								<ProtectedRoute exact path="/" Page={Dashboard}/>
								<ProtectedRoute  path="/agent" Page={Agent} />
								<ProtectedRoute  path="/plan" Page={Plan} />
								<ProtectedRoute  path="/commission" Page={Commission} />
								{/* <Redirect from='*' to='/404' /> */}
							</Switch>
						</BaseLayout>
					</Switch>
				</Suspense>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
