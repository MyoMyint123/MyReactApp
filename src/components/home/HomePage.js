import React from 'react';
import {Link} from 'react-router';
import Page from '../Page';


class HomePage extends React.Component {
  render() {
    return (
      <Page>
        <div className="home">
          <h1>Home</h1>
          <p>This is home page</p>
        </div>
      </Page>
    );
  }
}

export default HomePage;