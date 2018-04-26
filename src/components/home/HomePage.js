import React from 'react';
import NavBar from '../NavBar';


class HomePage extends React.Component {
  render() {
    return (

      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <h1>Home</h1>
          <p>This is home page</p>
        </div>
      </div>
    );
  }
}

export default HomePage;