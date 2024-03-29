import React from 'react';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    propiedades,
    ...rest
}) => {
    console.log('paso por publicRoute')
    return (
        <Route { ...rest }
            component={ (props) => (
                ( !isAuthenticated )
                    ? ( <Component { ...props } {...propiedades}/> )
                    : ( <Redirect to="/" /> )
            )}
        />
    )
    // return (
    //     <Route { ...rest }
    //         component={ (props) => {
    //             if( !isAuthenticated ){

    //                 ( <Component { ...props } {...propiedades}/> )
    //             }
    //                 // ? 
    //                 // : ( <Redirect to="/" /> )
    //             }}
    //     />
    // )
}