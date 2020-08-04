import { combineReducers } from 'redux';
import CoinReducer from './coin';
import filter from './filter';

const rootReducer = combineReducers({
  coin: CoinReducer,
  filter,
});

export default rootReducer;
