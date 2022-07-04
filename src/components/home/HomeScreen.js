import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useFetchAlll } from '../../hooks/useFetchAll';
import { RecetaCard } from './RecetaCard';

export const HomeScreen = () => {
    const {data, loading,error,msg} = useFetchAlll('recetas', undefined, undefined, undefined);
    // console.log(data)
    // console.log(error)
    
    return (
        <div className = 'container'>
            {loading && <p>Cargando....</p>}
            {
            (data) &&
            data.recetas.map(receta => (<RecetaCard
            key = {receta._id}
            receta = {receta}
            />))
            }
            {     
              error &&  (<p>{msg} </p> )
            }
        </div>
    )
}
// export const HomeScreen = () => {
//     const {data:{recetas } , loading,error} = useFetch('recetas', undefined, undefined, undefined);
//     // console.log(data)
//     // console.log(error)
    
//     return (
//         <div className = 'container'>
//             {loading && <p>Cargando....</p>}
//             {
//             (recetas) ?
//             recetas.map(receta => (<RecetaCard
//             key = {receta._id}
//             receta = {receta}
//             />))
//                 : 
//                 (<p>{error.msg} </p> )
//             }
//         </div>
//     )
// }
