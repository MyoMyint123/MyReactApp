import * as types from './actionTypes'
import { createProductApi, updateProductApi, deleteProductApi, loadProductsApi } from '../services/api'

 
export function loadProductsSuccess(products) {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products
  }
}
export function loadProducts() {
  return function (dispatch) {
    return loadProductsApi().then(responseProduct => {
      dispatch(loadProductsSuccess(responseProduct));
      // return responseProduct;
    }).catch(error => {
      throw(error);
    });
  };
}

export function createProductSuccess(message) {
  return {type: types.CREATE_PRODUCT_SUCCESS, message}
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

export function updateProductSuccess(message) {
  return {type: types.UPDATE_PRODUCT_SUCCESS, message}
}

export function updateProduct(product) {
  return function (dispatch) {
    return updateProductApi(product).then(responseProduct => {
      dispatch(updateProductSuccess(responseProduct));
      // return responseProduct;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteProductSuccess(message) {
  return {type: types.DELETE_PRODUCT_SUCCESS, message}
}

export function deleteProduct(product) {
  return function (dispatch) {
    return deleteProductApi(product).then(responseProduct => {
      dispatch(deleteProductSuccess(responseProduct));
      // return responseProduct;
      console.log(responseProduct)
    }).catch(error => {
      throw(error);
    });
  };
}


 
 