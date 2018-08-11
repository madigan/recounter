import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Battle from './components/Battle';
import Bestiary from './components/Bestiary';
import Roster from './components/Roster';
import Encounters from './components/Encounters';
import Settings from './components/Settings';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="container shadow p-3">
        <Route exact path="/" component={Home}/>
        <Route path="/battle" component={Battle}/>
        <Route path="/bestiary" component={Bestiary}/>
        <Route path="/roster" component={Roster}/>
        <Route path="/encounters" component={Encounters}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </div>
  </Router>
);
export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
