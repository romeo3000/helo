import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import route from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Nav />
          {route}
      
      </div>
    );
  }
}

export default App;





