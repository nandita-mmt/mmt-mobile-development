import { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Load from '../Components/Loader/Loader';

import { ROUTES } from './routesConfig';
import Blog from '../Pages/Blog/Blog';
import BlogDetails from '../Pages/BlogDetails/BlogDetails';

const RouteWithSubRoutes = ({ isPrivate, isEager, path, exact, routes, component: Component }) => {
	return (
		<Route
			path={path}
			exact={exact}
			render={routerProps => {
				if (isPrivate) {
					return (
						<Redirect
							to={{
								pathname: '/magicmind-new',
								state: {
									from: routerProps.location,
								},
							}}
						/>
					);
				}
				return isEager ? (
					<Component routes={routes} {...routerProps} />
				) : (
					<Suspense fallback={<Load />}>
						<Component routes={routes} {...routerProps} />
					</Suspense>
				);
			}}
		/>
	);
};

const RoutesWrapper = () => {
	return (
		<Switch>
			{ROUTES.map(route => (
				<RouteWithSubRoutes {...route} key={route.path} />
			))}
			{/* <Route component={NotFound} /> */}
			<Route exact path="/blog/:slug">
            	<BlogDetails />
          	</Route>
			<Route exact path="/blog">
            	<Blog />
          	</Route>
		</Switch>
	);
};

export default RoutesWrapper;
