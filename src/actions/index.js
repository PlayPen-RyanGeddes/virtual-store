'use strict';

import axios from 'axios';

let api = 'https://auth-deployment.herokuapp.com/api/v1/swears';

export const toggleFood = () => {
  return {
    type: "FOOD",
  }
}

export const toggleElectronics = () => {
  return {
    type: "ELECTRONICS",
  }
}

export const addCartAction = (product) => {
  return{
    type: 'ADDCART',
    payload: product
  }

}

export const get = () => async dispatch => {
  const response = await axios.get(api);
  const items = response.data.results;
  dispatch({
    type: "GET",
    payload: items
  });
}

export const put = (payload) => async dispatch => {
  await axios.put(`${api}/${payload._id}`, payload);
  dispatch(get())
}