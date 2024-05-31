import React, { useState } from 'react'
import classes from './search.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { search } from '../../services/foodService';

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchInput } = useParams()


    const search = async () => {


        term ? navigate(`/search/${term}`) : navigate('/')
    }

    return (
        <div className={classes.container}>
            <input
                type="text"
                placeholder='Search menu!'
                onChange={e => setTerm(e.target.value)}
                onKeyUp={search}
                value={!!searchInput ? searchInput : ''}
                autoFocus={true}
            />
        </div>
    )
}
