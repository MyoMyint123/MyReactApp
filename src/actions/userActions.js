import * as types from './actionTypes'


export function loadUsers(users) {
    return {
      type: types.LOAD_USERS,
      users
    };
  }