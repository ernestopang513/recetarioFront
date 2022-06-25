import { useState } from "react"
import {fetchSinToken } from "../helpers/fetch";


export const useFetchCreateUsuario = () => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg: ''
    });

    const postFuntion = async(endpoint, optional, data, method, resetValues) => {
        
        setState({
            ...state,
            loading: true
        });

        try{
            data.rol = 'USER_ROLE';
            const respuesta = await fetchSinToken(endpoint, optional, data, method);
            const body = await respuesta.json()
            console.log(body);
            if(Object.keys(body)[0] === 'errors'){
                // console.log(Object.keys(body)[0] == 'errors');
                // console.log(Object.keys(body));
                // console.log(typeof Object.keys(body));
                // console.log('Ocurrió un error');
                // console.log(body.errors[0].msg);
                const msgError = body.errors[0].msg;
                setState({
                    ...state,
                    loading: false,
                    error: true,
                    msg: msgError,
                });
                setTimeout(() => {
                    setState({
                        ...state,
                        error:false,
                        msg: '',
                        
                    });
                }, 3000);
                
            }else{
                setState({
                    ...state,
                    error: true,
                    loading: false,
                    msg: 'Usuario registrado',
                });
                setTimeout(() => {
                    setState({
                        ...state,
                        error: false,
                        msg: '',
                    })
                }, 3000);
                
                resetValues(data);
            }
            
            }catch(error){
                console.log(error);
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