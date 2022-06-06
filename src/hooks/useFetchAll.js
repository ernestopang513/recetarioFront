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
        let controller = new AbortController();
        const signal = controller.signal;
        let isActive = true;
        fetchConToken(endpoint, optional,data,method,signal)
            .then(data => {
                if(isActive){
                    setState({
                        data,
                        loading: false,
                        error: false,
                        msg: ''
                    })
                }
            })

       return () => {
           isActive = false;
           controller.abort();
       }
    }, [endpoint,optional,data,method])


    return state;
}

