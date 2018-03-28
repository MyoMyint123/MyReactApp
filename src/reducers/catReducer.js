import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function catReducer(state = initialState.cats, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      // return action.cats;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
     return Object.assign([], state, {'name':'Myo'})
    default: 
      return state;
  }
}
