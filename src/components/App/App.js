import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, Link } from 'react-router'
import logo from '../../logo.svg';
import './App.css';
import Ad from '../Ad'

const Feed = () =>
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>

const Create = () =>
  <div>
    <h1>Create</h1>
    <Ad/>
  </div>
const NotFound = () => <h1>404 - Page not found</h1>

const Nav = () =>
  <ul>
    <li><Link to="/feed">Feed</Link></li>
    <li><Link to="/create">Create</Link></li>
  </ul>

const Layout = ({ children }) =>
  <div>
    <Nav/>
    {children}
  </div>

const App = ({ children }) =>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/feed"/>
      <Route path="/feed" component={Feed}/>
      <Route path="/create" component={Create}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>

export default App
