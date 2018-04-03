import * as types from '../actions/actionTypes'
// import {browserHistory} from 'react-router-redux';

export default function products(state = [], action){
    switch (action.type) {
      case types.LOAD_PRODUCTS:
        return action.products
      case types.CREATE_PRODUCT_SUCCESS:
        // browserHistory.push('/products');
        return state      
      default:
        return state
    }
  }

