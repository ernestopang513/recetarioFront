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
            <form className= "formContainer container" onSubmit = {()=> {console.log('submit')}}>
                
            <label className= 'marginTop1rem' >Nombre</label>
            <input type= 'text'/>

            <label>Ingredientes</label>
            <textarea />

            <label>Procedimiento</label>
            <textarea />
            <input type = 'submit' value= 'Subir receta' />
            </form>   
        </>
    )
}
