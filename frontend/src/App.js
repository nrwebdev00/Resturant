import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Pages 
import LandingPage from './Pages/LandingPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';

const App = () =>{

  return(
    <Router>
      <Route path='/' component={LandingPage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' componenet={RegisterPage} />
    </Router>
  )
}

export default App;