import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlats } from '../../asyncActions/asyncActions';
import FlatListItem from '../flatListItem';
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
   const likedArr = useSelector(state => state.likeFlats)

   const [filtered, setFiltered] = useState(false)

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
         <div className='cards'>
            {
               flatsArr.length > 0 ?
                  !filtered ? flatsArr.map((item) =>
                     <FlatListItem key={item.id} item={item} />)
                     : likedArr.map((item) =>
                        <FlatListItem key={item.id} item={item} />)
                  :
                  <h1 className='title'>Загрузите данные</h1>
            }
         </div>

      </>
   )

}

export default FlatList