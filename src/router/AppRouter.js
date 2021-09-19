import React from 'react';
// import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { BuscarScreen } from '../components/BuscarScreen';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { HomeScreen } from '../components/home/HomeScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';
export const AppRouter = () => {
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
                        <li>
                            <Link to = '/gestionar'>Gestionar</Link>
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

                    <Redirect
                        to = '/'
                    />

                 </Switch>
            </div>
        </Router>

    )
}
