import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

import {
	Container,
	Header,
	Logo,
	ButtonBack,
	Incident,
	IncidentProperty,
	IncidentValue,
	ContactBox,
	HeroTitle,
	HeroDescription,
	ViewButton,
	Action,
	ActionText
} from './styles';
import logoImg from '../../assets/logo.png';

export default function Details() {
	const navigation = useNavigation();
	const route = useRoute();

	const incident = route.params.incident;
	const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${
		incident.title
	} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

	function handleBack() {
		navigation.goBack();
	}

	function sendMail() {
		MailComposer.composeAsync({
			subject: `Herói do caso: ${incident.title}`,
			recipients: [incident.email],
			body: message
		});
	}

	function sendWhatsapp() {
		Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
	}

	return (
		<Container>
			<Header>
				<Logo source={logoImg} />
				<ButtonBack onPress={handleBack}>
					<Feather name="arrow-left" size={28} color="#E02041" />
				</ButtonBack>
			</Header>

			<Incident>
				<IncidentProperty>CASO: </IncidentProperty>
				<IncidentValue>{incident.title}</IncidentValue>

				<IncidentProperty>ONG: </IncidentProperty>
				<IncidentValue>
					{incident.name} de {incident.city}-{incident.uf}
				</IncidentValue>

				<IncidentProperty>DESCRIÇÃO: </IncidentProperty>
				<IncidentValue>{incident.description}</IncidentValue>

				<IncidentProperty>VALOR: </IncidentProperty>
				<IncidentValue>
					{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}
				</IncidentValue>
			</Incident>

			<ContactBox>
				<HeroTitle>Salve o dia!</HeroTitle>
				<HeroTitle>Seja o herói desse caso.</HeroTitle>

				<HeroDescription>Entre em contato:</HeroDescription>

				<ViewButton>
					<Action onPress={sendWhatsapp}>
						<ActionText>WhatsApp</ActionText>
					</Action>
					<Action onPress={sendMail}>
						<ActionText>E-mail</ActionText>
					</Action>
				</ViewButton>
			</ContactBox>
		</Container>
	);
}
