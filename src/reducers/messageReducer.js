import * as types from '../actions/actionTypes'
// import {browserHistory} from 'react-router-redux';

  export default function messages(state = [], action){
    switch (action.type) {
        case types.CREATE_PRODUCT_SUCCESS:
            // browserHistory.push('/products');
            return action.message;      
        case types.UPDATE_PRODUCT_SUCCESS:
            // browserHistory.push('/products');
            return action.message;    
        case types.DELETE_PRODUCT_SUCCESS:
            // browserHistory.push('/products');
            return action.message;
        default:
            return {'danger':'MMMMMMMM'}
    }
  }

