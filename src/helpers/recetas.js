
const obtenerRecetas = async() => {
  try {
    const response = await fetch('http://localhost:8080/api/recetas')
    const body = await response.json();
    const res = body.recetas.map( (receta) => {
      return {
        nombre: receta.nombre
      }   
    })
    return res;
    
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const obtenerUsuarios = async(parametro = '') => {
  try {
    const url = `http://localhost:8080/api/buscar/usuarios/${parametro}`;
    console.log(url);
    const response = await fetch(url);
    const body = await response.json();
    const res = [...body.results];
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export{
  obtenerRecetas,
  obtenerUsuarios
}

