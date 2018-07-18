import { combineReducers } from 'redux';

import { UPDATE_VENUES, ADD_FAVORITE, GET_VENUES, RECEIVE_VENUES } from "./actions";



////// REDUCERS

// const favoriteReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case "ADD_FAVORITE":
//             return {
//                 favorites: [...state.favorites, action.favorite]
//             }
//         default:
//             return state;
//     }
// }

//// Handle reducers for VENUE requests
export default function venues(
    state = {
      isFetching: false,
      didInvalidate: false,
      venues: []
    },
    action
  ) {
    switch (action.type) {
      case UPDATE_VENUES:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case ADD_FAVORITE:
        return Object.assign({}, state,{
          venues: state.venues.map(venue => {
            if(action.id === venue.venue.id) venue.favorited = true;
            return venue;
          })
        })
      case RECEIVE_VENUES:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          venues: action.venues
        })
      default:
        return state
    }
  }


  /////// FAVORITES
  // function addFavoriteReducer(state = {}, action) {
  //   switch (action.type) {
  //     case ADD_FAVORITE:
  //       return Object.assign({}, state, {
  //         [action.venues]: posts(state[action.venues], action)
  //       })
  //     default:
  //       return state
  //   }
  // }

  // function removeFavoriteReducer(state = {}, action) {
  //   switch (action.type) {
  //     case REMOVE_FAVORITE:
  //       return Object.assign({}, state, {
  //         [action.venues]: posts(state[action.venues], action)
  //       })
  //     default:
  //       return state
  //   }
  // }


  