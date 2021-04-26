import React from 'react'
import { VscTrash } from 'react-icons/vsc'
import Input from '../Input/Input'
import defaultImg from '../defaultImg/default-thumbnail.jpg'


const CartItem = ({ name, quantity, color, price, image, updateQuantity, itemIndex, removeItem }) => {


    return (
        <li className="li-cartitem-container">

            <div className="img-div">
                <img src={image ? image : defaultImg} alt="" />
            </div>

            <div className='description-container'>

                <div className="description-1st-lvl">

                    <div className="cartitem-name">
                        <h2> {name}</h2>
                        <h3>  {color} </h3>
                    </div>

                    <div className="trash-icon" onClick={() => removeItem(itemIndex)}>
                        <VscTrash />

                    </div>

                </div>

                <Input quantity={quantity} price={price} updateQuantity={updateQuantity} itemIndex={itemIndex} />
            </div>
        </li>
    )

}

export default CartItem
