import React, { useEffect, useState } from 'react';
import { useFetchCrearReceta } from '../../hooks/useFetchCrearReceta';
import { RecetaItem } from '../recetasScreen/RecetaItem';
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

    const [formValues,handleInputChange, resetValues] = useForm()            
    const {nombre='',ingredientes = '',procedimiento = ''} = formValues;
    const [{data,loading,error,msg}, postFuntion ] = useFetchCrearReceta();
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
                error && <span>{msg}</span>
            }
          
            {
                data && <pre>{JSON.stringify(data)}</pre>
            }
            {
                data && <RecetaItem {...data}/>
            }
        </>
    )
}
