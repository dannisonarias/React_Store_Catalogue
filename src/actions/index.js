import KEY from "../API/cred.js";
export const FETCH_COIN = "FETCH_COIN";
export const FETCH_TOP_COINS = "FETCH_TOP_COINS";
export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";
export const ASC_RANK = "ASC_RANK";
export const DESC_RANK = "DESC_RANK";
export const PRICE = "PRICE";
export const FETCH_COIN_DATA = "FETCH_COIN_DATA";
export const FETCH_COIN_FAILURE = "FETCH_COIN_FAILURE";
export const FETCH_COIN_SUCCESS = "FETCH_COIN_SUCCESS";
// action creators
export const selectCategory = (category) => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});

const fetchCoinData = () => ({
  type: FETCH_COIN_DATA,
});
const fetchCoinSuccess = (data) => ({
  type: FETCH_COIN_SUCCESS,
  payload: data,
});
const fetchCoinFailure = (error) => ({
  type: FETCH_COIN_FAILURE,
  payload: error,
});

// api request action creators

const url = "https://coinlib.io/api/v1";

export const getCoinData = (symbol) => (dispatch) => {
  dispatch(fetchCoinData());
  fetch(`${url}/coin?key=${KEY}&symbol=${symbol}`, { mode: "cors" })
    .then((res) => res.json())
    .then((response) => {
      dispatch(fetchCoinSuccess(response));
    })
    .catch((error) => dispatch(fetchCoinFailure(error)));
};

const getCoins = () => (dispatch) => {
  fetch(`${url}/coinlist?key=${KEY}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((resp) => {
      if (resp) {
        dispatch({
          type: FETCH_TOP_COINS,
          // select first 12 and last 12 coins

          payload: [
            resp.coins.slice(0, 12),
            resp.coins.slice(resp.coins.length - 13, resp.coins.length),
          ],
        });
      }
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log("Error fetching data from COINLIB", err);
    });
};

export default getCoins;
