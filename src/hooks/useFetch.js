import { useEffect, useState } from "react";
import { obtenerRecetaId, obtenerRecetas } from "../helpers/recetas";


export const useFetch = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,
        error: {
            value: false,
            msg: ''
        }
    });


    useEffect(() => {
        obtenerRecetas()
            .then(data => {
                (data)?
                setState({
                    data,
                    loading: false,
                    error: {
                        value: false,
                        msg: ''
                    }
                })
                :
                setState({
                    data,
                    loading:false,
                    error: {
                        valule: true,
                        msg:'Algo salio mal'
                    }
                })
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