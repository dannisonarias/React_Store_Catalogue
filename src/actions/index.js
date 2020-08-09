export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_COINS = 'FETCH_TOP_COINS';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const ASC_RANK = 'ASC_RANK';
export const DESC_RANK = 'DESC_RANK';
export const PRICE = 'PRICE';
export const FETCH_COIN_DATA = 'FETCH_COIN_DATA';
export const FETCH_COIN_FAILURE = 'FETCH_COIN_FAILURE';
export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS';

// action creators
export const selectCategory = category => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});

const fetchCoinData = () => ({
  type: FETCH_COIN_DATA,
});
const fetchCoinSuccess = data => ({
  type: FETCH_COIN_SUCCESS,
  payload: data,
});
const fetchCoinFailure = error => ({
  type: FETCH_COIN_FAILURE,
  payload: error,
});

// api request action creators

const url = 'https://api.nomics.com/v1/currencies';

export const getCoinData = symbol => {
  return dispatch => {
    dispatch(fetchCoinData());
    fetch(`${url}/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${symbol}`, { mode: 'cors' })
      .then(res => res.json())
      .then(response => dispatch(fetchCoinSuccess((response))))
      .catch(error => dispatch(fetchCoinFailure(error)));
  };
};

const getCoins = () => dispatch => {
  fetch(`${url}/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}`, { mode: 'cors' })
    .then(response => response.json())
    .then(resp => {
      if (resp) {
        dispatch({
          type: FETCH_TOP_COINS,
          // select first 12 and last 12 coins
          payload: [resp.slice(0, 12), resp.slice(resp.length - 13, resp.length)],
        });
      }
    })
    .catch(err => {
      console.log('Error fetching data from nomics', err);
    });
};

export default getCoins;
