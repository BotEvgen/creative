import { addAllFlatsAction, addErrorAction } from '../store/reducer/reducer';

export const fetchFlats = () => {
   return function (dispatch) {
      fetch('http://localhost:3000/response')
         .then(response => response.json())
         .then(json => dispatch(addAllFlatsAction(json)))
         .catch(e => dispatch(addErrorAction()))
   }
}