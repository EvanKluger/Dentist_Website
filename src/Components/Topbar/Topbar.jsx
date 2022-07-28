import React from "react"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {'topbar '+ (menuOpen && 'active')}>
        </div>
    )
}