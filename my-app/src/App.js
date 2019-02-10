import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/MainPage/Navigation';
import Body from './components/MainPage/Body';
import Footer from './components/MainPage/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Navigation></Navigation>
      <Body></Body>
      <Footer></Footer>
      </div>
      </Provider>
    );
  }
}

export default App;