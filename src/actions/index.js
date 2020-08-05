export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_COINS = 'FETCH_TOP_COINS';
export const SORT_FILTER = 'SORT_FILTER';

const url = 'https://api.nomics.com/v1/currencies';
const getCoins = () => dispatch => {
  fetch(`${url}/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}`, { mode: 'cors' })
    .then(response => response.json())
    .then(resp => {
      if (resp) {
        dispatch({
          type: FETCH_TOP_COINS,
          payload: [resp.slice(0, 12), resp.slice(87, 99)],
        });
      }
    })
    .catch(err => {
      console.log('Error fetching data from nomics', err);
    });
};

export default getCoins;
