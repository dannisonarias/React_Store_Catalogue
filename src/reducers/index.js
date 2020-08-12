import { combineReducers } from 'redux';
import CoinReducer from './coin';
import filter from './filter';
import category from './category';
import coinData from './coinData';

const rootReducer = combineReducers({
  coin: CoinReducer,
  filter,
  category,
  coinData,
});

export default rootReducer;
