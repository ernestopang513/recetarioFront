import React from 'react'
import { useParams } from 'react-router'
import { useFetch2 } from '../../hooks/useFetch'
import { RecetaItem } from './RecetaItem';

export const RecetaScreen = () => {

    const {recetaId} = useParams();
    const {data:receta,loading} = useFetch2(recetaId);
    
    return (
        <div>

            {loading && <p>Cargando ...</p>}

            {
                !loading && receta.length !== 0 &&
                <RecetaItem {...receta} />

            }
            
            
            
            {/* <h3>Receta por id</h3>

            <h4>{data.nombre}</h4>

            {
                (ingredientes)?
                ingredientes.map((ing,i) => (<p key = {i}>{ing}</p>))
                :
                <p>Cargando</p>
            }

            {
                (data.usuario.nombre)?
                <p>{data.usuario.nombre}</p>
                    :
                <p>Cargando...</p>
            } */}
            
            
        </div>
    )
}
