import React from 'react';
import {Switch} from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NoFound from './pages/NoFound';
import SignIn from './pages/SignIn';
import MyAccount from './pages/MyAccount';
import AdPage from './pages/AdPage';
import PostAd from './pages/PostAd';

export default ()=>{
    return(
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/signin">
                <SignIn />
            </RouteHandler>
            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler exact path="/my-account">
                <MyAccount/>
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler private exact path="/post-an-ad">
                <PostAd />
            </RouteHandler>
            <RouteHandler>
                <NoFound />
            </RouteHandler>
        </Switch>
    );
}