import { useState } from "react"
import { fetchConToken } from "../helpers/fetch";
import { extraeArreglo } from "../helpers/validaciones";





export const useFetchActualizaReceta = () => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: false,
        msg:''
    });

    const actualizaFuncion = async(endpoint, optional,{nombre},ingredientes,procedimiento,method) => {

        // const VerificaNombre = !!nombre ? nombre : !!nombre;
        const VerificaNombre = nombre || false;
        const VerificaIngredientes = ingredientes || false;
        const VerificaProcedimiento = procedimiento || false;

        setState({
            ...state,
            loading: true
        });


        let newData = {};
        if (!!VerificaNombre){
            newData.nombre = VerificaNombre;
        }
        if(!!VerificaIngredientes) {
            newData.ingredientes = extraeArreglo(VerificaIngredientes);

        }
        if(!!VerificaProcedimiento) {
            newData.procedimiento = extraeArreglo(VerificaProcedimiento);

        }
      

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
