import { assets } from '../../assets/assets';
import { Storecontext } from '../../Context/StoreContext';
import './Fooditem.css'
import React, { useContext, useState } from 'react'

const Fooditem = ({id,name,description,price,images}) => {
   
    const{cartitem,addTocart,removecart,filterdproduct}=useContext(Storecontext)
    
    
    
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            {/* Showing images */}
            <img className='food-item-image' src={images} />
            {/* Initial add button */}
            {!cartitem[id]?<img className='add'src={assets.add_icon_white} onClick={()=>addTocart(id)}/>
            :
            <div className='food-item-counter'>
                {/* remove cart */}
                <img onClick={()=>removecart(id)} src={assets.remove_icon_red}/>
                <p>{cartitem[id]}</p>
                <img onClick={()=>addTocart(id)} src={assets.add_icon_green}/>
            </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className='food-item-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default Fooditem
