import {takeEvery} from 'redux-saga/effects';
import {BASIC_TYPE} from '../types';

function* basicSaga() {
  try {
    console.log('BASIC SAGA');
  } catch (error) {
    console.error(error);
  }
}

export default function* basic() {
  yield takeEvery(BASIC_TYPE, basicSaga);
}
