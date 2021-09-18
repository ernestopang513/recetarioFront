
const obtenerRecetas = async() => {
  try {
    const response = await fetch('http://localhost:8080/api/recetas',{
      mode: 'cors'
    })
    const body = await response.json();
    // const res = body.recetas.map( (receta) => {
    //   return {
    //     nombre: receta.nombre
    //   }   
    // });

    const res = [...body.recetas];
    console.log(body);
    // const res = [...body];
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    
  }
};
const obtenerRecetaId = async(parametro= '') => {
  try {
    const response = await fetch(`http://localhost:8080/api/recetas/${parametro}`,{
      mode: 'cors',
      headers: {
        'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGY1MzkyYTI4NjA4NDBjNjgwOTg4NTQiLCJpYXQiOjE2MzE1NjUzNDYsImV4cCI6MTYzNDE1NzM0Nn0.Td6gr64_EZpCDMd9E-xUIaLj2cLBYflmiJh37OGk9CI'
      }
    })
    const body = await response.json();
    // const res = body.recetas.map( (receta) => {
    //   return {
    //     nombre: receta.nombre
    //   }   
    // });

    const res = body.receta;
    return res;
  } catch (error) {
    console.log(error);
    // return null
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

export{
  obtenerRecetas,
  obtenerUsuarios,
  obtenerRecetaId
}
