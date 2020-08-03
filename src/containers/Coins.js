/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Card } from 'semantic-ui-react';

import CoinCard from '../components/CoinCard';
import getCoins from '../actions/index';

class CoinsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getCoins();
  }

  render() {
    const { coin } = this.props.state;
    if (coin.length <= 0) {
      return null;
    }
    return (
      <Container>
        <Card.Group itemsPerRow={4}>
          <CoinCard coin={coin[0][0]} />
          <CoinCard coin={coin[0][1]} />
          <CoinCard coin={coin[0][2]} />
          <CoinCard coin={coin[0][3]} />
          <CoinCard coin={coin[0][4]} />
          <CoinCard coin={coin[0][5]} />
          <CoinCard coin={coin[0][6]} />
          <CoinCard coin={coin[0][7]} />
          <CoinCard coin={coin[0][8]} />
          <CoinCard coin={coin[0][9]} />
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  getCoins: bindActionCreators(getCoins, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsContainer);
