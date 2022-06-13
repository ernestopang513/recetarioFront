import { useState } from "react"
import { fetchConToken } from "../helpers/fetch";





export const useFetchActualizaReceta = () => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg:''
    });

    const actualizaFuncion = async(endpoint, optional,{nombre,ingredientes,procedimiento},method) => {

        // const VerificaNombre = !!nombre ? nombre : !!nombre;
        const VerificaNombre = nombre || false;
        const VerificaIngredientes = ingredientes || false;
        const VerificaProcedimiento = procedimiento || false;

        console.log(VerificaNombre)
        setState({
            ...state,
            loading: true
        });

            const separador = (variable ) => {
            if(!variable){
                return undefined;
            }
            const temporal = variable.trim().split(',');
            const arreglo = temporal.map(element => {
                const valor = element.trim();
                return valor
            })
            return arreglo;
        };

    // const newDato = (nombre,ingredientes,procedimiento) =>{
    //     const verificacion = [nombre,ingredientes,procedimiento];
    //     const objeto = {};
    //     if
    // }    

        let newData = {};
        if (!!VerificaNombre){
            newData.nombre = VerificaNombre;
        }
        if(!!VerificaIngredientes) {
            newData.ingredientes = separador(VerificaIngredientes);

        }
        if(!!VerificaProcedimiento)
            newData.procedimiento = separador(VerificaProcedimiento);
        

            // console.log(`newData `)
            // console.log(newData)
    //     const ingredientes = separador(data.ingredientes);
    //     const procedimiento = separador(data.procedimiento);
    //     const newData = {
    //         nombre: data.nombre,
    //         ingredientes,
    //         procedimiento
    //     }
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
        

     return [state, actualizaFuncion];

}