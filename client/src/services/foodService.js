import { pupusaSamples } from '../data.js';

export const getAll = async () => pupusaSamples;

export const loadMenuItems = (state, action) => {

    switch (action.type) {
        case 'MENUITEMS_LOADED':
            return { ...state, menuItems: action.payload };
        default:
            return state
    }
}