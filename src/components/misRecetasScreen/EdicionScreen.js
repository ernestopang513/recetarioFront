import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch2 } from '../../hooks/useFetch';
import { useFetchActualizaReceta } from '../../hooks/useFetchActualizaReceta';
import { useForm } from '../../hooks/useForm';

export const EdicionScreen = () => {

  const {recetaId} = useParams();

  const {data:receta,loading} = useFetch2(recetaId);
  const [{data,loading2,error,msg},actualizarFuncion] = useFetchActualizaReceta();
  const [formValues ,handleInputChange] = useForm();
  
  
  

  const {nombre=receta.nombre,ingredientes=receta.ingredientes,procedimiento=receta.procedimiento} = formValues;  
  const {nombreInicial,ingredientesInicial,procedimientoInicial} = formValues;

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log(nombreInicial);
    // console.log(ingredientesInicial);
    // console.log(procedimientoInicial);
    // console.log(formValues)

    if(Object.keys(formValues).length === 0){
      alert('Debes editar la receta para modificarla.')
      return  
    }

    if(nombre.replace(/\s+/g, '').length < 4 || ingredientes.toString().replace(/\s+/g, '').length < 4 || procedimiento.toString().replace(/\s+/g, '').length < 4){
        alert('nop');
        return;
    }
    
    actualizarFuncion('recetas', recetaId, formValues,'PUT');
    // resetValues();
  }
  // console.log(nombre)
  // console.log(formValues)
  // try{
  //   let aux = ingredientes.toString();
  //   console.log(aux)
  // }catch{console.log('error')}
  // // console.log(ingredientes.toString())
  // console.log(procedimiento)
  
  return (
    <div>
      {  
        loading && <p>Cargando...</p>
      }

      {
        receta && !loading && 
        
        <form className='formContainer container' onSubmit={handleSubmit}>
          <label className='marginTop1rem' >Nombre</label>
          <input
            name='nombre' 
            type = 'text'
            autoComplete='off'
            value={nombre}
            onChange = {handleInputChange} 
          />
          <label className='marginTop1rem'>Ingredientes</label>
          <textarea 
            value={ingredientes}
            name= 'ingredientes'
            onChange={handleInputChange}
          />
          <label className='marginTop1rem'>Procedimiento</label>
          <textarea 
            value={procedimiento}
            name = 'procedimiento'
            onChange={handleInputChange}
          />
          <input 
                type = 'submit' value= 'Subir receta'
                disabled = {loading2}
             />
        </form>

      }

      {
        data && <pre>{JSON.stringify(data)}</pre>
      }

      {
        loading2 && <p>Cargando...</p>
      }

      {
        error && <span>{msg}</span>
      }

      {/* {
        receta && !loading && <input defaultValue={'value'} />
      } */}

      {/* {
        receta && !loading && <textarea defaultValue={receta.ingredientes}/>
      } */}

      {/* {
         receta && !loading && <textarea defaultValue={receta.procedimiento}/>
      } */}
      




    </div>
  )
}
