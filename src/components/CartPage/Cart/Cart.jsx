import React, { useState, useEffect} from 'react'


import CartHeader from '../CartHeader/CartHeader'
import CartFooter from '../CartFooter/CartFooter'
import CartItemList from '../CartItemList/CartItemList'

const Cart = () => {

  const parsedData = JSON.parse(localStorage.getItem('savedQuantity')) || []

  const [props, setProps] = useState([...parsedData])
  
  useEffect(() => {

    localStorage.setItem('savedQuantity', JSON.stringify(props))
    
  }, [props])

  


  /* removing  cartItem from cartItemlist  */
  const removeItem = (index) => {
    const filteredItems = props.filter((item, i) => {
      return i !== index
    })
    setProps(filteredItems)
  }


  return (
    <div className="cart">
      <div className="container">
        <CartHeader />
        <CartItemList items={props}  removeItem={removeItem} />
        <CartFooter />
      </div>
    </div>
  );
}

export default Cart;



