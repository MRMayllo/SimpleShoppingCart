import React, {useContext} from 'react'
import { VscTrash } from 'react-icons/vsc'
import Input from '../Input/Input'
import defaultImg from '../defaultImg/default-thumbnail.jpg'
import { DataContext } from '../../DataContext/DataContextProvider'



const CartItem = ({ name, quantity, color, price, image, itemIndex, removeItem, id }) => {
    const { removeCartItem, cartItems } = useContext(DataContext)
    const singleCart = cartItems.find((item)=> item.id === id)
    
    return (
        <li className="li-cartitem-container">

            <div className="img-div">
                <img src={image ? image : defaultImg} alt="" />
            </div>

            <div className='description-container'>

                <div className="description-1st-lvl">

                    <div className="cartitem-name">
                        <h2> {name} </h2>
                        <h3>  {color} </h3>
                    </div>

                    <div className="trash-icon" >
                        <VscTrash onClick={() =>  { removeItem(itemIndex)
                                                    removeCartItem(singleCart)} }/>
                    </div>

                </div>

                <Input quantity={quantity} price={price} itemId={id} />
            </div>
        </li>
    )

}

export default CartItem
