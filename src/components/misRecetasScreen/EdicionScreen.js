import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { objetosVacios } from '../../helpers/validaciones';
import { useDinamicForm } from '../../hooks/useDinamicForm';
import { useFetch2 } from '../../hooks/useFetch';
import { useFetchActualizaReceta } from '../../hooks/useFetchActualizaReceta';
import { useForm } from '../../hooks/useForm';
import { InputDinamic } from '../Reutilizable/InputDinamic';

const generador = (arreglo= ['']) => {

  const variable = arreglo.map(item => {
    return {value: item}
  });

  return variable;
};


export const EdicionScreen = () => {

  const history = useHistory();
  const {recetaId} = useParams();

  const {data:receta,loading} = useFetch2(recetaId);

  const [valuesI, handleInputChangeI, addInputI , deleteIngredienteI,setValuesI] =useDinamicForm();
  const [valuesP, handleInputChangeP, addInputP , deleteIngredienteP,setValuesP] =useDinamicForm();

  const [{loading2,error,msg},actualizarFuncion] = useFetchActualizaReceta();
  const [formValues ,handleInputChange, , setFormValues] = useForm();
  
  const {nombre=receta.nombre} = formValues;
  
  
  useEffect(() => {
    setValuesI(generador(receta.ingredientes));
    setValuesP(generador(receta.procedimiento));
    setFormValues({nombre});
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(objetosVacios(valuesI) || objetosVacios(valuesP) || nombre.replace(/\s+/g, '').length < 4){
      alert('Las casillas vacias y los nombres menores a 4 caracteres no estan permitidos');
      return;
    }
    
    actualizarFuncion('recetas',recetaId,formValues,valuesI,valuesP,'PUT')
    setTimeout(() => {
          !error && history.goBack();
          
        }, 1000);
  }
  
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
          
          <InputDinamic
                values = {valuesI}
                handleInputChange = {handleInputChangeI}
                addInput = {addInputI}
                deleteIngrediente = {deleteIngredienteI}
                text = 'Ingredientes'
            />

          <InputDinamic
              values = {valuesP}
              handleInputChange = {handleInputChangeP}
              addInput = {addInputP}
              deleteIngrediente = {deleteIngredienteP}
              text = 'Procedimiento'
          />


          <input 
                type = 'submit' value= 'Subir receta'
                disabled = {loading2}
             />
        </form>

      }

      {
        // data && <pre>{JSON.stringify(data)}</pre>
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
