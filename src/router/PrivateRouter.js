import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CrearReceta } from '../components/crearReceta/CrearReceta';
import { EdicionScreen } from '../components/misRecetasScreen/EdicionScreen';
import { MisRecetasScreen } from '../components/misRecetasScreen/MisRecetasScreen';
import { PrevistaScreen } from '../components/misRecetasScreen/PrevistaScreen';
import { RecetaScreen } from '../components/recetasScreen/RecetaScreen';

export const PrivateRouter = ({uid}) => {
    console.log('paso por privateRouter')
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
                    <PrevistaScreen/>
                </Route>
                {/* <Route
                    exact
                    path= '/private/gestionar/receta/:recetaId'

                >
                    <EdicionScreen/>
                </Route> */}

                <Redirect to = '/'/>

            </Switch>
        </div>
    );
};
