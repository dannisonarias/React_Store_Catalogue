export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_COINS = 'FETCH_TOP_COINS';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const ASC_RANK = 'ASC_RANK';
export const DESC_RANK = 'DESC_RANK';
export const PRICE = 'PRICE';

const url = 'https://api.nomics.com/v1/currencies';
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
