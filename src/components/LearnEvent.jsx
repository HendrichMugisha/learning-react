
const LearnEvent = () => {
    const handleClick = () => {
        console.log("button clicked")
    }
    const handleClickAgain = (params) => {
        console.log(params)
    }
    return (
        <>

            <button onClick={handleClick}>Click Here</button>
            <br />
            <button onClick={() => handleClickAgain("Clicked Again")}>Click again</button>
        </>
    )
}

export default LearnEvent