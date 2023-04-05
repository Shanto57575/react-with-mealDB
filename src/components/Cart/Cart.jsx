import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='text-2xl font-bold underline my-3'>Selected food : {cart.length}</h1>
            {cart.map((item, idx) => (
                <div className='bg-white text-black border-4 px-2 py-4 m-2' key={idx}
                >{item}</div>
            ))}
        </div>
    );
};

export default Cart;