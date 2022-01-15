
const obtenerRecetas = async() => {
  try {
    const response = await fetch('http://localhost:8080/api/recetas/',{
      mode: "cors"
    })
    const body = await response.json();
    // const res = body.recetas.map( (receta) => {
    //   return {
    //     nombre: receta.nombre
    //   }   
    // });

    const res = [...body.recetas];
    // console.log(body);
    // // const res = [...body];
    // console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return null
  }
};
const obtenerRecetaId = async(parametro= '') => {
  const token = localStorage.getItem('token') || '';
  try {
    const response = await fetch(`http://localhost:8080/api/recetas/${parametro}`,{
      mode: 'cors',
      headers: {
        'x-token': token
      }
    })
    const body = await response.json();
    // const res = body.recetas.map( (receta) => {
    //   return {
    //     nombre: receta.nombre
    //   }   
    // });

    const res = body.receta;
    console.log(body)
    return res;
  } catch (error) {
    console.log(error);
    return null
  }
};

const obtenerUsuarios = async(parametro = '') => {
  try {
    const url = `http://localhost:8080/api/buscar/usuarios/${parametro}`;
    const response = await fetch(url,{
      mode: 'cors'
    });
    const body = await response.json();
    const res = [...body.results];
    console.log(body)
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
    console.log('aqui')
    return []
  }
}

//Función para busqueda de usuarios
const busquedaRecetas = async(parametro = '') => {
  try{
    const url = `http://localhost:8080/api/buscar/recetas/${parametro}`;
    const response = await fetch(url, {
      mode: 'cors'
    });

    const body = await response.json();
    const res = [...body.results];
    console.log(body);
    return res;
    
  }catch (error){
    console.log(error);
    return [];
  }
}

export{
  obtenerRecetas,
  obtenerUsuarios,
  obtenerRecetaId,
  busquedaRecetas
}

