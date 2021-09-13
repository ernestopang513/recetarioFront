import { useEffect, useState } from "react";
import { obtenerRecetaId, obtenerRecetas } from "../helpers/recetas";


export const useFetch = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        obtenerRecetas()
            .then(data => {
                setState({
                    data,
                    loading: false
                });
            })
        
    }, []);

    return state



}
export const useFetch2 = (parametro = '') => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        obtenerRecetaId(parametro)
            .then(data => {
                setState({
                    data,
                    loading: false
                });
            })
        
    }, [parametro]);

    return state



}