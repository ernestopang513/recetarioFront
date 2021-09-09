import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const HomeScreen = () => {

   
    const {data, loading} = useFetch()
    return (
        <div>
            <div>
                {loading && <p>Cargando....</p>}
                {
                (data) ?
                data.map(receta => (<p>{receta.nombre}</p>))
                    : 
                    (<p>Algo fallo </p> )
                }
            </div>

            {/* {res.recetas.map(receta => (
                <p>
                    {receta}
                </p>
            ))} */}
        </div>
    )
}
