import React from 'react'
import { Link } from 'react-router-dom'

export const RecetaItem = ({receta}) => {
    return (
        <div >
            <h5>{receta.nombre}</h5>

            {
                    receta.ingredientes.map( (ingrediente, i) => (<p key = {i}>{ingrediente}</p>))                    
            }
            <Link
                to = {`./receta/${receta._id}`}
            >Mas...</Link>
        </div>
    )
}
