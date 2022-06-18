import React, { useState, useEffect } from 'react';
// import '../App.css';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { BuscarScreen } from '../components/busquedaScreen/BuscarScreen';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { HomeScreen } from '../components/home/HomeScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';
import { Autentificando } from './Autentificando';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';
import { RutasPrueba } from './RutasPrueba';

export const AppRouter = () => {
    const [uid, setUid] = useState('');
    const [name, setName] = useState('');
    const [wait, setWait] = useState(true);
    useEffect(() => {

        // const token = localStorage.getItem('token') || '';
        const name1 = localStorage.getItem('name') || '';
        const uid1 = localStorage.getItem('uid') || '';

        setUid(uid1);
        setName(name1);
        setTimeout(() => {
            setWait(false);
            
        }, 2000);
        // setWait(false);

    }, []);
    // console.log(!!uid)
    // console.log(uid)
    // console.log(!!name)
    return (
        <Router>
            <header className = 'marginTop1rem' >
                <h1 className = 'marginBottom1rem' >Recetario familiar</h1>

                {
                    uid     &&
                    <button
                        className = 'centralContainer'
                        onClick = {() => {
                            localStorage.clear();
                            setUid('')}}
                    >Log out</button>
                }
            </header>

                <nav className = 'marginBottom1rem'>
                    <ul >
                        <li className = 'marginBottomMrem'>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li     className = 'marginBottomMrem'>
                            <Link to = '/buscar'>Buscar</Link>
                        </li>
                        <li className = 'marginBottomMrem'>
                            <Link to = '/private/crear'>Crear</Link>
                        </li >
                        <li className = 'marginBottomMrem'>
                            <Link to = '/private/gestionar'>Gestionar</Link>
                        </li>
                        {/* <li className = 'marginBottomMrem'>
                            <Link to = '/auth/login'>Login</Link>
                        </li> */}
                        {/* <li> */}
                            {/* <Link to = '/crear'>Privada pruebas</Link> */}
                        {/* </li> */}
                    </ul>
                </nav>
            <div>
                 <Switch>
                    <Route
                        exact
                        path = '/'
                        component = {HomeScreen}

                    />

                    {/* <Route
                        exact
                        path = '/buscar'
                        component = {BuscarScreen}
                    /> */}

                    <Route
                        exact
                        path='/buscar'

                    >
                        <BuscarScreen uid = {uid}/>
                    </Route>
                    {/* <Route
                        exact
                        path = '/crear'
                        component = { CrearReceta}
                    /> */}
                    {/* <Route
                        exact
                        path = '/gestionar'
                        component = { () => (<p>Ruta para gestionar las recetas</p>)}
                    /> */}

                    {/* <Route
                        exact
                        path = '/receta/:recetaId'
                    >
                        <RecetaScreen
                            uid = {!!uid}
                        />
                    </Route>  */}

                    {/* <Route
                        exact
                        path = '/login'

                    >
                        <LoginScreen setUid = {setUid}/>
                    </Route> */}

                    {/* <PublicRoute
                       path = '/auth/login'
                       exact
                       component = {LoginScreen}
                       isAuthenticated = {!!uid}
                       propiedades = {{setUid,setName}}
                    /> */}


                    {
                        !wait ? 

                        <RutasPrueba
                            isAuthenticadet = {!!uid}
                            // propiedades = {{setUid,setName,uid}}
                            setuid = {setUid}
                            setName = {setName}
                            uid= {uid}
    
                        />
                        :
                           <Route
                            path='/private'
                            component ={Autentificando}
                           />
                    }

                     {/* <PublicRoute
                       path = '/auth'
                       component = {AuthRouter}
                       isAuthenticated = {!!uid}
                       propiedades = {{setUid,setName}}
                    />

                    <PrivateRoute
                       path = '/private'
                       component = {PrivateRouter}
                       isAuthenticated = {!!uid}
                       propiedades = {{uid}}

                    /> */}


                    <Redirect
                       to = '/'
                    />

                 </Switch>
            </div>
        </Router>
    )

}
