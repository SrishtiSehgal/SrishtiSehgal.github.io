import React from 'react'

const TextContainer = ({children, fontSize, fontFamily, backgroundColor, padding, marginLeft,marginRight, marginBot, marginTop}) => {
    console.log("fontsize is: " + fontSize);
    console.log(backgroundColor);
    console.log("fontfamily is: " + fontFamily);
    return(
        <div style={{fontSize: {fontSize} + 'em', fontFamily: {fontFamily}, backgroundColor: `${backgroundColor}`, padding: {padding}}}>
            {children}
        </div>
    )
}

export default TextContainer