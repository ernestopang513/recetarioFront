import React from 'react'
import { useParams } from 'react-router'
import { useFetch2 } from '../../hooks/useFetch'
import { RecetaItem } from './RecetaItem';

export const RecetaScreen = ({uid}) => {

    
    const {recetaId} = useParams();
    const {data:receta,loading} = useFetch2(recetaId);
    
    // if(!uid){
    //     return (
    //         <> 
    //             <Redirect to = '/auth/login'/>
    //         </>
    //     )
    // }
    
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
        </div>
    )
}
