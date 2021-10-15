import React, { useEffect, useState } from 'react';
import { useFetchCrearReceta } from '../../hooks/useFetchCrearReceta';
import { RecetaItem } from '../recetasScreen/RecetaItem';
import {useForm} from '../../hooks/useForm'
import './crearReceta.css';
import { CrearForm } from './CrearForm';


// {
//     "nombre": "Caldo de camaron",
//     "ingredientes": ["camaron", "papas", "SAL", "zanahorias"],
//     "procedimiento": ["Cortar las verduras", "Sancochar", "Integrar"]
// }



// const useForm = (initialState = {}) => {
//     const [values, setValues] = useState(initialState);

//     function resetValues() {
//         setValues({
//             nombre: '',
//             ingredientes: '',
//             procedimiento: ''
//         });
//     }


//     const handleInputChange = ({target}) => {
        
//     setValues({
//         ...values,
//         [target.name]: target.value
//         })
//     }
//     return [values, handleInputChange, resetValues];
// }


export const CrearReceta = () => {

    const [{data,loading,error,msg}, postFuntion ] = useFetchCrearReceta();
    
            return (
        <>
            <CrearForm postFuntion = {postFuntion} loading = {loading}/>   

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
