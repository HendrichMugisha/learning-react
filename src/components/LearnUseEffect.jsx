import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNum] = useState(0)

    const generateNum =() =>{
        const randomNum = Math.floor(Math.random() * 100)
        setRandomNum(randomNum)
        console.log(randomNum)
    }

    const increaseCount  = () =>{
        setCount(count + 1)
    }
    useEffect(() =>{
        // the logic is right here
        console.log("use effect is called")
    })
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <hr />
    <h1>Random Number:{randomNum}</h1>
    <button onClick={generateNum}>generate number</button>




    </>
  )
}

export default LearnUseEffect