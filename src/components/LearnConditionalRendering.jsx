import React, { useState } from 'react'

const LearnConditionalRendering = () => {

    const [isLoggedIn, setIsloggedIn] = useState(true)
    const [status,setStatus] = useState(true)
    return (
        <>
            <h1>conditional rendering</h1>
            {
                isLoggedIn ? (
                    <h3>Welcome user</h3>
                ) : (
                    <h2>Please log in</h2>
                ) }

{/* this is just a basic if else condition */}
                {
                    status && (
                        <h3>show data</h3>
                    )
                }
        </>
    )
}

export default LearnConditionalRendering