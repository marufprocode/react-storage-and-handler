import React from 'react';
// import addToCart from '../../utilities/addToCart';
import {addToCart, removeFromCart} from '../../utilities/addToCart';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;

    // const addCart = (id) => addToCart(id); 

    return (
        <div className='cosmetic-com'>
            <h3>Name: {name}</h3>
            <h6>price: {price}</h6>
            <p>Has ID: {id}</p>
            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeFromCart(id)}>RemoveCart</button>
        </div>
    );
};

export default Cosmetic;