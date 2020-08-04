import { SORT_FILTER } from '../actions/index';

const initialState = { activeItem: 'RANK' };

const coins = (state = initialState, action) => {
  switch (action.type) {
    case 'DESC_RANK':
      return { ...state, activeItem: 'DESC_RANK' };
    case 'RANK':
      return { ...state, activeItem: 'RANK' };
    case 'PRICE':
      return { ...state, activeItem: 'PRICE' };
    default:
      return state;
  }
};

export default coins;
