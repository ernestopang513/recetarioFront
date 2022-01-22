import React from 'react'
import { useFetchCreateUsuario } from '../../hooks/useFetchCreateUsuario';
import { RegisterScreenForm } from './RegisterScreenForm';

export const RegisterScreen = () => {
    
    const [{data, loading, error, msg}, postFuntion] = useFetchCreateUsuario()
    
    // const [formValues,handleInputChange, resetValues] = useForm()            
    // const {correo = '', password = '', nombre = ''} = formValues;

    
    // const handleSubmit = async(e) => {

    //     e.preventDefault();
        
    //     // console.log(formValues);
    //     if(correo.replace(/\s+/g, '').length < 4 || password.replace(/\s+/g, '').length < 4 || nombre.replace(/\s+/g, '').length < 4 ){
    //         alert('nop');
    //         return;
    //     }

    //     postFuntion('usuarios', undefined, formValues, 'POST');
    // }
    return (
        <>
            {/* <h3>Register screen</h3>
            <form className='marginTop1rem' onSubmit={handleSubmit}>
                <label className='displayBlock'>Nombre</label>
                <input
                    className='displayBlock'
                    name = 'nombre'
                    value={nombre}
                    type='text'
                    onChange={handleInputChange}
                />
                <label className='displayBlock' >Correo</label>
                <input
                    className='displayBlock'
                    name = 'correo'
                    value={correo}
                    type='text'
                    onChange={handleInputChange}
                />
                <label className='displayBlock'>Contraseña</label>
                <input
                    className='displayBlock'
                    name = 'password'
                    value={password}
                    type= 'text'
                    onChange={handleInputChange}
                />
                <input
                    className='marginTop1rem'
                    type='submit'
                    value='Registrame'
                />
            </form> */}

            <RegisterScreenForm postFuntion = {postFuntion} loading = {loading}  />
            {
                loading && <span>Cargando...</span>
            }
            {
                error && <span>{msg}</span>
            }
            {
                data && <pre>{JSON.stringify(data)}</pre>
            }
        </>
    )
}
