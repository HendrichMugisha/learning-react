import React from 'react'
import '../assets/css/style.css'

const LearnInlineCss = () => {

    const style = {
        container: {
            backgroundColor: 'white',
            height: '100px',
            width: '100px'

        },
        h2Text: {
            fontSize: '40px',
            color: 'green'
        }
    }
    return (
        <>

            <style>
                {`
            
            .container{
            background-color: green;
            height: 100px;
            width: 100px;
            }`}
            </style>
            <h1>internal css</h1>

            <p style={{ fontSize: '20px', fontWeight: 600, color: 'blue' }}>
                this is a paragraph
            </p>

            <div style={style.container}>

            </div>

            <h2 style={style.h2Text}>this is my test text</h2>

            <hr />

            <h1>internal css</h1>

            <div className='container'> </div>
            <hr />

            <h1>external css</h1>

<div className='yellowbox'></div>
<h2 className='yellowtext'>blue text</h2>

        </>
    )
}

export default LearnInlineCss