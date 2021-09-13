import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { BuscarScreen } from '../components/BuscarScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';
export const AppRouter = () => {
    return (
        <Router>
            <header>
                <h1>Recetario familiar</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/buscar'>Buscar</Link>
                        </li>
                        <li>
                            <Link to = '/crear'>Crear</Link>
                        </li>
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
                        component = { () => (<p> hola desde la localidad crear</p>)}
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
