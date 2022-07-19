import React from 'react';

import { Route, Redirect } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    propiedades,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } {...propiedades} /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
        />
    )
}