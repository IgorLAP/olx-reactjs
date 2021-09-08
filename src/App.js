import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { Template } from './components/MainComponents';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user.name
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
