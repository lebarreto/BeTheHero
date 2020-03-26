import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
	Container,
	Header,
	Logo,
	HeaderText,
	StrongText,
	Title,
	Description,
	IncidentList,
	Incident,
	IncidentProperty,
	IncidentValue,
	DetailsButton,
	BtnText
} from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function Incidents() {
	const navigation = useNavigation();

	const [incidents, setIncidents] = useState([]);
	const [total, setTotal] = useState(0);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	function navigateToDetails(incident) {
		navigation.navigate('Details', { incident });
	}

	async function loadIncidents() {
		if (loading) {
			return;
		}

		if (total > 0 && incidents.length === total) {
			return;
		}

		setLoading(true);

		const response = await api.get('incidents', {
			params: { page }
		});

		setIncidents([...incidents, ...response.data]);
		setTotal(response.headers['x-total-count']);
		setPage(page + 1);
		setLoading(false);
	}

	useEffect(() => {
		loadIncidents();
	}, []);

	return (
		<Container>
			<Header>
				<Logo source={logoImg} />
				<HeaderText>
					Total de
					<StrongText> {total} casos.</StrongText>
				</HeaderText>
			</Header>
			<Title>Bem-vindo!</Title>
			<Description>Escolha um dos casos abaixo e salve o dia.</Description>

			<IncidentList
				data={incidents}
				keyExtractor={incident => String(incident.id)}
				onEndReached={loadIncidents}
				onEndReachedThreshold={0.2}
				renderItem={({ item: incident }) => (
					<Incident>
						<IncidentProperty>CASO: </IncidentProperty>
						<IncidentValue>{incident.title}</IncidentValue>

						<IncidentProperty>ONG: </IncidentProperty>
						<IncidentValue>{incident.name}</IncidentValue>

						<IncidentProperty>VALOR: </IncidentProperty>
						<IncidentValue>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
						</IncidentValue>

						<DetailsButton onPress={() => navigateToDetails(incident)}>
							<BtnText>Ver mais detalhes</BtnText>
							<Feather name="arrow-right" size={16} color="#e02041" />
						</DetailsButton>
					</Incident>
				)}
			/>
		</Container>
	);
}
