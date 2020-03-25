import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';
import Route from './Route';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/profile" component={Profile} isPrivate />
			<Route path="/incidents/new" component={NewIncident} isPrivate />
		</Switch>
	);
}
