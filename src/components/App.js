import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

const App = props => (
  <div>
    {console.log(props)}
    <Nav />
  </div>
);

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
