import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './flatListItem.sass';
import { addLikeFlatAction, addDisLikeFlatAction } from '../../store/reducer/reducer';

const FlatListItem = ({ item }) => {
   const dispatch = useDispatch();
   const itemObj = item;
   const { type, id, attributes, relationships } = itemObj;
   const { title, rooms, address, area, unit } = attributes;
   const { city, street, house, room } = address;
   const { type: typeRel, id: idRel, attributes: attributesRel } = relationships;
   const { first_name, last_name, middle_name } = attributesRel;

   const [isLiked, setLiked] = useState(true);

   const likedFlat = () => {
      setLiked(!isLiked)
      if (isLiked === true) {
         dispatch(addLikeFlatAction(id))
      }
      else {
         dispatch(addDisLikeFlatAction(id))
      }
   }

   const getAgent = (word) => {
      return [...word].map((item, i) => i === 0 ? item.toUpperCase() : item).join('')
   }

   const Icon = ({ classChecked = '' }) => {
      return (
         <i className={`cardItem__icon${classChecked} fa fa-heart`} onClick={likedFlat}> </i>
      )
   }


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
                  <li className='item'>{`Тип : ${type} ,`}</li>
                  <li className='item'>{`Описание : ${title},`}</li>
                  <li className='item'>{`Количество комнат : ${rooms} ,`}</li>
                  <li className='item'>{`Адрес : ${city}, ${street} ${house}; квартира ${room} ,`}</li>
                  <li className='item'>{`Площадь : ${area} ${unit} ;`}</li>
               </ul>
            </div>
            <div className="cardItem__description__relationships">
               <ul>
                  {/* <li className='item'>{`Тип: ${typeRel}`}</li>
                  <li className='item'>{`id: ${idRel}`}</li> */}
                  <li className='item'>{`${getAgent(typeRel)} : ${last_name} ${first_name} ${middle_name}`}</li>
               </ul>
            </div>
         </div>
         <div className='cardItem__icon-wrapper'>
            {isLiked !== true ?
               <Icon classChecked='_checked' />
               :
               <Icon />}
         </div>
      </div>
   )
}
export default FlatListItem

