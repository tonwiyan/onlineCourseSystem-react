import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Order: {cart.length}</p>
            <p>Total price : {total}</p>
        </div>
    );
};

export default Cart;