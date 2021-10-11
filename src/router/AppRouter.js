import React, { useState, useEffect } from 'react';
// import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { BuscarScreen } from '../components/BuscarScreen';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { HomeScreen } from '../components/home/HomeScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';
import { PrivateRoute } from './PrivateRoute';
export const AppRouter = () => {
    const [uid, setUid] = useState('');

    
    return (
        <Router>
            <header className = 'marginTop1rem' >
                <h1 className = 'marginBottom1rem' >Recetario familiar</h1>

                <nav className = 'marginBottom1rem'>
                    <ul >
                        <li className = 'marginBottomMrem'>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li className = 'marginBottomMrem'>
                            <Link to = '/buscar'>Buscar</Link>
                        </li>
                        <li className = 'marginBottomMrem'>
                            <Link to = '/crear'>Crear</Link>
                        </li >
                        <li className = 'marginBottomMrem'>
                            <Link to = '/gestionar'>Gestionar</Link>
                        </li>
                        <li>
                            <Link to = '/privada'>Privada pruebas</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                 <Switch>
                    <Route
                        exact
                        path = '/'
                        component = {HomeScreen}
                    />
                    
                    <Route
                        exact
                        path = '/buscar'
                        component = {BuscarScreen}
                    />

                    <Route
                        exact
                        path = '/crear'
                        component = { CrearReceta}
                    />
                    <Route
                        exact
                        path = '/gestionar'
                        component = { () => (<p>Ruta para gestionar las recetas</p>)}
                    />
                    
                    <Route
                        exact
                        path = '/receta/:recetaId'
                        component = { RecetaScreen}
                    />

                    <Route
                        exact
                        path = '/login'
            
                    >
                        <LoginScreen setUid = {setUid}/>
                    </Route>

                    <PrivateRoute
                       path = '/privada' 
                       exact
                       component = {() => (
                            <h1>Ruta privada</h1>
                       )}
                       isAuthenticated = {!!uid}
                    />
                    <Redirect
                        to = '/'
                    />

                 </Switch>
            </div>
        </Router>

    )
}
