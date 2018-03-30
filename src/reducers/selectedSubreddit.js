import * as types from '../actions/actionTypes'
 
export default function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case types.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

 
