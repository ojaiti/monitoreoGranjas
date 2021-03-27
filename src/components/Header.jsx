import React from 'react'
import "../css/header.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import MonitorVeracruz from '../MonitorVeracruz';
import MonitorTehuacan from '../MonitorTehuacan';
import TablaVeracruz from '../TablaVeracruz';
import MonitorNoroeste from '../MonitorNoroeste';
import TablaNoroeste from '../TablaNoroeste';
import TablaTehuacan from '../TablaTehuacan';
const Header = () => {
    return (
        <>
        <Router>
        <div>
          
        <header className="header__app">
            <h1>Monitor de visitas</h1>
            <nav>
            <ul>
              
              <li>
                <Link to="/">Monitor Noroeste</Link>
              </li>
              <li>
                <Link to="/veracruz">Monitor Veracruz</Link>
              </li>
              <li>
                <Link to="/tehuacan">Monitor Tehuacan</Link>
              </li>
              {/* <li>
                <Link to="/bioseguridad">Bioseguridad</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/tablaveracruz">
              <TablaVeracruz />
            </Route>
            <Route path="/tablanoroeste">
              <TablaNoroeste />
            </Route>
            <Route path="/tablatehuacan">
              <TablaTehuacan />
            </Route>
            <Route path="/veracruz">
              <MonitorVeracruz />
            </Route>
            <Route path="/tehuacan">
              <MonitorTehuacan />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
                <MonitorNoroeste />
            </Route>
            
          </Switch>
        </div>
      </Router>
      </>
    )
}

export default Header


function Users() {
  return <h2>Users</h2>;
}