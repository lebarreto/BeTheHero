import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import * as Actions from '../../store/modules/auth/actions';

export default function Login() {
	const [id, setId] = useState('');

	const dispatch = useDispatch();

	function handleLogin(e) {
		e.preventDefault();
		dispatch(Actions.signInRequest(id));
	}

	return (
		<Container>
			<section>
				<img src={logo} alt="Be The Hero" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>
					<input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
					<button type="submit" className="button">
						Entrar
					</button>

					<Link to="/register" className="back-link">
						<FiLogIn size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={heroesImg} alt="Be The Hero" />
		</Container>
	);
}
