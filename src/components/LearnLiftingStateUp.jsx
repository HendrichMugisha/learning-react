

// we create a function to receive the data in the parent component
// we then pass that function to the child component using props
// then we call the function inside the child component using props and pass the data into the functionn
// the data can then be received by the parent component

const LearnLiftingStateUp = (props) => {
  const handleClick = () =>{
    let stock = "Apple"
    props.getStock(stock)

  }

  return (
    <>
      <h1>liftin state up</h1>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default LearnLiftingStateUp