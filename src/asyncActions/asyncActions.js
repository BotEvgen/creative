import { addAllFlatsAction, addErrorAction, addLoadingAction } from '../store/reducer/reducer';

export const fetchFlats = () => {
   return function (dispatch) {
      fetch('http://localhost:3001/response')
         .then(response => response.json())
         .then(json => [dispatch(addLoadingAction()), dispatch(addAllFlatsAction(json))])
         .catch(e => dispatch(addErrorAction()))
   }
}