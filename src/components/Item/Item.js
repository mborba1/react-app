import React, {useState} from 'react';
import './Item.css';

function Item({ props }){
    const [id, clicks] = useState('')
    return (
        <div className='item'>
            {id} - clicked {clicks} times 
        </div>
    )
}
export default Item;