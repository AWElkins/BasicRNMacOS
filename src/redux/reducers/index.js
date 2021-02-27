import {combineReducers} from 'redux';

import basic from './basic';
import navigator from './navigator';

export default combineReducers({
  basic,
  navigator,
});
