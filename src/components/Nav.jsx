import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">NCounter</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/battle" className="nav-link">Battle</Link>
        </li>
        <li className="nav-item">
          <Link to="/bestiary" className="nav-link">Bestiary</Link>
        </li>
        <li className="nav-item">
          <Link to="/roster" className="nav-link">Roster</Link>
        </li>
        <li className="nav-item">
          <Link to="/encounters" className="nav-link">Encounters</Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">Settings</Link>
        </li>
      </ul>
    </div>
  </nav>
);
