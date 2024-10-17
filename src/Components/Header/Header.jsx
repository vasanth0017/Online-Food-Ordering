import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const[click,setClick]=useState('/header_img.png')

// useEffect(()=>{
  
//     setInterval(()=>setClick('/header2.png'),3000)
//     setInterval(()=>setClick('/header_img.png'),6000)
// },[click])
// console.log(click);

  
  return (
    <div className='header'>
      <img src={click} />
      {/* {click?<img onClick={handleimage}src='/header_img.png'/>
            :<img onClick={handleimage}src='/header.png'/>} */}
      
        <div className="header-content">
            
            <h1>Order Your Favourite Food Here</h1>
            <p>Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes</p>
            <a href='#explore-menu'><button>View Menu</button></a>
        </div>
      
    </div>
  )
}

export default Header
