import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
 import Form from './component/Form/Form';
import Auth from './component/Auth/Auth';
import Post from './component/Post/Post'
import Nav from './component/Nav/Nav';
import route from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          {route}
      
      </div>
    );
  }
}

export default App;





