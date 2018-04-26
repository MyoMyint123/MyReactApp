import * as types from '../actions/actionTypes'
// import {browserHistory} from 'react-router-redux';

export default function products(state = [], action){
    switch (action.type) {
      case types.LOAD_PRODUCTS_SUCCESS:
        return action.products
      default:
        return state
    }
  }

