import React, { useState, useReducer, useEffect } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//       case 'increment':
//         return {count: state.count + 1};
//       case 'decrement':
//         return {count: state.count - 1};
//       default:
//         return state;
//     }
//   }


const Input = ({ quantity, price, updateQuantity, itemIndex }) => {

    /************************************
    first wanted to build this part with  useReducer 
    but changed my mind because this case is not much complicated
    ***************************************/


    // const [state, dispatch] = useReducer(reducer, {count: quantity});

    // function decrement() {
    //     dispatch({type: 'decrement'})
    // }

    // function increment() {
    //     dispatch({type: 'increment'})
    // }

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
        updateQuantity(itemIndex, count)
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

                <input name="quantity"
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

            <p> ${(Number(price.substring(1)) * Math.ceil(Math.abs(quantity))).toFixed(2)}</p>
        </div>

    )
}

export default Input
