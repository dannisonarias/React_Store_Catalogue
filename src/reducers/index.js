import { combineReducers } from 'redux';
import CoinReducer from './coin';
import TopTenCoins from './topTenCoins';

const rootReducer = combineReducers({
  coin: CoinReducer,
  topTen: TopTenCoins,
});

export default rootReducer;
