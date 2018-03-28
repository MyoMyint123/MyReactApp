import { combineReducers } from 'redux'
import { SELECT_SUBREDDIT, LOAD_USERS } from '../actions/actions'
import users from './userReducer'
 
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

 
const rootReducer = combineReducers({
  selectedSubreddit,
  users
})
 
export default rootReducer