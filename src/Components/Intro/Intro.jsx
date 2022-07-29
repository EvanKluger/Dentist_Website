import React from 'react';
import './intro.scss';


export default function Intro() {

    return (
        <div className = 'intro' id='intro'>
            <div className='left'>
                    <div className="imageContainer">
                        <img src="assets/ReenaProfile.png" alt="" />
                    </div>
                </div>

            <div className='right'>
                <div className="wrapper">
                <div className='signup'>Hi, please fill out the form below </div>
                <form className = 'form' action="https://formsubmit.co/reenarothman@gmail.com" method = 'POST'>
                    <input type='text' name = 'first name' placeholder = 'First Name' required/>
                    <input type='email' name = 'email' placeholder = 'Email Address' required/>
                    <input type='phone' name = 'phone' placeholder = 'Phone Number' required/>
                    <input type='message' name = 'message' placeholder = 'Tell me about yourself and what you are trying to address in your consultation'required/>

                    <button type = 'submit'>Submit</button>

                </form>
                </div> 
            </div>
        </div>
    )
}