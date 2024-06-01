import React, { useState } from 'react'

const ContactUs = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [message, setMessage] = useState('')



    const formData = {
        first_name: fname,
        last_name: lname,
        message: message
    }

    const handleSubmit = () => {
        console.log("form Data", formData)
    }

    return (
        <div>

            <div className="container">
                <div className="form">
                    <input type="text" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                    <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                    {/* <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="number" placeholder='Phone Number' />
                    <input type="Address" placeholder='Address' /> */}
                    <textarea name="" className='' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} id=""></textarea>
                    <button onClick={handleSubmit} > Send</button>
                </div>

            </div>
        </div>
    )
}

export default ContactUs