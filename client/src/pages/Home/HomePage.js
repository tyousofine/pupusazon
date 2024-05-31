import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../services/foodService'
import FoodCards from '../../components/FoodCards/FoodCards'
import { useParams } from 'react-router-dom'


import Search from '../../components/Search/Search'


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
    const { searchInput } = useParams()


    useEffect(() => {



        const loadFoods = searchInput ? search(searchInput) : getAll()
        loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }))
    }, [searchInput])


    return (
        <>
            <Search />
            <FoodCards foods={foods} />
        </>
    )
}
