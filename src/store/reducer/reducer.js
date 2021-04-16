const defaultState = {
   flats: [],
   likeFlats: []
}

const ADD_ALL_FLATS = 'ADD_ALL_FLATS';
const LIKE_FLAT = 'LIKE_FLAT';
const DISLIKE_FLAT = 'DISLIKE_FLAT';


export const flatReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_ALL_FLATS:
         return {
            ...state,
            flats: [...action.payload]
         }
      case LIKE_FLAT:
         const id = action.payload;
         const filteredLike = state.flats.filter(item => item.id === id)
         return {
            ...state,
            likeFlats: [...state.likeFlats, ...filteredLike]
         }
      case DISLIKE_FLAT:
         const idDis = action.payload;
         const filteredDis = state.likeFlats.filter(item => item.id !== idDis)
         return {
            ...state,
            likeFlats: [...filteredDis]
         }

      default:
         return state
   }

}
export const addAllFlatsAction = (payload) => ({ type: ADD_ALL_FLATS, payload });

export const addLikeFlatAction = (payload) => ({ type: LIKE_FLAT, payload });

export const addDisLikeFlatAction = (payload) => ({ type: DISLIKE_FLAT, payload });