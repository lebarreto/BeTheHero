import { all, takeLatest, call } from 'redux-saga/effects';
import swal from 'sweetalert';

import api from '../../../services/api';
import history from '../../../services/history';

export function* deleteIncident({ payload }) {
	try {
		const { id, ongId } = payload;

		yield call(api.delete, `incidents/${id}`, {
			headers: {
				Authorization: ongId
			}
		});

		swal('Sucesso', 'Incidente deletado com sucesso!', 'success').then(value => {
			if (value) {
				history.push('/profile');
			}
		});
	} catch (error) {
		swal('Falha ao deletar', '', 'error');
	}
}

export function* addIncident({ payload }) {
	try {
		const { ongId } = payload;

		yield call(api.post, 'incidents', payload, {
			headers: {
				Authorization: ongId
			}
		});

		swal('Sucesso', 'Incidente criado com sucesso!', 'success').then(value => {
			if (value) {
				history.push('/profile');
			}
		});
	} catch (error) {
		swal('Falha ao criar um caso', 'Verifique os campos.', 'error');
	}
}

export default all([
	takeLatest('@incidents/ADD_REQUEST', addIncident),
	takeLatest('@incidents/DELETE_REQUEST', deleteIncident)
]);
