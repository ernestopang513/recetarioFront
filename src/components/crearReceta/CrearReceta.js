import React, { useEffect, useState } from 'react';
import './crearReceta.css';
// {
//     "nombre": "Caldo de camaron",
//     "ingredientes": ["camaron", "papas", "SAL", "zanahorias"],
//     "procedimiento": ["Cortar las verduras", "Sancochar", "Integrar"]
// }








export const CrearReceta = () => {

    const [InputForm, setInputForm] = useState({
        nombre: '',
        ingredientes: '',
        procedimiento: ''
    });
    
    const {nombre,ingredientes,procedimiento} = InputForm;
            
    const handleInputChange = ({target}) => {
    setInputForm({
        ...InputForm,
        [target.name]: target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre,ingredientes,procedimiento)
    }
            return (
        <>
            <form className= "formContainer container" onSubmit = {handleSubmit}>
                
            <label className= 'marginTop1rem' >Nombre</label>
            <input 
                name = 'nombre'
                value = {nombre} 
                type= 'text'
                onChange = {handleInputChange}
            />

            <label>Ingredientes</label>
            <textarea 
                name = 'ingredientes'
                value = {ingredientes}
                onChange = {handleInputChange}
            />

            <label>Procedimiento</label>
            <textarea
                name = 'procedimiento'
                value = {procedimiento} 
                onChange = {handleInputChange}
            />
            <input type = 'submit' value= 'Subir receta' />
            </form>   
        </>
    )
}
