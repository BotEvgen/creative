const defaultState = {
   flats: [],
   likeFlats: []
}

const ADD_ALL_FLATS = 'ADD_ALL_FLATS';
const LIKE_FLAT = 'LIKE_FLAT'

export const flatReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_ALL_FLATS:
         return {
            ...state,
            flats: [...action.payload]
         }
      case LIKE_FLAT:
         const id = action.payload;
         const islikedNow = action.isLike;
         const filtered = state.flats.filter(item => item.id === id)
         return {
            ...state,
            likeFlats: [...state.likeFlats, ...filtered]
         }

      default:
         return state
   }

}


export const addAllFlatsAction = (payload) => ({ type: ADD_ALL_FLATS, payload });

export const addLikeFlatAction = (payload, isLike) => ({ type: LIKE_FLAT, payload, isLike });