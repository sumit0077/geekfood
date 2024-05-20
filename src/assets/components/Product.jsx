import React from 'react'
import { Star, ChevronDown, Footprints } from 'lucide-react'

export const FoodItemProduct = ({food}) => {
    // console.log(food);
    
    // Create an array of ingredients
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = food[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    return (
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-full">
                    <img
                        alt="Product image"
                        className="h-64 w-full rounded object-cover lg:h-[550px] lg:w-1/2"
                        src={food.strMealThumb}
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500">Area: {food.strArea}</h2>
                        <h1 className="my-4 text-3xl font-semibold text-black">Meal: {food.strMeal}</h1>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                            <div className="flex items-center">
                                <span className="mr-3 text-sm font-semibold">Tags: {food.strTags}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-orange-400 py-4 rounded-xl text-white justify-between">
                            <h2 className='font-bold text-xl'>Ingredients</h2>
                            <ul className='w-full flex flex-col items-start px-8 py-1'>
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>{index+1}. {ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="leading-relaxed text-gray-500 px-2 py-4 rounded-xl shadow-xl mt-8">
                      <p className='text-black font-bold text-xl'>Receipe</p> 
                      {food.strInstructions}
                </div>
            </div>
        </section>
    )
}
