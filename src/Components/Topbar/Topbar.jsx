import React from "react"
import './topbar.scss'


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {'topbar '+ (menuOpen && 'active')}>
           <div className="wrapper">
                <div className="left">
                <a href="#intro" className='logo'>Dr. Reena Rothman - Dentist</a>
                </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className='line1'> </span>
                            <span className='line2'> </span>
                            <span className='line3'> </span>
                        </div>
                    </div>   
            </div> 
        </div>
    )
}