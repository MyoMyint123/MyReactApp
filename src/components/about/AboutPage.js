import React from 'react'
import NavBar from '../NavBar';

class AboutPage extends React.Component {
  render() {
    return (
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <h1>About</h1>
            <p>This is about page</p>
          </div>
        </div>
    );
  }
}

export default AboutPage;