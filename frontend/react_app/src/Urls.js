import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

// A wraper for the Route that redirects to the login screen if you are not yet authenticated 
function PrivateRoute({ isAuthenticated, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login/",
                        state: { from: location }
                    }}
                />
            )
            }
        />
    );
}

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login/"> <Login {...props} /></Route>
                    <PrivateRoute exact path="/" isAuthenticated={props.isAuthenticated}> <Home {...props} /></PrivateRoute>
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Urls;