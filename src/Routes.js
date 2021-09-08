import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
        </Switch>
    );
}