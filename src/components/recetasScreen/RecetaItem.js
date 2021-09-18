import React from 'react'
import './recetaItem.css';
export const RecetaItem = ({nombre, ingredientes =[], procedimiento= []}) => {
    // console.log(ingredientes)
    // let variable = '';
    // for(const x in ingredientes){
    //     variable = variable + `${ingredientes[x]}, `
    //     console.log(x)
    // }
    // console.log(variable)
    return (
        <div className = 'receta_card'>
            <h3 className = 'title'>{nombre}</h3>

            <h4>Ingredientes</h4>

            {
                ingredientes.map((ing,i) => (<p key = {i}>{ing}</p>))
            }
            <h4>Procedimiento</h4>
            {
                procedimiento.map((paso,i) => (<p key = {i}>{paso}</p>))
            }
        </div>
    )
}
