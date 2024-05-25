import { menu } from "../data";


// get all menu items
export const getAll = async () => menu;

//search for items
export const search = async (input) => {

    return menu.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))

}