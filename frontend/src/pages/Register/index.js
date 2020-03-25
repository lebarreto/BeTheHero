import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import * as Actions from '../../store/modules/auth/actions';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');

	const dispatch = useDispatch();

	function handleRegister(e) {
		e.preventDefault();
		dispatch(Actions.signUpRequest(name, email, whatsapp, city, uf));
	}

	return (
		<Container>
			<Content>
				<section>
					<img src={logo} alt="Be The Hero" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02041" />
						Voltar para o logon
					</Link>
				</section>
				<form onSubmit={handleRegister}>
					<input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
					<input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
					<input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

					<div>
						<input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
						<input
							placeholder="UF"
							style={{ width: 80 }}
							value={uf}
							onChange={e => setUf(e.target.value)}
						/>
					</div>

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</Content>
		</Container>
	);
}
