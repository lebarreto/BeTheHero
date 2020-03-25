import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import * as Actions from '../../store/modules/incidents/actions';

export default function NewIncident() {
	const dispatch = useDispatch();

	const ongId = useSelector(state => state.auth.id);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(Actions.addRequest(title, description, value, ongId));
	}

	return (
		<Container>
			<Content>
				<section>
					<img src={logo} alt="Be The Hero" />
					<h1>Cadastrar novo caso</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#E02041" />
						Voltar para home
					</Link>
				</section>
				<form onSubmit={handleSubmit}>
					<input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)} />
					<textarea
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)} />

					<button className="button" type="submit">
						Cadastrar
					</button>
				</form>
			</Content>
		</Container>
	);
}
