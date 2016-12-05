import React from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import ReactGA from 'react-ga'
import Navbar from './Navbar'
import Feed from './Feed'
import CreatePost from './CreatePost'


const NotFound = () => <h1>404 - Page not found</h1>

const Layout = ({ children }) =>
  <div>
    <Navbar/>
    <div style={{
      marginTop: '3em',
      backgroundColor: '#000'
    }} className="ui inverted segment">
      {children}
    </div>
  </div>


function logPageView() {
  window.scrollTo(0, 0)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const App = ({ children }) =>
  <Router onUpdate={logPageView} history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/feed"/>
      <Route path="/feed" component={Feed}/>
      <Route path="/create" component={CreatePost}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>

export default App
