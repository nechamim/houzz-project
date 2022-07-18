import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ReadWithRouter from './components/Read';
import UpdateWithRouter from './components/Update';
import DeleteWithRouter from './components/Delete';
import Create from './components/Create';

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
            <Route path="read/:id" element={<ReadWithRouter />} />
            <Route path="update/:id" element={<UpdateWithRouter />} />
            <Route path="delete/:id" element={<DeleteWithRouter />} />
            <Route path="add/" element={<Create />} />
            {/* hi Ester, i didn't succeed to do inner router. i will be happy to know why! */}
            {/* <Route path="home/" element={<HomePage />} >
              <Route path="update/:id" element={<UpdateWithRouter />} />
            </Route> */}
          </Routes>
        </div>
      </Router>

    </div>
  );
}


