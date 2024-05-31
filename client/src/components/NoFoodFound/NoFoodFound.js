import React from 'react'

import classes from './noFoodFound.module.scss'

import sadPupusa from './sadPupusa.png';
import { Link } from 'react-router-dom';

export default function NoFoodFound() {
    return (
        <div className={classes.container}>
            <h3>Sorry, No Matches Found</h3>
            <img src={sadPupusa} alt="Sad Pupusa" />
            <div>
                <Link to='/'>Back</Link>
            </div>

        </div>
    )
}
