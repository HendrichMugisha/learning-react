import React, { useState } from 'react'

const Mycounter = (init_value) => {
    let init_value
    // set the variable and the function to increase it 
    const [init_value, setNum] = useState(0);

    // define the function to perform the action that you desire
    const handleClick = () =>{
        setNum(num + 1);
    }


  return (
    <>
    <h1>Counter</h1>

    <button onClick={handleClick}>Click Me pleaseee!!</button>

    <h2>count = {num}</h2>
    </>
  )
}

export default Mycounter