import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';

export const PrivateRouter = () => {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path='/private/crear'
                >
                    <CrearReceta/>
                </Route>

                <Route
                    exact
                    path= '/private/receta/:recetaId'
                >
                    <RecetaScreen/>
                </Route>

                <Route
                        exact
                        path = '/private/gestionar'
                        component = { () => (<p>Ruta para gestionar las recetas</p>)}
                    />

                <Redirect to = '/'/>

            </Switch>
        </div>
    );
};
