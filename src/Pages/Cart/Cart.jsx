import React, { useContext } from 'react'
import "./Cart.css"
import { Storecontext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const { food_list, cartitem, removecart,gettotal } = useContext(Storecontext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartitem[items._id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-title cart-items-item' >
                  <img src={items.image} />
                  <p>{items.name}</p>
                  <p>${items.price}</p>
                  <p>{cartitem[items._id]}</p>
                  <p>${items.price * cartitem[items._id]}</p>
                  <img className="cross" src={assets.cross_icon}  onClick={() => removecart(items._id)}/>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub Total</p>
                <p>{gettotal()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{gettotal()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{gettotal()===0?0:gettotal()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/placeorder')}>PROCCED TO CHECKOUT</button>
          </div>
            <div className='promo-code'>
              <div>
                <p>If you have a promo code,Enter it here</p>
                <div className='cart-promo-input'>
                  <input type='text' placeholder='type promo-code'/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
        
      
      

    </div>
  )
}

export default Cart
