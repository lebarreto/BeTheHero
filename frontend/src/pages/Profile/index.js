import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import * as Actions from '../../store/modules/incidents/actions';
import * as AuthActions from '../../store/modules/auth/actions';

export default function Profile() {
	const info = useSelector(state => state.auth.name);
	const ongId = useSelector(state => state.auth.id);

	const [incidents, setIncidents] = useState([]);

	const dispatch = useDispatch();

	function handleDelete(id, ongId) {
		dispatch(Actions.deleteRequest(id, ongId));

		setIncidents(incidents.filter(incident => incident.id !== id));
	}

	function handleLogout() {
		dispatch(AuthActions.signOut());
	}

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongId
			}
		}).then(response => {
			setIncidents(response.data);
		});
	}, [ongId]);

	return (
		<Container>
			<header>
				<img src={logo} alt="Be The Hero" />
				<span>Bem vinda, {info.name}</span>

				<Link className="button" to="/incidents/new">
					Cadastrar novo caso
				</Link>
				<button type="button" onClick={handleLogout}>
					<FiPower size={18} color="#E02041" />
				</button>
			</header>

			<h1>Casos cadastrados</h1>

			<ul>
				{incidents.map(incident => (
					<li key={incident.id}>
						<strong>CASO:</strong>
						<p>{incident.title} </p>

						<strong>DESCRIÇÃO</strong>
						<p>{incident.description}</p>

						<strong>VALOR</strong>
						<p>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}{' '}
						</p>

						<button type="button" onClick={() => handleDelete(incident.id, ongId)}>
							<FiTrash2 size={20} color="#A8A8B3" />
						</button>
					</li>
				))}
			</ul>
		</Container>
	);
}
