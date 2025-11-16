import React, { useRef, useState } from 'react'


// useref manipulated the dom elements directly
const LearnUseRef = () => {

    const [name, setName] = useState('')

    const refElement = useRef('')

    console.log(refElement)

    const clearText = () =>{
        setName("")
        refElement.current.focus()
    }
  return (
    <>
    <h1> LearnUseRef </h1>

    <input ref={refElement} type="text" value= {name} onChange={(e)=>setName(e.target.value)}/>
    
    <button onClick={clearText}>Clear</button>

    </>
  )
}

export default LearnUseRef