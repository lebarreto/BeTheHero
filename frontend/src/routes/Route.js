import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../config/ReactotronConfig';
import { store } from '../store';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
	const { signed } = store.getState().auth;

	if (!signed && isPrivate) {
		return <Redirect to="/" />;
	}

	if (signed && !isPrivate) {
		return <Redirect to="/profile" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool
};

RouteWrapper.defaultProps = {
	isPrivate: false
};
