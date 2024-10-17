import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/StoreContext'

const Placeorder = () => {
  const { gettotal } = useContext(Storecontext)
  return (
    <form className='placeorder'>
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='Frist Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='Ciry' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Zip-Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeorder-right">
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
          <button>PROCCED TO PAYMENT</button>
          {/* Verify Total Amount for paymet */}
          {/* {gettotal()>0?<button>PROCCED TO PAYMENT</button>:
                "hi"} */}

        </div>
      </div>

    </form>
  )
}

export default Placeorder
