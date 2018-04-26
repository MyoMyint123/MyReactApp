import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
      return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Education</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>     
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Admin</Link>
                    </li>  
                </ul>    
                <button className="btn btn-default">Sign In</button>
                &nbsp;
                <button className="btn btn-default">Sign Up</button>

            </div>
        </nav>
      );
    }
  }
  
  export default NavBar;