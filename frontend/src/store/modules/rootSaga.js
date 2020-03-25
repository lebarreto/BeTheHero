import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import incidents from './incidents/sagas';

export default function* rootSaga() {
	return yield all([auth, incidents]);
}
