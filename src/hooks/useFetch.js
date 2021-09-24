import { useEffect, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";
import { obtenerRecetaId, obtenerRecetas } from "../helpers/recetas";


// export const useFetch = () => {

//     const [state, setState] = useState({
//         data: [],
//         loading: true,
//         error: {
//             value: false,
//             msg: ''
//         }
//     });


//     useEffect(() => {
//         obtenerRecetas()
//             .then(data => {
//                 (data)?
//                 setState({
//                     data,
//                     loading: false,
//                     error: {
//                         value: false,
//                         msg: ''
//                     }
//                 })
//                 :
//                 setState({
//                     data,
//                     loading:false,
//                     error: {
//                         valule: true,
//                         msg:'Algo salio mal'
//                     }
//                 })
//             })
//     }, []);

//     return state



// }
export const useFetch = (endpoint, optional,data,method) => {

    const [state, setState] = useState({
        data: {
            total: '',
            recetas: []
        },
        loading: true,
        error: {
            value: false,
            msg: ''
        }
    });


    useEffect(() => {
        const fetchFuntion = async() => {

            try {
                const response = await fetchSinToken(endpoint,optional,data,method);
                const body = await response.json();
                // const prueba = {...body};
                // console.log(response)
                // console.log(body)
                // console.log(prueba)
                // // const res = [...body.recetas];
                // const res = body
                return body;
            } catch (error) {
                console.log(error)
                return null;
            }


        }
        fetchFuntion()
            .then(data => {
                data?
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
                    data: [],
                    loading:false,
                    error: {
                        valule: true,
                        msg:'Algo salio mal'
                    }
                })
            })    
    }, [endpoint,optional,data,method]);

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