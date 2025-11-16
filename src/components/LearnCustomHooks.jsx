import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const {count, increment, decrement, reset} = useCounter()
  return (
    <>
    <h1>
    custom hook
    </h1>

    <h2>count = {count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default LearnCustomHooks