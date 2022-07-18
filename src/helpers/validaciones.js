


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
        return (elem.value == '' || elem.value.replace(/\s+/g, '').length < 3)
    })

    return bandera;

};

export{
    objetosVacios
};