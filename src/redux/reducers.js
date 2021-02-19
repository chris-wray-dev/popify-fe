import { combineReducers } from 'redux';
import searchData from './search/reducer';

const reducers = combineReducers({
  searchData,
});

export default reducers;
