import { combineReducers } from 'redux'
import selectedSubreddit from './selectedSubreddit'
import users from './userReducer'
import products from './productReducer'
import messages from './messageReducer'


const rootReducer = combineReducers({
    selectedSubreddit,
    users,
    products,
    messages
  })
   
export default rootReducer