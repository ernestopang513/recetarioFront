import React from 'react'
import { useFetchBusqueda } from '../hooks/useFetchBusqueda'

export const ResultadosDiv = ({buscar}) => {
    console.log('resultadosDiv')
    const {data=[],loading} = useFetchBusqueda(buscar);
    return (
        <div>
            {loading && <p>Cargando...</p>}
            
            {       
                 data.map(info => (<p key = {info.uid}>{info.nombre}</p> ))
            }     
        </div>
    )
}
