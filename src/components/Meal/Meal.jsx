import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Cart from '../Cart/Cart';

const Meal = () => {
    const [meals, setMeal] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (theMeal) => {
        const newCart = [...cart, theMeal];
        setCart(newCart);
    }

    return (
        <div className='flex gap-5'>
            <div className='grid md:grid-cols-2 lg:md:grid-cols-3 gap-5 w-4/5'>
                {
                    meals.map(meal => <Food
                        key={meal.idMeal}
                        handleAddToCart={handleAddToCart}
                        meal={meal}></Food>)
                }
            </div>
            <div className='bg-slate-300 w-1/4'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meal;