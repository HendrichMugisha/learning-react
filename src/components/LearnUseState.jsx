import {useState} from 'react'

const LearnUseState = () => {
    const [num, setNum] = useState(5)
    console.log(num)

    const handleNum = () =>{
        setNum(10)
    }

    const [stockPrice, setStockPrice ]  = useState({stock: "Apple", price: 100})
    console.log(stockPrice)

    const updateStockPrice = () =>{
        setStockPrice({...stockPrice, price:200})
    }

    
    // this array keeps the current state value and the function to update that value
  return (
    <>
    <h1>Number: {num} </h1>
    <button onClick={handleNum}>Click here</button>
    <hr />
    <h2>{stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick={updateStockPrice}>click me to update the price</button>
    </>
  )
}

export default LearnUseState