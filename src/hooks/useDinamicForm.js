import { useState } from "react";



export const useDinamicForm = (initialState = [{value: ''}]) => {
    const [values,setValues] =useState(initialState);
  
    const handleInputChange = ({target},index) => {
        let data = [...values];
        data[index][target.name] = target.value;
        setValues(data);
    };
    const addInput = (e) =>{
        e.preventDefault();
        const temporal = {value: ''}
        setValues([...values,temporal]);
    } 
    const deleteIngrediente = (e,index) => {
        e.preventDefault();
        let data = [...values];
        data.splice(index,1);
        setValues([
            ...data
        ]);
    }
    return [values,handleInputChange,addInput,deleteIngrediente];
  };