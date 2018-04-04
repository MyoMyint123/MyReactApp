import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ()=>(
    <div className="inner-sidebar">
        <li className="dashboard"><Link to="/" >Dashboard</Link></li>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About Us</Link></li>
        <li><Link to="/picker" >Picker</Link></li>
        <li><Link to="/users" >Users</Link></li>
        <li><Link to="/products" >Products</Link></li>
    </div>
)

export default Sidebar;