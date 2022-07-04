import React from 'react';
import { useFetchCrearReceta } from '../../hooks/useFetchCrearReceta';
import { RecetaItem } from '../recetasScreen/RecetaItem';
import './crearReceta.css';
import { CrearForm } from './CrearForm';
import { Link } from 'react-router-dom';



export const CrearReceta = () => {

    const [{data,loading,error,msg}, postFuntion ] = useFetchCrearReceta();
    
            return (
        <>
            
            {
                data && <Link to = '/private/crear' >Agregar receta</Link>
            }
            {
                (!data) ? 
                <CrearForm postFuntion = {postFuntion} loading = {loading}/>   
                :
                data && <RecetaItem {...data.receta}/>
            }
            {/* <CrearForm postFuntion = {postFuntion} loading = {loading}/>    */}

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
                // data && <RecetaItem {...data.receta}/>
            }
        </>
    )
}
