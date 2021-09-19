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

            <ul>
            {
                ingredientes.map((ing,i) => (<li key = {i}>{ing}</li>))
            }
            </ul>
            
            <h4>Procedimiento</h4>
            <ol>
            {
                procedimiento.map((paso,i) => (<li key = {i}>{paso}</li>))
            }
            </ol>
        </div>
    )
}
