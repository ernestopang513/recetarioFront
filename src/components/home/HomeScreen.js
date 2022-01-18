import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { RecetaCard } from './RecetaCard';

export const HomeScreen = () => {
    const {data:{recetas } , loading,error} = useFetch('recetas', undefined, undefined, undefined);
    // console.log(data)
    // console.log(error)
    return (
        <div className = 'container'>
            {loading && <p>Cargando....</p>}
            {
            (recetas) ?
            recetas.map(receta => (<RecetaCard
            key = {receta._id}
            receta = {receta}
            />))
                : 
                (<p>{error.msg} </p> )
            }
        </div>
    )
}
