import React, { useState } from 'react'
import { useFetchBusqueda } from '../hooks/useFetchBusqueda';
import { ResultadosDiv } from './ResultadosDiv';

export const BuscarScreen = () => {

    const [inputValue, setInputValue] = useState('');
    const [buscar, setBuscar] = useState()
    // const {data} = useFetchBusqueda(buscar)
    const handleInputChange = ({target}) => {
        setInputValue( target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length === 0){
            alert('nop we no te mames');
        }else{
            setBuscar(inputValue);
            setInputValue('');
        }
    } 

    return (
        <div>
            <h2>Búsquedas encontradas</h2>
            <form   onSubmit = {handleSubmit}>
                <label>Buca tu receta</label>
                <input
                    type= 'text' 
                    name = 'inputValue'
                    value = {inputValue}
                    autoComplete = 'off'
                    onChange = {handleInputChange}
                />
                <p>{inputValue}</p>
                <input 
                    type = 'submit'
                />
            </form>
            <ResultadosDiv
                buscar = {buscar}
            />
        </div>
    )
}
