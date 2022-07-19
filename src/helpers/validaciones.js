


// const objetosVacios = (arreglo ) => {
    
//     let bandera = true;
//     arreglo.forEach(({value}) => {
//         if(value == '' || value.length < 2){
//             console.log('vacio')
//             bandera = false;
            
//         }
//     });

//     return bandera;
    
// };

const objetosVacios = (arreglo) => {

    const bandera = arreglo.some(elem => {
        return (elem.value === '' || elem.value.replace(/\s+/g, '').length < 3)
    })
    //regresa true en caso de encontrar alguna de las condiciones establecidas
    return bandera;

};

const extraeArreglo = (temporal) => {
    const arreglo = temporal.map(({value}) => {
        const valor = value.trim();
        return valor
    })
    return arreglo;
};

export{
    objetosVacios,
    extraeArreglo
};