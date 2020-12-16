import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import About from './views/About';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={'/'}>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path={'/projects'}>
          <Projects />
        </PrivateRoute>
        <PrivateRoute exact path={'/contact'}>
          <Contact />
        </PrivateRoute>
        <PrivateRoute exact path={'/about'}>
          <About />
        </PrivateRoute>
      </Switch>
      <Route path="*">
      </Route>
    </BrowserRouter>
  );
}

export default App;
