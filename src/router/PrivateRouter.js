import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { EdicionScreen } from '../components/misRecetasScreen/EdicionScreen';
import { MisRecetasScreen } from '../components/misRecetasScreen/MisRecetasScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';

export const PrivateRouter = ({uid}) => {
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
                    >
                        <MisRecetasScreen
                            uid = {uid}
                        />
                </Route>

                <Route
                    exact
                    path= '/private/gestionar/receta/:recetaId'

                >
                    <EdicionScreen/>
                </Route>

                <Redirect to = '/'/>

            </Switch>
        </div>
    );
};
