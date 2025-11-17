import React, { useState } from 'react'

const LearnForms = () => {
    //     const [firstName, setFirstName] = useState('')
    //     const [LastName, setLastName] = useState('')
    // // the input v
    //     const handleFirstname = (e) => {
    //         setFirstName(e.target.value)
    //     }

    //     const handleLastName = (e) => {
    //         setLastName(e.target.value)
    //     }
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })
    const handleChange = (e) => {
        // this is the spread operator that allows us to add data into the object without changing the previous data
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('form submitted', formData);
    }
    return (
        <>
            {/* <form action="">
                First name: <input type="text" name='firstName' onChange={handleFirstname} value={firstName} />
                <br /> <br />
                Last name: <input type="text" name='lastName' onChange={handleLastName} value={LastName} />
            </form> */}

            <form action="" onSubmit={handleSubmit}>
                {/* the name attribute is uset to then access the value */}
                First name: <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} />
                <br /> <br />
                Last name: <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} />
                <br /><br />
                <input type="submit" value="submit" />
            </form>

        </>
    )
}

export default LearnForms