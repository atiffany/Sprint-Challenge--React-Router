import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeNav from './components/HomeNav';
import AboutNav from './components/AboutNav';
import FindNav from './components/FindNav';
import ContactNav from './components/ContactNav';
import JoinNav from './components/JoinNav';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>Header for all pages</div>
        <BrowserRouter>
          <div>
            <Route path = '/' component = {Header} />
            <Route path = '/home' component = {home} />
            <Route path = '/about' component = {about} />
            <Route path = '/find' component = {find} />
            <Route path = '/contact' component = {contact} />
            <Route path = '/join' component = {join} />
          </div>
        </BrowserRouter>
      </div>
    );

  }
}

const Header = () => (<Navigation />)
const home = () => (<HomeNav />)
const about = () => (<AboutNav />)
const find = () => (<FindNav />)
const contact = () => (<ContactNav />)
const join = () => (<JoinNav />)

export default App;
