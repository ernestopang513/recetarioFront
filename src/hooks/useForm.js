import { useState } from "react";



export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // function resetValues() {
    //     setValues({
    //         nombre: '',
    //         ingredientes: '',
    //         procedimiento: ''
    //     });
    // }
    function resetValues(campos){

        const newCampos = campos;
        for(let campo in newCampos){
            newCampos[campo] = '';
        }
        setValues({
            ...newCampos
        })
        console.log(newCampos);
    }


    const handleInputChange = ({target}) => {
        
    setValues({
        ...values,
        [target.name]: target.value
        })
    }
    return [values, handleInputChange, resetValues];
}