import React from 'react'

const Header = (props) => {
    return(
        <div style={{fontSize: 5.5 + 'em', backgroundColor: 'silver'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;{props.children}
        </div>
    )
}

export default Header