import React from 'react'

export const RegisterScreen = () => {

    const handleSubmit = async(e) => {

        e.preventDefault();
        console.log('hola');
        
    }
    return (
        <>
            <h3>Register screen</h3>
            <form onSubmit={handleSubmit}>
                <label>Correo</label>
                <input
                    name = 'correo'
                    type='text'
                />
                <label>Contraseña</label>
                <input
                    name = 'password'
                    type= 'text'
                />
                <input
                    type='submit'
                    value='Registrame'
                />
            </form>
        </>
    )
}
