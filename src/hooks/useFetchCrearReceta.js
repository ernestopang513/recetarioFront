import { useState } from "react"
import { fetchConToken } from "../helpers/fetch"


export const useFetchCrearReceta = () => {
    
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg:''
    });
    
    
    const postFuntion = async(endpoint, optional,{formValues:{nombre},valuesI,valuesP},method) => {

        setState({
            ...state,
            loading: true
        });

        const extraeArreglo = (temporal) => {
            const arreglo = temporal.map(({value}) => {
                const valor = value.trim();
                return valor
            })
            return arreglo;
        };
        const ingredientes = extraeArreglo(valuesI);
        console.log(ingredientes);
        const procedimiento = extraeArreglo(valuesP);
        console.log(procedimiento);


        const newData = {
            nombre,
            ingredientes,
            procedimiento
        }
        console.log(newData);
        const  respuesta = await fetchConToken(endpoint, optional,newData,method);
        if(respuesta){
            setState({
                ...state,
                loading: false,
                data: respuesta
            });
        }else{
            setState({
                ...state,
                loading: false,
                error: true,
                msg: 'Hubo un error'
            });
            setTimeout(() => {
                setState({
                    ...state,
                    error: false,
                    msg: ''
                })
            }, 3000);
        }
    }
        

    return [state, postFuntion];
}
// export const useFetchCrearReceta = () => {
    
//     const [state, setState] = useState({
//         data: null,
//         loading: false,
//         error: false,
//         msg:''
//     });
    
    
//     const postFuntion = async(endpoint, optional,data,method) => {

//         setState({
//             ...state,
//             loading: true
//         });
//             const separador = (variable ) => {
//             const temporal = variable.trim().split(',');
//             const arreglo = temporal.map(element => {
//                 const valor = element.trim();
//                 return valor
//             })
//             return arreglo;
//         };
//         const ingredientes = separador(data.ingredientes);
//         const procedimiento = separador(data.procedimiento);
//         const newData = {
//             nombre: data.nombre,
//             ingredientes,
//             procedimiento
//         }
//         const  respuesta = await fetchConToken(endpoint, optional,newData,method);
//         if(respuesta){
//             setState({
//                 ...state,
//                 loading: false,
//                 data: respuesta
//             });
//         }else{
//             setState({
//                 ...state,
//                 loading: false,
//                 error: true,
//                 msg: 'Hubo un error'
//             });
//             setTimeout(() => {
//                 setState({
//                     ...state,
//                     error: false,
//                     msg: ''
//                 })
//             }, 3000);
//         }
//     }
        

//     return [state, postFuntion];
// }

