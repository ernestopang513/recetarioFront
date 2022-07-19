import React from 'react'
import { objetosVacios } from '../../helpers/validaciones';
import { useDinamicForm } from '../../hooks/useDinamicForm';
import { useForm } from '../../hooks/useForm'
import { InputDinamic } from '../Reutilizable/InputDinamic';

export const CrearForm = ({postFuntion,loading}) => {

    const [formValues,handleInputChange, ] = useForm();
    const [valuesI, handleInputChangeI, addInputI , deleteIngredienteI] =useDinamicForm();
    const [valuesP, handleInputChangeP, addInputP , deleteIngredienteP] =useDinamicForm();
            
    const {nombre=''} = formValues;


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues);
        // console.log(valuesI);
        // console.log(valuesP);
        const data = {formValues,valuesI,valuesP};
        console.log(data);
        // console.log(objetosVacios(valuesI))
        if(objetosVacios(valuesI) || objetosVacios(valuesP) || nombre.replace(/\s+/g, '').length < 4){
            alert('nop');
        };
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
                        
            <InputDinamic
                values = {valuesI}
                handleInputChange = {handleInputChangeI}
                addInput = {addInputI}
                deleteIngrediente = {deleteIngredienteI}
                text = 'Ingredientes'
            />

            <InputDinamic
                values = {valuesP}
                handleInputChange = {handleInputChangeP}
                addInput = {addInputP}
                deleteIngrediente = {deleteIngredienteP}
                text = 'Procedimiento'
            />
            <input 
                type = 'submit' value= 'Subir receta'
                disabled = {loading}
             />
            </form>
    )
}
