import * as types from './actionTypes'
import ProductApi from '../services/api2'

 
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
    return ProductApi.createProduct(product).then(responseProduct => {
      dispatch(createProductSuccess(responseProduct));
      return responseProduct;
    }).catch(error => {
      throw(error);
    });
  };
}


 
 