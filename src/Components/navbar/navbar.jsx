import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from '../../Context/StoreContext'

const Navbar = ({ setLogin }) => {
    const [menu, setMenu] = useState("All")
    const { cartitem, food_list, setsearchproduct, searchproduct } = useContext(Storecontext)
    const [click, setClick] = useState(false)


    return (
        <div className="navbar"> 
            <Link to='/'><h1 className="logo">MuscleMenu.</h1></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us</a>
            </ul>
            <div className="navbar-right">
                <div className='input-container'>
                    {click ? <span><input
                        type='text'
                        value={searchproduct}
                        onChange={(e) => setsearchproduct(e.target.value)}
                        placeholder='find your taste here...' />
                        <img className='cross-icon' onClick={() =>{ setClick(false); }} src={assets.cross_icon} /></span> : ""}
                </div>

                <img onClick={() => setClick(true)} src={assets.search_icon} />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} /></Link>
                    {/* Cart Dot Show */}
                    {food_list.map((items, index) => {
                        if (cartitem[items._id] > 0) {
                            return <div key={index} className="dot"></div>
                        }
                    }
                    )}

                </div>
                <button onClick={() => setLogin(true)} >Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
