import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../helpers/recetas";




export const useFetchBusqueda = (parametro = '') => { 


    const [busqueda, setBusqueda] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        obtenerUsuarios(parametro)
            .then(data => {
                setBusqueda({
                    data,
                    loading: false
                });
            })
    }, [parametro])
    return busqueda
}