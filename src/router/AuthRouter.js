import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';


export const AuthRouter = ({setUid,setName}) => {
  console.log('paso por authROuter')
  return( 
    <div>
        <Switch>
            <Route
              exact
              path= '/auth/login'
            >
              <LoginScreen
                setUid={setUid}
                setName={setName}
              />
            </Route>

            <Route
                exact
                path = '/auth/register'
                component = {RegisterScreen}
            />

            <Redirect to = '/auth/login'/>
        </Switch>
    </div>
  )
};
