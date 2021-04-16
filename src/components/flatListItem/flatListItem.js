import React, { useState, useEffect } from 'react';
import './flatListItem.sass';
import addLikeFlatAction from '../../store/reducer/reducer';

const FlatListItem = ({ item, clickedOnLike }) => {

   const itemObj = item;
   const { type, id, attributes, relationships } = itemObj;
   const { title, rooms, address, area, unit } = attributes;
   const { city, street, house, room } = address;
   const { type: typeRel, id: idRel, attributes: attributesRel } = relationships;
   const { first_name, last_name, middle_name } = attributesRel;

   const [isLiked, setLiked] = useState(false);

   const clicked = () => {
      setLiked(!isLiked)
      clickedOnLike();
   };
   return (
      <div className='cardItem'>
         {/* <div className="cardItem__general">
            <ul>
               <li>{`Type:${type}`}</li>
               <li>{`Id:${id}`}</li>
            </ul>
         </div> */}

         <div className="cardItem__description">
            <div className="cardItem__description__attributes">
               <ul className='cardItem__items'>
                  <li className='item'>{`Название : ${title}`}</li>
                  <li className='item'>{`Количество комнат : ${rooms}`}</li>
                  <li className='item'>{`Адрес : ${city}, ${street} ${house}; квартира ${room}`}</li>
                  <li className='item'>{`Площадь : ${area} ${unit} `}</li>
               </ul>
            </div>
            <div className="cardItem__description__relationships">
               <ul>
                  {/* <li className='item'>{`Тип: ${typeRel}`}</li>
                  <li className='item'>{`id: ${idRel}`}</li> */}
                  <li className='item'>{`${typeRel.split('').map((item, i) => i === 0 ? item.toUpperCase() : item).join('')} : ${last_name} ${first_name} ${middle_name}`}</li>
               </ul>
            </div>
            <div className='icon'>
               {isLiked === true ?
                  <i className="cardItem__icon_checked fa fa-heart" onClick={clicked}> </i>
                  :
                  <i className="cardItem__icon fa fa-heart" onClick={clicked}> </i>}
            </div>

         </div>
      </div>
   )
}

export default FlatListItem

