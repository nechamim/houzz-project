import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/View';
import HomePage from './components/HomePage';
import Edit from './components/Edit';
import About from './components/About';
import { musicalInstruments } from './data/musicalInstruments';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
const routes = [{
  route: 'home',
  Component: HomePage,
  name: 'Home',
},//  {
//   route: 'view',
//   Component: View,
//   name: 'View',
// }, 
{
  route: 'edit',
  Component: Edit,
  name: 'Edit',
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
            {routes/*.filter(route => route.name != "View" && route.name != "Edit")*/.map(route => <li key={route.route}> <Link to={route.route}> {route.name} </Link> </li>)}
          </menu>
          <Routes>
            <Route path="home" element={<HomePage />} >
              <Route path=":id" element={<View />} />
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}


