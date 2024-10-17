import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
    console.log(category);
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes</p> 
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""}src={item.menu_image}/>
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
