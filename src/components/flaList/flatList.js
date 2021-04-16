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

   return (
      <>
         <div className='btns'>
            <Button onClick={() => dispatch(fetchFlats())}>Upload</Button>
            {
               !filtered ? <Button onClick={() => filterTrigger()}>Liked</Button>
                  :
                  <Button onClick={() => filterTrigger()}>UnLiked</Button>
            }
         </div>
         {flatsArr.length === 0 ?
            <h1 className='cards__title'>Загрузите данные</h1>
            : <span></span>
         }
         <div className='cards'>
            {
               error === true ? <Error /> : flatsArr.length > 0 && error === false ?
                  !filtered ? flatsArr.map((item) =>
                     <FlatListItem key={item.id} item={item} />)
                     : likedArr.length > 0 ? likedArr.map((item) =>
                        <FlatListItem key={item.id} item={item} />)
                        : <h1 className='cards__title_grid'>Выберите понравившееся вам посты</h1>
                  : <span></span>
            }
         </div>
      </>
   )
}

export default FlatList