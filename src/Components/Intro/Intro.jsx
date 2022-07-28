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
                <div className='signup'>Sign up here for a Consultation</div>
                <form action="https://formsubmit.co/jakeykluger@gmail.com" method = 'POST'>
                    <input type='text' name = 'name' placeholder = 'Name' required />
                    <input type='email' name = 'email' placeholder = 'Email Address'required/>
                    <button type = 'submit'>Submit</button>

                </form>
                </div> 
            </div>
        </div>
    )
}