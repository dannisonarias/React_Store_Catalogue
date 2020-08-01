import KEY from '../API/cred';

export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_TEN_COINS = 'FETCH_TOP_TEN_COINS';
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';
const API_ENDPOINT_TOP10 = `${url}listings/latest?limit=10&CMC_PRO_API_KEY=${KEY}`;

const getTopTen = () => dispatch => {
  fetch(API_ENDPOINT_TOP10, { mode: 'no-cors' })
    .then(res => res.json())
    .then(coins => {
      dispatch({
        type: FETCH_TOP_TEN_COINS,
        payload: coins,
      });
    });
};

export default getTopTen;
