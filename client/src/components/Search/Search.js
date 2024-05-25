import React, { useEffect, useState } from 'react'
import classes from './search.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

export default function Search() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const { searchInput } = useParams()





    // useEffect(() => {
    //     console.log({ searchTerm })
    // }, [searchTerm])


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
                defaultValue={searchInput}

            />
            <div>test{searchInput}</div>

        </div>
    )
}
