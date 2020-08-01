import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './Nav';
import CoinsContainer from '../containers/Coins';
import getTopTen from '../actions/index';

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

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    getTopTen: bindActionCreators(getTopTen, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
