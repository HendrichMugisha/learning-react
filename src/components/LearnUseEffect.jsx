import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
  // this is the counter state
  const [count,  setCount] = useState(0)
  
  // this is the random number state
  const [randomNum, setRandomNum] = useState(null)

  // this is the function to handle the count increase
  const increaseCount = () =>{
    setCount(count + 1)
  }

  // this is the function for random number gen
  const generateRandomNum = () =>{
    const randomNum = Math.floor(Math.random() * 100 )
    // console.log(randomNum)
    setRandomNum(randomNum)
  }

  useEffect(() =>{
    // the logic later
    console.log("use effect is called")

    // clean up function
    return () =>{
      // this is the function that sets the new value
      console.log("this is the cleanup")
    }
  }, 
  // these are the dependencies, ie the things that when changed will cause use effect to be called
  [count, randomNum]

)

  return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={increaseCount}>Increase count</button>
    <hr />
    <h1>Random number : {randomNum}</h1>
    <button onClick={generateRandomNum}> generate number</button>
    </>
  )
}

export default LearnUseEffect