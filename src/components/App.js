import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import CoinsContainer from '../containers/Coins';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <CoinsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
