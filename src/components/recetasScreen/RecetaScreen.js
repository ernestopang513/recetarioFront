import React from 'react'
import { useParams } from 'react-router'
import { useFetch2 } from '../../hooks/useFetch'

export const RecetaScreen = () => {

    const {recetaId} = useParams();
    const {data} = useFetch2(recetaId);
    return (
        <div>
            <h3>Receta por id</h3>

            <h4>{data.nombre}</h4>

            {/* {data.ingredientes.map(ing => (<p>{ing}</p>))} */}
        </div>
    )
}
