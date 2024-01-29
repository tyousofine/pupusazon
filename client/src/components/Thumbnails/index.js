import React from 'react'
import { Link } from 'react-router-dom'

import classes from './styles.module.scss'
import { FaHeart } from "react-icons/fa";

export default function Thumbnails({ menuItems }) {
    console.log(menuItems)
    return (
        <ul className={classes.menuItems}>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <Link to={`/menuItem${item.id}`}>
                        <img className={classes.image}

                            src={`/images/${item.imageUrl}`}
                            alt={item.name} />
                    </Link>
                    <div className={classes.container_item}>
                        <div className={classes.name}>{item.name}</div>
                        <span className={`${classes.favorite} ${item.favorite ? '' : classes.notFav}`}>
                            <FaHeart />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}
