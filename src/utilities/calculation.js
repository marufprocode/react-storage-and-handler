const add = (first, second) => first + second;

const multiply = (first, second) => first*second; 

const totalPrice = products => {
    const price = products.reduce((previous, current) => previous+ current.price, 0);
    return price;
};

export {add, multiply, totalPrice}