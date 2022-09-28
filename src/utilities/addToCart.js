
let shoppingCart = {};
const addToCart = id => {

    //Get the Shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    //Add Quantity
    const  quantity = shoppingCart[id];
    if (quantity){
        shoppingCart[id]= quantity + 1;
    }
    else{
        shoppingCart[id]= 1;
    }
    console.log(shoppingCart);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const removeFromCart = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if (storedCart){
        if (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {
    addToCart,
    removeFromCart
}