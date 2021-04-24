import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
 
function CartHeader() {



    return (
        <header>
            <div className="header-container">
                <div className="cart-title">
                    <h1> YOUR CART</h1>
                </div>
                <VscChromeClose className='vsc' />              
            </div>
        </header>
    )
}

export default CartHeader
