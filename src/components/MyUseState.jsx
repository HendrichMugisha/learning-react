import React, { useState } from 'react'

const MyUseState = () => {

    const [stockPrice, setStockPrice] = useState({stock: "Apple", price: 100});
    console.log(stockPrice);

    // create the function to update the stock price
    const updateStockPrice = () =>{

        // this is the so called spread operator
        
        setStockPrice({...stockPrice, price:200})
    }
  return (
    <>

    <hr />
    <h1>Learning my use state</h1>
    <h2>{stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick={updateStockPrice}>Click</button>
    </>
  )
}

export default MyUseState