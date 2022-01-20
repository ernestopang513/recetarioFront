import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchSinToken } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({setUid,setName}) => {

    // const setUid = props.setUid;
    // const setName = props.setName;
    
    
    console.log(setUid)
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
            localStorage.setItem('name', body.usuario.nombre);
            localStorage.setItem('uid', body.usuario.uid);
            setLoading(false);
            setUid(body.usuario.uid);
            setName(body.usuario.uid);
            // setName(body.usuario.nombre);
            // history.push('/crear');
            // history.push('/crear');
        } catch (error) {
            seterror({
                value: true,
                msg: 'Hubo un error'
            })
            setLoading(false);
            console.log(error)
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

            <Link
                to = './register'
            >Registrate</Link>
        </>
    )
}
