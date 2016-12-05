import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, Link } from 'react-router'
import logo from '../../logo.svg';
import './App.css';

const SplashPage = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>

const About = () => <h1>About</h1>

const Nav = () =>
  <ul>
    <li><Link to="/splash">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>

const Layout = ({ children }) =>
  <div>
    <Nav/>
    {children}
  </div>

const App = ({ children }) =>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/splash"/>
      <Route path="/splash" component={SplashPage}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>

export default App
