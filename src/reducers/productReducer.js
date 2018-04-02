import * as types from '../actions/actionTypes'

export default function products(state = [], action){
    switch (action.type) {
      case types.LOAD_PRODUCTS:
        return action.products
      case types.CREATE_PRODUCT_SUCCESS:
        return Object.assign({}, {'product':action.product})      
      default:
        return state
    }
  }

