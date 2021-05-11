import React, {useContext} from 'react'
import CartItem from '../CartItem/CartItem'
import Loader from '../../LoadingAnimation/LoadingAnimation'
import { DataContext } from '../../DataContext/DataContextProvider'



const CartItemList = ({ items, removeItem }) => {

    const {isLoading} = useContext(DataContext)

    return (

        <ul>
            { !isLoading ? (
                items.length ?
                    items.map((item, index) => {
                        return (
                            <CartItem key={item.id} {...item} itemIndex={index} removeItem={removeItem} />
                        )
                    })
                    : <li className="empty-Cart"> The cart is empty </li>) : <Loader />
            }
        </ul>

    )
}

export default CartItemList
