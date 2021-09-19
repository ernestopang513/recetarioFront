import React from 'react'
import { useFetchBusqueda } from '../hooks/useFetchBusqueda'

export const ResultadosDiv = ({buscar}) => {
    console.log('resultadosDiv')
    const {data,loading} = useFetchBusqueda(buscar);
    return (
        <div>
            {loading && <p>Cargando...</p>}
            
            {       
               data &&  data.map(info => (<p key = {info.uid}>{info.nombre}</p> ))
            }  
            {!loading && (data.length === 0) && <p>Sin coincidencias</p> }   
               
        </div>
    )
}
