import { TOGGLE_CATEGORY } from '../actions/index';

const initialState = 'Actively Traded';

const coins = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY: {
      const selected = (action.payload === 'Actively Traded' ? 'Actively Traded' : 'Dead Coins');
      return selected;
    }
    default:
      return state;
  }
};

export default coins;
