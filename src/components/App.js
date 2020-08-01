import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import CoinsContainer from '../containers/Coins';

const App = (props) => (
  <div>
    <Nav />
    <CoinsContainer />
  </div>
);

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
