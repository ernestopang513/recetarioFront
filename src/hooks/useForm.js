import { useState } from "react";



export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    function resetValues() {
        setValues({
            nombre: '',
            ingredientes: '',
            procedimiento: ''
        });
    }


    const handleInputChange = ({target}) => {
        
    setValues({
        ...values,
        [target.name]: target.value
        })
    }
    return [values, handleInputChange, resetValues];
}