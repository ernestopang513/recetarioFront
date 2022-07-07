import { useState } from "react"
import { fetchConToken } from "../helpers/fetch"





export const useFetchBorrarRerecta = ()  => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg: ''
    })

    const borrarRecetaFuncion = async(endpoint,optional) =>{

        const respuesta = await fetchConToken(endpoint,optional,undefined,'DELETE');

        if (respuesta){
            setState({
                ...state,
                loading: false,
                data: respuesta,
                msg: 'Receta eliminada'
            })
        }else{
            setState({
                ...state,
                loading: false,
                error: true,
                msg: 'Algo salio mal'
            });
            setTimeout(()=>{
                setState({
                    ...state,
                    error: false,
                    msg: ''
                });
            },3000);
        }
    }
    return [state, borrarRecetaFuncion]
}