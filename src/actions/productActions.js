import * as types from './actionTypes'

 
export function loadProducts(products) {
  return {
    type: types.LOAD_PRODUCTS,
    products
  }
}


 
 