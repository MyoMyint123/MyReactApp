import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HomePage, AboutPage, AsyncApp, Users } from '../components';


const App = () => (
  <div className="d-flex">
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/about" >About Us</NavLink>
    <NavLink to="/picker" >Picker</NavLink>
    <NavLink to="/users" >Users</NavLink>
    <div className="content">
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/picker" component={AsyncApp}/>
      <Route path="/users" component={Users}/>
    </div>
  </div>
)

export default App;