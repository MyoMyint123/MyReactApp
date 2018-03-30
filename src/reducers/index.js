import { combineReducers } from 'redux'
import selectedSubreddit from './selectedSubreddit'
import users from './userReducer';
import products from './productReducer';


const rootReducer = combineReducers({
    selectedSubreddit,
    users,
    products
  })
   
export default rootReducer