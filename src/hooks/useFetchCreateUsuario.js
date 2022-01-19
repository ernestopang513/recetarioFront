import { useState } from "react"
import {fetchSinToken } from "../helpers/fetch";


export const useFetchCreateUsuario = () => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg: ''
    });

    const postFuntion = async(endpoint, optional, data, method) => {
        
        setState({
            ...state,
            loading: true
        });

        const respuesta = await fetchSinToken(endpoint, optional, data, method);
        if(respuesta){
            setState({
                ...state,
                loading: false,
                data:respuesta
            });
        }else{
            setState({
                ...state,
                loading: false,
                error: true,
                msg: 'Ocurrio un error'
            });
            setTimeout(() => {
                setState({
                    ...state,
                    error:false,
                    msg: ''
                });
            }, 3000);
        }
    }
    return [state,postFuntion];
}