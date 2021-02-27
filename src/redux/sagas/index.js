import {all} from 'redux-saga/effects';

import basic from './basic';

export default function* rootSaga() {
  yield all([basic()]);
}
