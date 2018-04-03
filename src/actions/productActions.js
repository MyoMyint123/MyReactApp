import * as types from './actionTypes'
import { createProductApi } from '../services/api'

 
export function loadProducts(products) {
  return {
    type: types.LOAD_PRODUCTS,
    products
  }
}

export function createProductSuccess(product) {
  return {type: types.CREATE_PRODUCT_SUCCESS, product}
}

export function createProduct(product) {
  return function (dispatch) {
    return createProductApi(product).then(responseProduct => {
      dispatch(createProductSuccess(responseProduct));
      // return responseProduct;
    }).catch(error => {
      throw(error);
    });
  };
}


 
 