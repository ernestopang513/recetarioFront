import { useEffect, useState } from "react"
import { fetchConToken } from "../helpers/fetch"






export const useFetchAlll = (endpoint, optional,data,method) => {

    const [state, setState] = useState({
        data: undefined,
        loading: true,
        error: false,
        msg:''
    })
    
    useEffect(() => {
        console.log('montado')
        // let controller = new AbortController();
        // const signal = controller.signal;
        // let isActive = true;
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
       return () => {
           console.log('desmontado')
       }
    }, [endpoint,optional,data,method])


    return state;
}

