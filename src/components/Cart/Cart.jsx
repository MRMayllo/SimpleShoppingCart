import React, { useState, useEffect } from 'react'
import { fetchData } from '../../Functions/FetchingData'

/* could use for some cases useContext but project is too small for that i guess*/

import CartHeader from '../CartHeader/CartHeader'
import CartFooter from '../CartFooter/CartFooter'
import CartItemList from '../CartItemList/CartItemList'


const Cart = () => {
  /* the main state with data */
  const [props, setProps] = useState({
    items: [],
    subtotal: 0,
  })

  /* state to define loading animation */
  const [isLoading, setIsLoading] = useState(false);


  /* getting data from Mock_data.json file and setting up loading animation*/
  useEffect(() => {
    async function waitForData() {
      setIsLoading(true)

      const items = await fetchData()

      setProps({ ...props, items })

      setIsLoading(false);
    }
    waitForData()
  }, [])


  /* counting the subtotal of items */
  useEffect(() => {
    const newSubtotal = props.items.reduce((a, b) => a + (Number(b.price.substring(1)) * b.quantity), 0).toFixed(2)
    setProps({
      ...props,
      subtotal: newSubtotal
    })
  }, [props.subtotal])

  /* removing items  */
  const removeItem = (index) => {
    const filteredItems = props.items.filter((item, i) => {

      return i !== index

    })
    setProps({
      ...props,
      items: filteredItems,
      subtotal: filteredItems.reduce((a, b) => a + (b.price * b.quantity), 0)

    })

  }

  /* updating items quantity to change price * quantity */
  const updateQuantity = (index, newQuantity) => {

    const updatedItems = props.items.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: Number(newQuantity)

        }
      }
      return item
    })

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
        <CartItemList items={props.items} updateQuantity={updateQuantity} loading={isLoading} removeItem={removeItem} />
        <CartFooter subtotal={props.subtotal} />
      </div>
    </div>
  );
}

export default Cart;



