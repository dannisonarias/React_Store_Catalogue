export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_TEN_COINS = 'FETCH_TOP_TEN_COINS';

const url = 'https://api.nomics.com/v1/currencies';
const getCoins = () => dispatch => {
  fetch(`${url}/ticker?key=${process.env.REACT_APP_NOMICS_API_KEY}`, { mode: 'cors' })
    .then(response => response.json())
    .then(resp => {
      dispatch({
        type: FETCH_TOP_TEN_COINS,
        payload: resp,
      });
      console.log('API call response:', resp);
    })
    .catch(err => {
      console.log('Error fetching data from nomics', err);
    });
};

export default getCoins;
