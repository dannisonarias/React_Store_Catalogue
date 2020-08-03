import { FETCH_COIN } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COIN:
      // concat doesn't mutate existing state, it returns new state.
      return state.concat([action.payload]);
    default:
      return state;
  }
}
