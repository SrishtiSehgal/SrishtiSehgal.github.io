import React from 'react'
import Rectangle from './Rectangle'

const SectionSeparator = () => {
    const style = {
            width: 25 + "%",
            height: 50 + "%",
            backgroundColor: "rgba(0,0,0,0.2)"
        };

    const style2 = {
            width: 25 + "%",
            height: 50 + "%",
            backgroundColor: "rgba(0,0,0,0.7)"
        };

    const style3 = {
        width: 25 + "%",
        height: 50 + "%",
        backgroundColor: "rgba(119,156,200,1)"
        };
        
    return(
        <div className="sectionSeparator">
            <Rectangle style={style}/>
            <Rectangle style={style2}/>
            <Rectangle style={style3}/>
            <Rectangle style={style}/>
            <Rectangle style={style2}/>
            <Rectangle style={style3}/>
            <Rectangle style={style3}/>
            <Rectangle style={style}/>
            <Rectangle style={style2}/>
            <Rectangle style={style3}/>
            <Rectangle style={style}/>
            <Rectangle style={style2}/>
        </div>
    )
}

export default SectionSeparator