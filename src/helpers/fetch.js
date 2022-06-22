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
    
    console.log('llega al helper')
    const url = `http://localhost:8080/api/${endpoint}/${optional}`;
    // const url = `https://recetario-pang.herokuapp.com/api/${endpoint}/${optional}`;

    if(method === 'GET'){
        return fetch(url,{
            mode: 'cors',
            headers:{
                'content-type': 'application/json'
            },
        });
    }else{
        return fetch(url,{
            method,
            mode: 'cors',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}
const fetchConToken = async(endpoint, optional = '', data, method = 'GET',signal = null) => {

    const url = `http://localhost:8080/api/${endpoint}/${optional}`;
    // const url = `https://recetario-pang.herokuapp.com/api/${endpoint}/${optional}`;
    const token = localStorage.getItem('token');


    if(method === 'GET'){
        try {
            const respuesta = await fetch(url,{
                signal,
                mode: 'cors',
                headers: {
                    'x-token': token,
                    'content-type': 'application/json'
                }
            });
            const body = await respuesta.json();
            return body;
            
        } catch (error) {
            console.log(error);
            return null
        }
    }else{
        try {
            const respuesta = await fetch(url,{
                method,
                signal,
                mode: 'no-cors',
                headers:{
                    'x-token': token,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const body = await respuesta.json();
            console.log(body);
            return body;
            
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