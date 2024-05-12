import React from 'react'
import classes from './foodCards.module.scss'
import { Link } from 'react-router-dom'

import Price from '../Price/Price'

export default function FoodCards({ foods }) {
    return (
        <>
            <ul className={classes.menuItems}>
                {
                    foods.map(food =>
                        <li key={food.id}>
                            <Link to={`/foods/${food.id}`}>
                                <img className={classes.image}
                                    src={`../../images/foods/${food.imageUrl}`} alt={food.name} />
                                <div className={classes.container_itemInfo}>
                                    <div className={classes.name}>{food.name}

                                        <div className={classes.price}><Price price={food.price} /></div>
                                    </div>
                                    <span className={`${classes.favorite} ${food.favorite ? '' : classes.isFav}`}>
                                        &#9829;
                                    </span>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>

        </>
    )
}
