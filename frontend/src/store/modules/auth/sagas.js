import { all, takeLatest, call, put } from 'redux-saga/effects';
import swal from 'sweetalert';

import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
	try {
		const { id } = payload;

		const response = yield call(api.post, 'sessions', {
			id
		});

		yield put(signInSuccess(id, response.data));

		history.push('/profile');
	} catch (error) {
		yield put(signFailure());
		swal('Falha no logon', 'Verifique seus dados.', 'error');
	}
}

export function* signUp({ payload }) {
	try {
		const { name, email, whatsapp, city, uf } = payload;

		const response = yield call(api.post, 'ongs', {
			name,
			email,
			whatsapp,
			city,
			uf
		});

		swal(`Seu ID: ${response.data.id}`, 'Cadastro realizado com sucesso!', 'success').then(value => {
			if (value) {
				history.push('/');
			}
		});
	} catch (error) {
		swal('Falha no cadastro', 'Verifique seus dados.', 'error');
	}
}

export function setToken({ payload }) {
	if (!payload) {
		return;
	}

	const { token } = payload.auth;
	if (token) {
		api.defaults.headers['Authorization'] = `Bearer ${token}`;
	}
}

export function signOut() {
	history.push('/');
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_OUT', signOut)
]);
