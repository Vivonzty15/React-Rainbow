import React, { useState } from 'react'
import App from './App.js'

function ColorForm(props){
    let [input, setInput] = useState('')

    function isValidColor(strColor) {
        var s = new Option().style;
        s.color = strColor;
      
        // return 'false' if color wasn't assigned
        return s.color == strColor.toLowerCase();
      }

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        isValidColor(input) ? props.addColor(input) : alert('not a color')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Add a Color!</button>
            </form>
        </div>
    )
}

export default ColorForm