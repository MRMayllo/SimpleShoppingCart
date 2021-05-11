import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../DataContext/DataContextProvider'


const Input = ({ quantity, price, itemId }) => {
    const { onUpdateCartItemQuantity } = useContext(DataContext)

    const [count, setCount] = useState(quantity)

    const decrement = () => {
        if (count - 1 >= 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count + 1 <= 10000) {
            setCount(count + 1)
        } else {
            setCount(count)
        }

    }

    useEffect(() => {
        onUpdateCartItemQuantity(itemId, count)
    }, [count])

    const onChangeHandler = (e) => {
        e.preventDefault()
        if (Number(e.target.value) <= 10000) {
            e.target.value = Number(e.target.value)
            setCount(Number(Math.abs(e.target.value)));
        }
    }

    /* below are presented both quantity selection with input and select */
    return (

        <div className="description-2nd-lvl">

            <div className="input-Container">

                <button onClick={decrement}> - </button>

                <input
                    name="quantity"
                    value={count}
                    onChange={onChangeHandler}
                    type="number"
                />

                <button onClick={increment}> + </button>

            </div>


            {/* <select defaultValue={quantity} onChange={(e) => updateQuantity(itemIndex, e.target.value)}>
                {[...Array(10).keys()].map((item, i) => {
                    return (
                        <option value={item + 1}> {item + 1} </option>
                    )
                })
                }
            </select> */}

            <p> ${(Number(price.substring(1)) * Math.ceil(Math.abs(count))).toFixed(2)}</p>
        </div>

    )
}

export default Input
