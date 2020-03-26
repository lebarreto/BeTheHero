import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	margin: 60px 24px;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.Image``;

export const ButtonBack = styled.TouchableOpacity``;

export const Incident = styled.View`
	padding: 24px;
	border-radius: 8px;
	background-color: #fff;
	margin-bottom: 16px;
	margin-top: 50px;
`;

export const IncidentProperty = styled.Text`
	font-size: 14px;
	color: #41414d;
	font-weight: bold;
`;

export const IncidentValue = styled.Text`
	margin-top: 8px;
	font-size: 15px;
	color: #737380;
	margin-bottom: 24px;
`;

export const ContactBox = styled.View`
	padding: 24px;
	border-radius: 8px;
	background-color: #fff;
	margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #13131a;
	line-height: 30px;
`;

export const HeroDescription = styled.Text`
	font-size: 15px;
	color: #737380;
	margin-top: 16px;
`;

export const ViewButton = styled.View`
	margin-top: 16px;
	flex-direction: row;
	justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
	background-color: #e02041;
	border-radius: 8px;
	height: 50px;
	width: 48%;
	justify-content: center;
	align-items: center;
`;

export const ActionText = styled.Text`
	color: #fff;
	font-size: 15px;
	font-weight: bold;
`;
