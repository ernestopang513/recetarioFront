import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { RecetaItem } from '../RecetaItem';

export const HomeScreen = () => {
    const {data, loading,error} = useFetch();
    console.log(data)
    console.log(error)
    return (
        <div className = 'container'>
            {loading && <p>Cargando....</p>}
            {
            (data) ?
            data.map(receta => (<RecetaItem
            key = {receta._id}
            receta = {receta}
            />))
                : 
                (<p>{error.msg} </p> )
            }
        </div>
    )
}
