import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlats } from '../../asyncActions/asyncActions';
import FlatListItem from '../flatListItem';
import Error from '../error';
import './flatList.sass';
import style from 'styled-components';

const Button = style.button`
text-align:center;
border:none;
width:100px;
text-decoration: none;
display: block;
color: white;
padding: 10px 0;
margin: 0 10px;
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
   const likedArr = useSelector(state => state.likeFlats);
   const error = useSelector(state => state.error);

   const [filtered, setFiltered] = useState(false);

   const filterTrigger = () => {
      setFiltered(!filtered);
   }

   const renderItems = (array) => {
      return array.map((item) =>
         <FlatListItem key={item.id} item={item} />)
   }

   const buttonFilter = (func, text) => (
      <Button Button onClick={() => func()}> {text}</Button >
   )

   return (
      <>
         <div className='btns'>
            <Button onClick={() => dispatch(fetchFlats())}>Upload</Button>
            {error === false ?
               !filtered ? buttonFilter(filterTrigger, 'Liked')
                  :
                  buttonFilter(filterTrigger, 'All')
               : null
            }
         </div>
         {flatsArr.length === 0 ?
            <h1 className='cards__title'>Загрузите данные</h1>
            : null
         }
         <div className='cards'>
            {
               error === true ? <Error /> : flatsArr.length > 0 && error === false ?
                  !filtered ? renderItems(flatsArr)
                     : likedArr.length > 0 ? renderItems(likedArr)
                        : <h1 className='cards__title_grid'>Выберите понравившееся вам посты</h1>
                  : null
            }
         </div>
      </>
   )
}

export default FlatList