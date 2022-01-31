import {
  FETCH_COIN_DATA,
  FETCH_COIN_FAILURE,
  FETCH_COIN_SUCCESS,
} from "../actions/index";

const initialState = { loading: true, coinData: null, error: "" };

const coinData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return { ...state, loading: true };
    case FETCH_COIN_FAILURE:
      return { users: [], loading: false, error: action.payload };
    case FETCH_COIN_SUCCESS:
      return {
        loading: false,
        coinData: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default coinData;
