import fetch from 'cross-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const LOAD_USERS = 'LOAD_USERS';
 
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users
  };
}

 
 