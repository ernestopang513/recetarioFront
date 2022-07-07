import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { useFetch2 } from '../../hooks/useFetch';
import { useFetchAlll } from '../../hooks/useFetchAll';
import { useFetchBorrarRerecta } from '../../hooks/useFetchBorrarReceta';
import { RecetaItem } from '../recetasScreen/RecetaItem';

export const PrevistaScreen = () => {
  
  const history =useHistory();
  const {recetaId} = useParams();
  const {data:receta,loading} = useFetch2(recetaId);
  const [{data:respuesta,loading:recetaBorrada,error,msg},borrarRecetaFuncion] = useFetchBorrarRerecta();



  const handleClick = () => {
    const confirmacion = window.confirm('Al confirmar se eliminara la receta esta acción no es reversible');
    console.log(confirmacion);

    if(confirmacion){
      borrarRecetaFuncion('recetas', recetaId);
      console.log('confirma');
      setTimeout(() =>{
        // history.replace('./')
        history.goBack();
  
      }, 1000)
    } 

  }

  return (

      <div>

          {loading && <p>Cargando ...</p>}

          {
             receta && !loading && receta.length !== 0 &&
              <RecetaItem {...receta} /> 
          }

          {
              !receta && <span>Hubo un error</span>
          }

          <button
            onClick={handleClick}
          >Eliminar</button>
          <Link
            to = {`./receta/${recetaId}`}
          >Editar</Link>

          {
            recetaBorrada && <p>Eliminando...</p>
          }

          {
            error && <p>Ups ocurrio un error intentalo mas tarde o refresca el sitio web.</p>
          }

          {
            respuesta && <p>{msg}</p>
          }
      </div>
  )
}
