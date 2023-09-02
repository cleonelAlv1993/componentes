import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

const Component1 = () => <div className="component1">Componente 1</div>;
const Component2 = () => <div className="component2">Componente 2</div>;
const Component3 = () => <div className="component3">Componente 3</div>;

const App = () => (
  <BrowserRouter>
    <div className="container">
      <nav>
        <ul>
          <li className="component1">
            <Link to="/componente1">Componente 1</Link>
          </li>
          <li className="component2">
            <Link to="/componente2">Componente 2</Link>
          </li>
          <li className="component3">
            <Link to="/componente3">Componente 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/componente1" exact component={Component1} />
        <Route path="/componente2" component={Component2} />
        <Route path="/componente3" component={Component3} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
