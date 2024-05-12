import React, { useEffect, useReducer } from 'react'
import { getAll } from '../../services/foodService'
import FoodCards from '../../components/FoodCards/FoodCards'


const initialState = { foods: [] }

const reducer = (state, action) => {
    if (action.type === "FOODS_LOADED")
        return { ...state, foods: action.payload }
    else
        return state;
}


export default function HomePage() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods } = state;

    useEffect(() => {
        getAll().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }))
    }, [])


    return (
        <>
            <FoodCards foods={foods} />
        </>
    )
}
