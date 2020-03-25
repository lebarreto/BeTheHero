import produce from 'immer';

const initialState = {
	signed: false,
	name: null,
	id: null
};

export default function auth(state = initialState, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_SUCCESS': {
				draft.name = action.payload.name;
				draft.id = action.payload.id;
				draft.signed = true;
				break;
			}
			case '@auth/SIGN_OUT': {
				draft.signed = false;
				draft.name = null;
				draft.id = null;
				break;
			}
			default:
				return state;
		}
	});
}
