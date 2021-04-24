import React from 'react'
import { VscTrash } from 'react-icons/vsc'



function CartItem({ name, quantity, color, price, image, updateQuantity, itemIndex }) {


    
    return (
        <li className="li-cartitem-container">

            <div className="img-div">
                <img src={image} alt="" />
            </div>

            <div className='description-container'>

                <div className="description-1st-lvl">

                    <div className="cartitem-name">
                        <h2> {name}</h2>
                        <h3>  {color} </h3>
                    </div>

                    <div className="trash-icon">
                        <VscTrash />
                    </div>

                </div>

                
                <div className="description-2nd-lvl">
                    <select defaultValue={quantity} onChange={(e)=> updateQuantity(itemIndex, e.target.value)}>
                        {[...Array(10).keys()].map((item, i) =>{
                            return (
                                <option value={item+1}> {item+1} </option>
                            )
                        })
                        }
                    </select>
                    <p> ${price * quantity}</p>
                </div>

            </div>
        </li>
    )
}

export default CartItem
