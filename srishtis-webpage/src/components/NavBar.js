import React from 'react'
import NavLink from './NavLink'
import DropMenu from './DropMenu'
import twitterLogo from './twitter.png'
import facebookLogo from './facebook.png'
import gmailLogo from './gmail.png'

const NavBar = ({displayText}) => {

    const dropLinks = [
        {link: "https://www.google.com", logo: gmailLogo},
        {link: "https://www.facebook.com", logo: facebookLogo}, 
        {link: "https://www.twitter.com", logo: twitterLogo},
        "Say Hello!"
    ]

    return(
        <ul className="navBar"> 
            <NavLink displayText={displayText[0]}></NavLink>
            <NavLink displayText={displayText[1]}></NavLink>
            <NavLink displayText={displayText[2]}></NavLink>
            <NavLink displayText={displayText[3]}></NavLink>
            <li> <DropMenu {...dropLinks}/></li>
        </ul>
    )
}

export default NavBar