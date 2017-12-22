import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>Header for all pages</div>
        <BrowserRouter>
          <div>
            <Route path = '/' component = {Header} />
          </div>
        </BrowserRouter>
      </div>
    );

  }
}

const Header = () => (<Navigation />)

export default App;
