import { FETCH_TOP_COINS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TOP_COINS:
      // concat doesn't mutate existing state, it returns new state.
      return state.concat([action.payload]);
    default:
      return state;
  }
}
