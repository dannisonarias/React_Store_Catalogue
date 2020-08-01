import { FETCH_TOP_TEN_COINS } from '../actions/index';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_TEN_COINS:
      return action.payload;
    default:
      return state;
  }
}
