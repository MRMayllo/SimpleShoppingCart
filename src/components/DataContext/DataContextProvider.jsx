import React, { useState, useEffect} from 'react'
import { fetchData2 } from '../../Functions/FetchingData'
export const DataContext = React.createContext(null)


const DataContextProvider = ({ children }) => {

    /*data from fetch in a single state*/ 
    const [products, setProducts] = useState([])
    /*loading dotes flag to pass as a value in provider*/ 
    const [isLoading, setIsLoading] = useState(false)
    /* an array state to gether all chosen products in one*/
    const [cartItems, setCartItems] = useState([])
    /*subtotal to count prices*/ 
    const [subtotal, setSubtotal] = useState(0)

    /*data fetching process*/ 
    async function fetchingData() {
        setIsLoading(true)
        const items = await fetchData2(null, 2000)
        setProducts(items)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchingData()
    }, [])

    /*saving cartItems to local storage to not loss them while changing pages*/
    useEffect(()=> {
        localStorage.setItem('savedQuantity', JSON.stringify(cartItems))

    }, [cartItems])

    /*counting subtotal to pass as a value in provider*/
    useEffect(() => {
        const newSubtotal = cartItems.reduce((acc, curr) => acc + (Number(curr.price.substring(1)) * curr.quantity), 0).toFixed(2)
        setSubtotal(newSubtotal)
    
    }, [cartItems])

    return (
        <DataContext.Provider value={{
            products,
            isLoading,
            cartItems,
            subtotal,
            /*function to add cartItem to the cartItemList*/
            onAddCartItem: function (item) {
                setCartItems([...cartItems, item])
            },
            /* function to delete added cartItem  from products page*/ 
            removeCartItem: function (item) {
               setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
            },
            /*function to update cartItems quantity and pass updated version*/
            onUpdateCartItemQuantity: function(itemId, newQuantity){
                setCartItems(cartItems.map((cartItem, i) => {
                    if (cartItem.id === itemId) {
                      return {
                        ...cartItem,
                        quantity: Number(newQuantity)
                      }
                    }
                    return cartItem
                  }))
            }
            
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider
