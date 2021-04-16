import React, { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlats } from '../../asyncActions/asyncActions';
import { addLikeFlatAction } from '../../store/reducer/reducer';

import FlatListItem from '../flatListItem';
import './flatList.sass';
import style from 'styled-components';

const ButtomForUpload = style.button`
text-align:center;
border:none;
width:100px;
text-decoration: none;
display: block;
color: white;
padding: 10px 0;
margin:0 auto;
border-radius: 10px;
text-transform: uppercase;
letter-spacing: 2px;
background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
background-size: 200% auto;
box-shadow: 0 0 20px rgba(0, 0, 0, .1);
outline:none;
cursor:pointer
`


function FlatList() {
   const dispatch = useDispatch();
   const flatsArr = useSelector(state => state.flats);

   const likedFlat = (id) => {
      dispatch(addLikeFlatAction(id))
   }
   return (
      <>
         <ButtomForUpload onClick={() => dispatch(fetchFlats())}>Upload</ButtomForUpload>
         <div className='cards'>
            {flatsArr.length > 0 ?
               flatsArr.map((item) =>
                  <FlatListItem clickedOnLike={() => likedFlat(item.id)} key={item.id} item={item} />)
               :
               <h1 className='title'>Загрузите данные</h1>}
         </div>

      </>
   )

}

export default FlatList