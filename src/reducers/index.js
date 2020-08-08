import { combineReducers } from 'redux';
import CoinReducer from './coin';
import filter from './filter';
import category from './category';

const rootReducer = combineReducers({
  coin: CoinReducer,
  filter,
  category,
});

export default rootReducer;
