import { useEffect, useState } from "react"
import { fetchConToken } from "../helpers/fetch"


export const useFetchCrearReceta = () => {
    
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: false,
        msg:''
    });
    
    
    const postFuntion = (endpoint, optional,data,method) => {

        setState({
            ...state,
            loading: true
        });
        fetchConToken(endpoint, optional,data,method)
            .then(data => {
                (data)?
                setState({
                    data,
                    loading: false,
                    error: false,
                    msg: ''
                })
                :
                setState({
                    data,
                    loading: false,
                    error: true,
                    msg: 'Algo salio mal'
                })
            })
    }
        

    return [state, postFuntion];
}

