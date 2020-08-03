import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './Nav';
import CoinsContainer from '../containers/Coins';
import getCoins from '../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCoins();
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

const mapDispatchToProps = dispatch => ({
  getCoins: bindActionCreators(getCoins, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
