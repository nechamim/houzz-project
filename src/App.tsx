import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Read from './components/Read';
import Delete from './components/Delete';
import UpdateAndCreate from './components/UpdateAndCreate';

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
            <Route path="view/:id" element={<Read />} />
            <Route path="delete/:id" element={<Delete />} />
            <Route path="update/:id" element={<UpdateAndCreate/>} />
            <Route path="add/" element={<UpdateAndCreate/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}


