import React, { useContext } from 'react'
import './Searchitem.css'
import { Storecontext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';


const Searchitem = () => {
    const{cartitem,addTocart,removecart,filterdproduct}=useContext(Storecontext)
    console.log(filterdproduct);
    
  
    
    
  return (
    <div>
    <ul>
    {filterdproduct.map((item,index)=>{
        return(
        <li>{item.name}</li>)
    })}
    </ul>
    
    </div>
  )
}

export default Searchitem
