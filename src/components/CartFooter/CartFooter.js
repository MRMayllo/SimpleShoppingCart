import React from 'react'

function CartFooter({subtotal}) {


    
    return (
        <footer>
            <div className='subtotal-container'>
                <h2>Subtotal: </h2>
                <p>${subtotal}</p>
            </div>
           
           <button>Checkout</button>
        </footer>
    )
}

export default CartFooter
