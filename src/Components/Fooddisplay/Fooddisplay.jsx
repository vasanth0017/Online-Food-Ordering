import React, { useContext } from 'react'
import './Fooddisplay.css'
import Fooditem from '../Fooditem/Fooditem'
import { Storecontext } from '../../Context/StoreContext'

const Fooddisplay = ({category}) => {
    const {food_list}=useContext(Storecontext)
   
   
    

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item,ind)=>{
              if(category==="All" || category===item.category)
                return <Fooditem key={ind} name={item.name} id={item._id} description={item.description} price={item.price} images={item.image}/>
            })
            }
        </div>
      
    </div>
  )
}

export default Fooddisplay
