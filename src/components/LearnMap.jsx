import React from 'react'

const LearnMap = () => {

    const  names = ["Rathan", "John", "Mark"]
  return (
    <>
    
    <h2>map function</h2>

    <ul>
        {names.map((name, index)=>
            <li key={index}>{name}</li>
        )}
    </ul>
    
    </>
  )
}

export default LearnMap