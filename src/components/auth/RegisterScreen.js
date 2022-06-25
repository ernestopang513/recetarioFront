import React from 'react'
import { useFetchCreateUsuario } from '../../hooks/useFetchCreateUsuario';
import { RegisterScreenForm } from './RegisterScreenForm';

export const RegisterScreen = () => {
    
    const [{data, loading, error, msg}, postFuntion] = useFetchCreateUsuario()
    
    
    return (
        <>
            

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
