import * as types from './actionTypes'

 
export function selectSubreddit(subreddit) {
  return {
    type: types.SELECT_SUBREDDIT,
    subreddit
  }
}


 
 