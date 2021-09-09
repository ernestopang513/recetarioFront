import { useEffect, useState } from "react";
import { obtenerRecetas } from "../helpers/recetas";


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