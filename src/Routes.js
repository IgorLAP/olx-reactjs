import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NoFound from './pages/NoFound';
import SignIn from './pages/SignIn';
import MyAccount from './pages/MyAccount';
import AdPage from './pages/AdPage';

export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/my-account">
                <MyAccount/>
            </Route>
            <Route exact path="/ad/:id">
                <AdPage />
            </Route>
            <Route>
                <NoFound />
            </Route>
        </Switch>
    );
}