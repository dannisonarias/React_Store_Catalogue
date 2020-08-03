import { FETCH_COIN } from '../actions/index';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COIN:
      return action.payload;
    default:
      return state;
  }
}
