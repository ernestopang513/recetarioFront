import React from 'react'
import { Link } from 'react-router-dom'
import './RecetaItem1.css'

export const RecetaCard = ({receta}) => {
    return (
        <div className = 'cardReceta' >
            <h5 className = 'marginBottomMrem'>{receta.nombre}</h5>

            {/* {
                    receta.ingredientes.map( (ingrediente, i) => (<p key = {i}>{ingrediente}</p>))                    
            } */}
            <Link
                className = 'marginBottom1rem displayBlock'
                to = {`./receta/${receta._id}`}
            >Mas...</Link>
        </div>
    )
}
