import React from 'react'
import { useReducer, useEffect } from 'react';

import './styles.scss'
import { getAll, loadMenuItems } from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails';

// initial state
const initialState = { menuItems: [] };


export default function Home() {
    const [state, dispatch] = useReducer(loadMenuItems, initialState);
    const { menuItems } = state;

    useEffect(() => {
        getAll().then(menuItems => dispatch({ type: 'MENUITEMS_LOADED', payload: menuItems }))

    }, [])



    return (
        <>
            <Thumbnails menuItems={menuItems} />
        </>
    )
}
