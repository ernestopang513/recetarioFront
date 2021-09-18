import React from 'react';
import './crearReceta.css';
// {
//     "nombre": "Caldo de camaron",
//     "ingredientes": ["camaron", "papas", "SAL", "zanahorias"],
//     "procedimiento": ["Cortar las verduras", "Sancochar", "Integrar"]
// }



export const CrearReceta = () => {
    return (
        <>
            <form className= "formContainer container">
                
            <label>Nombre</label>
            <input type= 'text'/>

            <label>Ingredientes</label>
            <textarea />

            <label>Procedimiento</label>
            <textarea />
            </form>   
        </>
    )
}
