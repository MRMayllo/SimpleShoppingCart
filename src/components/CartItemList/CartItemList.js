import React from 'react'
import CartItem from '../CartItem/CartItem'


function CartItemList({ items, updateQuantity }) {

    return (
        <>
            <ul>
            {
                items.map((item, index) => {
                    return (
                          <CartItem key={index} {...item} updateQuantity={updateQuantity}  itemIndex={index}/>
                    )
                })
            }
            </ul>
        </>
    )
}

export default CartItemList
