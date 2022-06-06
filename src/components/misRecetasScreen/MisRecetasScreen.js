import React from 'react';
import { useEffect } from 'react/cjs/react.development';

import { useFetchAlll } from '../../hooks/useFetchAll';
export const MisRecetasScreen = ({uid}) => {

  const {data, loading, error,msg} = useFetchAlll ('usuarios', uid, undefined, undefined); 
  
  // useEffect(() => {
  //   console.log('montado')
  
  //   return () => {
  //     console.log('desmontado')
  //   }
  // }, [])
  
  
  return (

      <div className='container' >
        <h3>
          Mis recetas s
        </h3>

      {loading && <p>Cargando...</p>}
      
      { data && <pre>{JSON.stringify(data)}</pre>}

      {
        (data)?
      data.usuario.recetas.map(receta => {  
        return <p key = {receta._id}>{receta.nombre}</p>
      })
      :
        <p>{msg}</p>
      }
      {/* {
        (data)?
        console.log('data')
        :
        console.log('no data')
      } */}

      </div>

      
        
        
        
        
    );
};
