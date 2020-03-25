export function addRequest(title, description, value, ongId) {
	return {
		type: '@incidents/ADD_REQUEST',
		payload: {
			title,
			description,
			value,
			ongId
		}
	};
}

export function deleteRequest(id, ongId) {
	return {
		type: '@incidents/DELETE_REQUEST',
		payload: {
			id,
			ongId
		}
	};
}
