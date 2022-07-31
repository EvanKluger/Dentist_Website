import React from 'react';
import './contact.scss';


export default function Intro() {

    return (
        <div className='signup'>
        <div className = 'contact' id='contact'>
        <h1>Request your Virtual Consultation</h1>
                <h2>Fill out the form below to contact us for your in person/virtual consultation</h2>
                </div>
                <form className = 'form' action="https://formsubmit.co/reenarothman@gmail.com" method = 'POST'>
                    <input classname = 'first' type='text' name = 'first name' placeholder = 'First Name' required/>
                    <input classname = 'last' type='text' name = 'last name' placeholder = 'Last Name' required/>
                    <input classname = 'email' type='email' name = 'email' placeholder = 'Email Address' required/>
                    <input classname = 'phone' type='phone' name = 'phone' placeholder = 'Phone Number' required/>
                    <input classname = 'message' type='message' name = 'message' placeholder = 'Tell me about yourself and what you are trying to address in your consultation'required/>

                    <button type = 'submit'>Submit</button>
                    </form>

        </div>
    )
}