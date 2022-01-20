import React from 'react'
import { Link } from 'react-router-dom'
import './RecetaItem1.css'

export const RecetaCard = ({receta}) => {
    return (
        // <div className = 'cardReceta' >
            /* <h5 className = 'marginBottomMrem'>{receta.nombre}</h5> */

            // /* {
            //         receta.ingredientes.map( (ingrediente, i) => (<p key = {i}>{ingrediente}</p>))                    
            // } */
            
            <Link
                className = 'cardReceta noStyle displayBlock'
                to = {`./private/receta/${receta._id}`}
            >{receta.nombre}</Link>
        // </div>
    )
}
