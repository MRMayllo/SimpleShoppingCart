import React from 'react'
import CartItem from '../CartItem/CartItem'
import Loader from 'react-loader-spinner'


const CartItemList = ({ items, updateQuantity, loading, removeItem }) => {

    const loadingDotes = <Loader
        type="ThreeDots"
        color="#808080"
        width="120"
        style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: 'center',
            justifyContent: "center"
        }}
    />


    return (

        <ul>
            { !loading ? (
                items.length ?
                    items.map((item, index) => {
                        return (
                            <CartItem key={item.id} {...item} updateQuantity={updateQuantity} itemIndex={index} removeItem={removeItem} />
                        )
                    })
                    : <li className="empty-Cart"> The cart is empty </li>) : loadingDotes
            }
        </ul>

    )
}

export default CartItemList
