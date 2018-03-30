import * as types from '../actions/actionTypes'

export default function users(state = [], action){
    switch (action.type) {
      case types.LOAD_USERS:
        return action.users
      default:
        return state
    }
  }

