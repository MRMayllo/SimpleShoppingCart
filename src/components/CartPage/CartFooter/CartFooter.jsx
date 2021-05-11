import React, {useContext} from 'react'
import { DataContext } from '../../DataContext/DataContextProvider'


const CartFooter = () => {

    const {subtotal} = useContext(DataContext)

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
