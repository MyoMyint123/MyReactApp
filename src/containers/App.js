import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HomePage, AboutPage, AsyncApp, Users, UserLogin, Products } from '../components';
import "../assets/css/app.css"


const App = () => (
  <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/about" component={AboutPage}/>
    <Route path="/picker" component={AsyncApp}/>
    <Route path="/users" component={Users}/>
    <Route path="/login" component={UserLogin}/>
    <Route path="/products" component={Products}/>
  </div>

)

export default App;