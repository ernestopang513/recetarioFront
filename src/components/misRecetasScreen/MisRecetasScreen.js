import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchAlll } from '../../hooks/useFetchAll';

export const MisRecetasScreen = ({uid}) => {

  const {data, loading, error,msg} = useFetchAlll ('usuarios', uid, undefined, undefined); 
    
  return (

      <div className='container' >
          <h3>
            Mis recetas
          </h3>

        {loading && <p>Cargando...</p>}
        
        { data && <pre>{JSON.stringify(data)}</pre>}

        {
          (data)&&
          data.usuario.recetas.map(receta => {  
            return  <Link
                      key= {receta._id}
                      className = 'cardReceta noStyle displayBlock'
                      to = {`./gestionar/receta/${receta._id}`}
                    >{receta.nombre}</Link>
        })
        }

        {
          error && <p>{msg}</p>
        }
      
      </div>
    
    );
};
