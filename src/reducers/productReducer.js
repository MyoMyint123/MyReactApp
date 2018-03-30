import * as types from '../actions/actionTypes'

export default function products(state = [], action){
    switch (action.type) {
      case types.LOAD_PRODUCTS:
        return action.products
      default:
        return state
    }
  }

