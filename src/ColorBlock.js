import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <h3>{props.color}</h3>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock