import { RANKING, PRICE, ALL_TIME_HIGH } from '../actions/index';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case RANKING:
      return action.payload;
    default:
      return state;
  }
}
