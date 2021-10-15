import React from 'react'
import { useForm } from '../../hooks/useForm'

export const CrearForm = ({postFuntion,loading}) => {

    const [formValues,handleInputChange, resetValues] = useForm()            
    const {nombre='',ingredientes = '',procedimiento = ''} = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre.replace(/\s+/g, '').length < 4 || ingredientes.replace(/\s+/g, '').length < 4 || procedimiento.replace(/\s+/g, '').length < 4){
            alert('nop');
            return;
        }
        postFuntion('recetas', undefined, formValues,'POST');
        resetValues();
    }
    return (
        <form className= "formContainer container" onSubmit = {handleSubmit}>
                
            <label className= 'marginTop1rem' >Nombre</label>
            <input 
                name = 'nombre'
                value = {nombre} 
                type= 'text'
                onChange = {handleInputChange}
                autoComplete = 'off'
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
            <input 
                type = 'submit' value= 'Subir receta'
                disabled = {loading}
             />
            </form>
    )
}
