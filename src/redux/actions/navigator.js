import {SET_APP_STATE, SET_APP_SCREEN} from '../types';

export const setAppState = (data) => ({
  type: SET_APP_STATE,
  data,
});

export const setAppScreen = (data) => ({
  type: SET_APP_SCREEN,
  data,
});
