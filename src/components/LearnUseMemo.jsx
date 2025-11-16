import { useMemo, useState } from 'react'

const LearnUseMemo = () => {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(20)

  const updateCount = () => {
    setCount(count + 1)
  }

// this is a cool way to store the value of a fxn and not recompute it until its inputs change

  const sumOfNumbers = useMemo(() => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      sum += i
    }
    return sum;

  }, [])
  console.log(`Sum of numberrs from 1 to ${num}`, sumOfNumbers);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={updateCount}>Increase count</button>

    </>
  )
}

export default LearnUseMemo