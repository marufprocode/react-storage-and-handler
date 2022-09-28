import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/calculation';
import Cosmetic from '../cosmetic/Cosmetic';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=> {
        fetch('https://cosme.free.beeceptor.com/')
        .then(res => res.json())
        .then(cosmetic => setCosmetics(cosmetic))
    },[])
    return (
        <div>
            <h1>Welcome to my Cosmetics Store!</h1>
            <h4>Total Price of All Products: {totalPrice(cosmetics)}</h4>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;