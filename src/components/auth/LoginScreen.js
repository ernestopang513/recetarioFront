import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router';
import { fetchSinToken } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({setUid}) => {
    const history = useHistory();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState({
        value: false,
        msg: ''
    })
    const [formValues,handleInputChange, resetValues] = useForm()            
    const {correo = '', password = ''} = formValues;

    // useEffect(() => {
    //     console.log('efecto')
    // }, [data,loading,error])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(correo.replace(/\s+/g, '').length < 4 || password.replace(/\s+/g, '').length < 4 ){
            alert('nop');
            return;
        }
        setLoading(true);

        try {
            const respuesta = await fetchSinToken('auth', 'login', formValues, 'POST');
            const body = await respuesta.json();
            console.log(body)
            localStorage.setItem('token', body.token);
            setUid(body.usuario.uid);
            setLoading(false);
            history.push('/privada');
            
            
        } catch (error) {
            seterror({
                value: true,
                msg: 'Hubo un error'
            })
            console.log(error)
            setLoading(false);
        }
    }


    return (
        <>

            <h3>Login screen</h3>
            <form onSubmit = {handleSubmit}>
                <label>Correo</label>        
                
                <input
                    name = 'correo'
                    value = {correo}
                    type = 'text'
                    onChange = {handleInputChange}
                />
                
                <label>Contraseña</label>        

                <input
                    name = 'password'
                    value = {password}
                    type = 'text'
                    onChange = {handleInputChange}
                />

                <input type = 'submit' value = 'Enviar' disabled = {loading}/>
            </form>  

            {
                loading && <h4>loading....</h4>
            } 
            {
                error.value && <span>{error.msg}</span>
            }
        </>
    )
}
