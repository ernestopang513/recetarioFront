import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { HomeScreen } from '../components/HomeScreen';
export const AppRouter = () => {
    return (
        <Router>
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
                        component = {()=>{return(<h1>Buscar component</h1>)}}
                    />

                    <Route
                        exact
                        path = '/crear'
                        component = { () => (<p> hola desde la localidad crear</p>)}
                    />

                    <Redirect
                        to = '/'
                    />

                 </Switch>
            </div>
        </Router>

    )
}
