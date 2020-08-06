import { TOGGLE_CATEGORY } from '../actions/index';

const initialState = { category: 'Actively Traded' };

const coins = (state = initialState, action) => {
  switch (action.type) {
    case 'ASC_RANK':
      return { ...state, activeItem: 'ASC_RANK' };
    case 'DESC_RANK':
      return { ...state, activeItem: 'DESC_RANK' };
    case 'PRICE':
      return { ...state, activeItem: 'PRICE' };
    default:
      return state;
  }
};

export default coins;
