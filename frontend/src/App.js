import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Pages 
import LandingPage from './Pages/LandingPage';

const App = () =>{

  return(
    <Router>
      <Route path='/' component={LandingPage} exact />
    </Router>
  )
}

export default App;