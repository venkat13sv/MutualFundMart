import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/MainPage/Navigation';
import Body from './components/MainPage/Body';
import Footer from './components/MainPage/Footer';

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
