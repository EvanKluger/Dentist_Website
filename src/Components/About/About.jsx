import React from 'react';
import './about.scss';


export default function About() {

    return (
        <div className = 'about' id='about'>
        <div className='imagecont'>
        <img src = 'assets\ReenaProfile.png' alt = ''/>
        </div>

        <div className='message'>
        Dr. Reena Rothman is a restorative and cosmetic dentist. She performs procedures such as crowns, veneers, bridges, root canal treatments, fillings, Invisalign and Botox. Dr. Rothman earned her dental degree from Nova Southeastern University. She is committed to providing excellent patient care and strives to make dental visits a low-stress and positive experience. In her spare time, Dr. Rothman enjoys traveling, and spending quality time with her family and friends. 
        </div>
        </div>
    )
}