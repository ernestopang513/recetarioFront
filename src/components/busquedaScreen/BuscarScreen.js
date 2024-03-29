import React, { useState } from 'react'
import { ResultadosDiv } from './ResultadosDiv';

export const BuscarScreen = ({uid}) => {

    console.log(uid)
    const [inputValue, setInputValue] = useState('');
    const [buscar, setBuscar] = useState(null)
    // const {data} = useFetchBusqueda(buscar)
    // console.log(buscar)
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
            <form   onSubmit = {handleSubmit} className= 'formContainer container'>
                <label>Buca tu receta</label>
                <input
                    type= 'text' 
                    name = 'inputValue'
                    value = {inputValue}
                    autoComplete = 'off'
                    onChange = {handleInputChange}
                />
                
                <input 
                    type = 'submit'
                />
            </form>
            {(buscar &&
            <ResultadosDiv
            
                buscar = {buscar}
            />)
            }
        </div>
    )
}
