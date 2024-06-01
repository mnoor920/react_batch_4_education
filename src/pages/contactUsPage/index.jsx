import React, { useState } from 'react'
import axios from 'axios'

const ContactUs = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [message, setMessage] = useState('')



    const formData = {
        userId: 0,
        title: `${fname} ${lname}`,
        body: message
    }

    const handleSubmit = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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