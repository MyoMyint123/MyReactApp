import * as types from './actionTypes';
// import catApi from '../api/CatsApi';

export function loadCatsSuccess() {
  return {type: types.LOAD_CATS_SUCCESS};
}

// export function loadCats() {
//     // make async call to api, handle promise, dispatch action when promise is resolved
//     return function(dispatch) {
//       console.log(catApi.getAllCats());
//       return catApi.getAllCats().then(cats => {
//         dispatch(loadCatsSuccess(cats));
//       }).catch(error => { 
//         throw(error);
//       });
//     };
//   }



