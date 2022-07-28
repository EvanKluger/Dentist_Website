import React from "react"


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {'topbar '+ (menuOpen && 'active')}>
        TopBar: Name, Logo, Menu Bar....
        </div>
    )
}