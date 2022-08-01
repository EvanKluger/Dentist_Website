import React from "react"
import './topbar.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {'topbar '+ (menuOpen && 'active')}>
           <div className="wrapper">
                <div className="left">
                <a href="#intro" className='logo'>
                <div className="name">
                Dr. Reena Rothman
                </div>
                <div className="job">
                Dentist - South Florida
                </div>
                </a>
                
                </div>
                
                    <div className="right">
                    <a href = 'https://instagram.com/drreenarothman?igshid=YmMyMTA2M2Y='>
                    <InstagramIcon className='instagram'/>
                    </a>
                    <a href = 'https://instagram.com/drreenarothman?igshid=YmMyMTA2M2Y='>
                    <FacebookIcon className='facebook'/>
                    </a>
                    <a href = 'https://instagram.com/drreenarothman?igshid=YmMyMTA2M2Y='>
                    <LinkedInIcon className='linkedin'/>
                    </a>

                       
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