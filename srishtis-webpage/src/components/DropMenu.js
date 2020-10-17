import React from 'react'

const DropMenu = (links) => {
    const len = links.length;
    // for(i=0; i<len; i++){
    //     <a href={links[i].link} target="_Blank">{links[i].logo}</a>
    // }
    return(
        <div className="dropdown">
        <button className="dropbtn">{links[3]}</button>
        <div className="dropdown-content">
          <a href={links[0].link} target="_Blank" rel="noopener noreferrer"><img src={links[0].logo} alt="google" className="dropDownLogo"/></a>
          <a href={links[1].link} target="_Blank" rel="noopener noreferrer"><img src={links[1].logo} alt="facebook" className="dropDownLogo"/></a>
          <a href={links[2].link} target="_Blank" rel="noopener noreferrer"><img src={links[2].logo} alt="twitter" className="dropDownLogo"/></a>
        </div>
        </div> 
    )
}

export default DropMenu