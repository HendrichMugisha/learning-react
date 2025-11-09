import React from 'react'


const LearnJSX = () => {
  let stock = 'apple'
  return (
    <>
      <h2>Learn JSX </h2>

      <h2>Price: {10+20} </h2>

      <h2>Stock name: {stock}</h2>
      <h2 className='bg-success' >Class</h2>

      <h2 className={stock}>Dynamic class</h2>

    </>
  )
}

export default LearnJSX