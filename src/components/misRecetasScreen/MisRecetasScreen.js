import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.development';

import { useFetchAlll } from '../../hooks/useFetchAll';
import { RecetaCard } from '../home/RecetaCard';

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
        return  <Link
              key= {receta._id}
              className = 'cardReceta noStyle displayBlock'
              to = {`./gestionar/receta/${receta._id}`}
              >{receta.nombre}</Link>
      })
      :
        <p>{msg}</p>
      }
      
      {/* {
        data ? 
          data.usuario.recetas.map(receta => (<RecetaCard
              key = {receta._id}
              receta = {receta}
              />))
              :
                (<p>{error.msg} </p>)
      } */}

      </div>

      
        
        
        
        
    );
};
