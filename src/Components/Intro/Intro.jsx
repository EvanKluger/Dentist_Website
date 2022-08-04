import React from 'react';
import './intro.scss';


export default function Intro() {

    return (
        <div className = 'intro' id='intro'>
            <div className='left'>
                <div className='leftcont'>
                    <div className="imageContainer">
                        <img src="assets/michael.png" alt="" />
                    </div>
                    <div className = 'wordcont'>
                    Have a specific issue or just need a routine checkup, no problem! Visit us to address all your needs.
                    (Put a different image above) 
                    </div>
                    </div>
                </div>

            <div className='right'>
                <div className='signup'>
                <h1>Request your Virtual Consultation</h1>
                <h2>Fill out the form below to contact us for your in person/virtual consultation</h2>
                </div>
                <form className = 'form' action="https://formsubmit.co/reenarothman@gmail.com" method = 'POST'>
                    <input classname = 'first' type='text' name = 'first name' placeholder = 'First Name' required/>
                    <input classname = 'last' type='text' name = 'last name' placeholder = 'Last Name' required/>
                    <input classname = 'email' type='email' name = 'email' placeholder = 'Email Address' required/>
                    <input classname = 'phone' type='phone' name = 'phone' placeholder = 'Phone Number' required/>
                    <textarea classname = 'message' type='message' name = 'message' placeholder = 'Tell me about yourself and what you are trying to address in your consultation'required></textarea>
                    
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}