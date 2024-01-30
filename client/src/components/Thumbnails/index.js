import React from 'react'
import { Link } from 'react-router-dom'

import classes from './styles.module.scss'
import { FaHeart } from "react-icons/fa";
import Price from '../Price';

export default function Thumbnails({ menuItems }) {

    return (
        <ul className={classes.menuItems}>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <Link to={`/menuItem${item.id}`}>
                        <img className={classes.image}
                            src={`/images/${item.imageUrl}`}
                            alt={item.name} />

                        <div className={classes.container_itemInfo}>
                            <div className={classes.name}>{item.name}</div>
                            <span className={`${classes.favorite} ${item.favorite ? classes.isFav : classes.notFav}`}>
                                <FaHeart />
                            </span>
                            <div className={classes.price}><Price price={item.price} /></div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
