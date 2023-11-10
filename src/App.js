import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Home />
        <About />
        <Projects />
        <Contacts />
      </Router>
    </>
  );
}
