import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { store } from './_helpers';

import './App.css';
import Navigation from './components/MainPage/Navigation';
import Body from './components/MainPage/Body';
import Footer from './components/MainPage/Footer';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';

class App extends Component {
  render() {
    return (


      <div className="App">
      <Navigation></Navigation>
      <Body></Body>
      <Footer></Footer>
      </div>

    );
  }
}

export default App;
