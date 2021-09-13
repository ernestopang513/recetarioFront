import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { RecetaItem } from '../RecetaItem';

export const HomeScreen = () => {
    const {data, loading} = useFetch();
    return (
        <div>
            <div>
                {loading && <p>Cargando....</p>}
                {
                (data) ?
                data.map(receta => (<RecetaItem
                key = {receta._id}
                receta = {receta}
                />))
                    : 
                    (<p>Algo fallo </p> )
                }
            </div>
        </div>
    )
}
