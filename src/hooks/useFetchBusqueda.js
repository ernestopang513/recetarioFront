import { useEffect, useState } from "react";
import { busquedaRecetas } from "../helpers/recetas";




export const useFetchBusqueda = (parametro = '') => { 


    const [busqueda, setBusqueda] = useState({
        data: [],
        loading: true,
        error: false,
        msg: ''
    });

    useEffect(() => {
        let controller = new AbortController();
        const signal = controller.signal;
        let isActive = true;
        busquedaRecetas(parametro,signal)
            .then(data => {
                if(isActive && data){
                    setBusqueda({
                        data,
                        loading: false,
                        error: false,
                        msg: ''
                    });
                }else if(isActive && !data){
                    setBusqueda({
                        data: null,
                        loading: false,
                        error: true,
                        msg: 'Hubo un error.'
                    })
                }
            })
        return () => {
            isActive = false;
            controller.abort();
        }
    }, [parametro])
    return busqueda
}