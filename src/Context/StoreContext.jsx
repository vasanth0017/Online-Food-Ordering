import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

 export const Storecontext=createContext(null)

const Storecontextprovider=(props)=>{
  const [cartitem,setCartitem]=useState({})
  
//Add to Cart
  const addTocart=(itemId)=>{ 
    if(!cartitem[itemId]){
        setCartitem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  // search product
  const[searchproduct,setsearchproduct]=useState([])
  const filterdproduct=food_list.filter(product=>product.name.toLowerCase().includes(searchproduct))
  console.log(cartitem);
  
  
  // Add Total Amount
  const gettotal=()=>{
    let totalamount=0
    for(const i in cartitem){
      if(cartitem[i]>0){
        let getinfo=food_list.find((product)=>product._id===i);
        totalamount += getinfo.price*cartitem[i] 
      }
    }
    return totalamount
  }

  //remove Cart
 const removecart=(itemId)=>{
    
      setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
  }



    const contextvalue={
      food_list,
      cartitem,
      setCartitem,
      addTocart,
      removecart,
      gettotal,
      setsearchproduct,
      searchproduct,
      filterdproduct

    }
    return(
       <Storecontext.Provider value={contextvalue}>
         {props.children}
       </Storecontext.Provider>
    )

}
export default Storecontextprovider