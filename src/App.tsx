import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ViewWithRouter from './components/View';
import HomePage from './components/HomePage';
import About from './components/About';
import { musicalInstruments } from './data/musicalInstruments';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ViewWithRouter from './components/View';
import EditWithRouter from './components/Edit';

const routes = [{
  route: 'home',
  Component: HomePage,
  name: 'Home',
}, {
  route: 'about',
  Component: About,
  name: 'About',
},];

export default function App() {
  const instrument1 = musicalInstruments[0].instrument;
  return (
    <div className="App">
      <Router>
        <div>
          <menu>
            {routes.map(route => <li key={route.route}> <Link to={route.route}> {route.name} </Link> </li>)}
          </menu>
          <Routes>
            <Route path="home/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="view/:id" element={<ViewWithRouter />} />
            <Route path="edit/:id" element={<EditWithRouter />} />
            {/* hi Ester, i didn't succeed to do inner router. i will be happy to know why! */}
            {/* <Route path="home/" element={<HomePage />} >
              <Route path="edit/:id" element={<EditWithRouter />} />
            </Route> */}
          </Routes>
        </div>
      </Router>

    </div>
  );
}


