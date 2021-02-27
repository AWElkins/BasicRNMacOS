import {createReducer} from '@reduxjs/toolkit';
import {BASIC_TYPE} from '../types';

const initialState = {};

export default createReducer(initialState, {
  [BASIC_TYPE]: (state) => {
    state;
  },
});
