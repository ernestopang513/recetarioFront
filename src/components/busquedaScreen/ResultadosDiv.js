import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchBusqueda } from '../../hooks/useFetchBusqueda';
export const ResultadosDiv = ({buscar}) => {
    console.log('resultadosDiv')
    const {data,loading} = useFetchBusqueda(buscar);
    console.log(data);
    return (
        <div>
            {loading && <p>Cargando...</p>}
            
            {       
               data &&  data.map(info => (
                <Link 
                    className='cardReceta noStyle displayBlock' 
                    key = {info._id}
                    to = {`./private/receta/${info._id}`}
                >{info.nombre}</Link> ))
            }  
            {!loading && (data.length === 0) && <p>Sin coincidencias</p> }   
               
        </div>
    )
}
