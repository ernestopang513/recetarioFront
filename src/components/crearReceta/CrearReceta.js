import React, { useEffect, useState } from 'react';
import { useFetchCrearReceta } from '../../hooks/useFetchCrearReceta';
import './crearReceta.css';
// {
//     "nombre": "Caldo de camaron",
//     "ingredientes": ["camaron", "papas", "SAL", "zanahorias"],
//     "procedimiento": ["Cortar las verduras", "Sancochar", "Integrar"]
// }



const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    function resetValues() {
        setValues({
            nombre: '',
            ingredientes: '',
            procedimiento: ''
        });
    }


    const handleInputChange = ({target}) => {
        
    setValues({
        ...values,
        [target.name]: target.value
        })
    }
    return [values, handleInputChange, resetValues];
}


export const CrearReceta = () => {

    
    const [variable, setVariable] = useState(false);
    const [formValues,handleInputChange, resetValues] = useForm()            
    const {nombre='',ingredientes = '',procedimiento = ''} = formValues;
    const [{data,loading,error,msg}, postFuntion ] = useFetchCrearReceta();
    console.log('fuera del handlesubmit',error)
    useEffect(() => {
        setTimeout(() => {
            setVariable(false)
        }, 5000);
        
    }, [variable])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(nombre.replace(/\s+/g, '').length < 4 || ingredientes.replace(/\s+/g, '').length < 4 || procedimiento.replace(/\s+/g, '').length < 4){
            alert('nop');
            return;
        }
        // setUpload(formValues);
        postFuntion('recetas', undefined, formValues,'POST');
        resetValues();
        if(error){
            console.log('Solo si hay error',error)
            setVariable(true);
        }
        
        
        // console.log('handleSubmit',upload)
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

            {
                loading &&
                <span>Cargando</span>
            }
            
            {
                variable && <span>{msg}</span>
            }
           
        </>
    )
}
