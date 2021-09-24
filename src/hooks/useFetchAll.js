import { useEffect, useState } from "react"
import { fetchConToken } from "../helpers/fetch"






export const useFetchAll = (endpoint, optional,data,method) => {

    const [state, setState] = useState({
        data: {},
        loading: true,
        error: false,
        msg:''
    })
    
    useEffect(() => {
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
       
    }, [endpoint,optional,data,method])


    return state;
}

