import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import NPMRoute from './components/NPMRoute'
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import About from './views/About';
import MyNPM from './views/MyNPM';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app



function App() {
  return (
    <HashRouter>
      <Switch>
        <PrivateRoute exact path={process.env.PUBLIC_URL + '/'}>
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path={process.env.PUBLIC_URL + '/projects'}>
          <Projects />
        </PrivateRoute>
        <PrivateRoute exact path={process.env.PUBLIC_URL + '/contact'}>
          <Contact />
        </PrivateRoute>
        <PrivateRoute exact path={process.env.PUBLIC_URL + '/about'}>
          <About />
        </PrivateRoute>
        <NPMRoute exact path={process.env.PUBLIC_URL + '/npm'}>
          <MyNPM />
        </NPMRoute>
      </Switch>
    </HashRouter>
  );
}

var style2 = [
  'background: linear-gradient(#E36C4E, #19272f)',
  'border: 1px solid #E36C4E',
  'color: white',
  'padding: 1px 5px',
  'display: block',
  'line-height: 40px',
  'text-align: center',
  'font-weight: bold',
  'font-size: large'
].join(';');
console.log('%cI am looking to get hired...if you like what you see, we should talk', style2);
console.log('%cpjpavo@gmail.com', style2);

export default App;
