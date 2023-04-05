import React from 'react';

const Food = (props) => {
    const { meal } = props;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='border-4 h-full'>
            <div>
                <img src={meal.strMealThumb} alt="" />
                <h1 className='text-xl font-bold'>{meal.strMeal}</h1>
            </div>
            <button onClick={() => handleAddToCart(meal.strMeal)} className='btn btn-success mt-2 bottom-0'>Add to cart</button>
        </div>
    );
};



export default Food;