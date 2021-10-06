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

    const url = `http://localhost:8080/api/${endpoint}/${optional}`;

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url,{
            method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}
const fetchConToken = async(endpoint, optional = '', data, method = 'GET') => {

    const url = `http://localhost:8080/api/${endpoint}/${optional}`;

    if(method === 'GET'){
        try {
            const respuesta = await fetch(url,{
                headers: {
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGY1MzkyYTI4NjA4NDBjNjgwOTg4NTQiLCJpYXQiOjE2MzI3ODE3OTMsImV4cCI6MTYzNTM3Mzc5M30.PCFmPlysqIdOeSzdVBLWpJpaFHiufbyMKPGCJURsKp4',
                    'content-type': 'application/json'
                }
            });
            const body = await respuesta.json();
            return {body}
            
        } catch (error) {
            console.log(error);
        }
    }else{
        try {
            const respuesta = await fetch(url,{
                method,
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGY1MzkyYTI4NjA4NDBjNjgwOTg4NTQiLCJpYXQiOjE2MzI3ODE3OTMsImV4cCI6MTYzNTM3Mzc5M30.PCFmPlysqIdOeSzdVBLWpJpaFHiufbyMKPGCJURsKp4',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const body = await respuesta.json();
            console.log(body);
            return body.receta;
            
        } catch (error) {
            console.log('hola soy un error',error)
            return null
        }
    }
}
// const fetchConToken = (endpoint, optional = '', data, method = 'GET') => {

//     const url = `http://localhost:8080/api/${endpoint}/${optional}`;

//     if(method === 'GET'){
//         return fetch(url,{
//             headers: {
//                 'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGY1MzkyYTI4NjA4NDBjNjgwOTg4NTQiLCJpYXQiOjE2MzE1NjUzNDYsImV4cCI6MTYzNDE1NzM0Nn0.Td6gr64_EZpCDMd9E-xUIaLj2cLBYflmiJh37OGk9CI'
//             }
//         });
//     }else{
//         return fetch(url,{
//             method,
//             headers:{
//                 'x-token': 'token',
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//     }
// }

export{
    fetchSinToken,
    fetchConToken
}