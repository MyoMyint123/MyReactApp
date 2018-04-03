import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { HomePage, AboutPage, AsyncApp, Users, Products } from '../components';
import Sidebar from '../components/Sidebar'
import "../assets/css/app.css"


const App = () => (
  <div className="d-flex">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="content">
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/picker" component={AsyncApp}/>
      <Route path="/users" component={Users}/>
      <Route path="/products" component={Products}/>
    </div>

  </div>
)

export default App;