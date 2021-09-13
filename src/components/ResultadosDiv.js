import React from 'react'
import { useFetchBusqueda } from '../hooks/useFetchBusqueda'

export const ResultadosDiv = ({buscar}) => {

    const {data} = useFetchBusqueda(buscar);
    return (
        <div>
            {       
                    data.map(info => (
                        <p
                        key = {info.uid}>{info.nombre}</p>
                    ))
                }     
        </div>
    )
}
