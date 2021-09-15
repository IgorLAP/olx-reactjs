import React from 'react';
import {Switch} from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NoFound from './pages/NoFound';
import SignIn from './pages/SignIn';
import MyAccount from './pages/MyAccount';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';

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
                <AddAd />
            </RouteHandler>
            <RouteHandler exact path="/ads">
                <Ads/>
            </RouteHandler>
            <RouteHandler>
                <NoFound />
            </RouteHandler>
        </Switch>
    );
}