import React, { useState } from 'react';
import './Button.css';



function Button(props){
    const { text } = props;
    const [appState, updateAppState] = useState([0])
    
    return (

      <button onClick={() => updateAppState(appState + 1)}>{text} </button>
    )
}
export default Button;