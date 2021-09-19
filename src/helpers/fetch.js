// const fetchSinToken = ( endpoint ,data, method = 'GET' ) => {

//     const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/
//     if (method === 'GET'){
//         return fetch(url);
//     }else{
//         return fetch(url,{
//             method,
//             headers:{
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//     }
// };


const fetchSinToken = (endpoint, optional = '', data, method = 'GET') => {

    const url = `http://localhost:8080/api/${endpoint}/${optional}`

    if(method === 'GET'){
        return fetch(url);
    }else{
        throw Error('Mamo');
    }
}