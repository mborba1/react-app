import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Item from './components/Item/Item';


function App(){
    const [appState, updateAppState] = useState([0]);
    
    return (
        <div>
            <menu>
                <Button text='Add Item' />
                <Button onClick={() => updateAppState(appState = 0)}text='Clear All' />
                <Button text='Reverse Order' />
                <Item></Item>
            </menu>

        </div>
    )
}

export default App;