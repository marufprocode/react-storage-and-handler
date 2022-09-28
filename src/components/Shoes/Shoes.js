import React from 'react';
import { add, multiply } from '../../utilities/calculation';

const Shoes = () => {
    const first = 11;
    const second = 5;
    const total = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h1>Hello From Shoes!! 2022</h1>
            <p>Total: {total} and Sum: {sum}</p>
        </div>
    );
};

export default Shoes;