import React, { useState, useEffect } from 'react'


import CartHeader from '../CartHeader/CartHeader'
import CartFooter from '../CartFooter/CartFooter'
import CartItemList from '../CartItemList/CartItemList'



const Cart = () => {
  const [props, setProps] = useState({
    items: [{
      price: 100,
      image: 'some url',
      quantity: 2,
      name: 'product name',
      color: 'red',
    }],
    subtotal: 0,// changed subtotal to count  it correctly
  })

  /*  using useeffect to initially bring correct subtotal in footer */
  useEffect(() => {
    const newSubtotal = props.items.reduce((a, b) => a + (b.price * b.quantity), 0)
    setProps({
      ...props,
      subtotal: newSubtotal
    })
  }, [])


  /* function that updates quantity based on selected count of items in cartitem component
  
     also passing this function through props to cartitemlist component and then to
     cartitem component with its index to call it in select tag as onchange handler
  */
  const updateQuantity = (index, newQuantity) => {

    /* mapping  items in props above  to get correct items based on selected items count and update  items */
    const updatedItems = props.items.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: Number(newQuantity)

        }
      }
      return item
    })
    
    /* changing props state to update items and subtotal for all items*/
    setProps({
      ...props,
      items: updatedItems,
      subtotal: updatedItems.reduce((a, b) => a + (b.price * b.quantity), 0)
    })
  }




  
  return (
    <div className="cart">
      <div className="container">
        <CartHeader />
        <CartItemList items={props.items} updateQuantity={updateQuantity} />
        <CartFooter subtotal={props.subtotal} />
      </div>
    </div>
  );
}

export default Cart;



