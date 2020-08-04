/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Card } from 'semantic-ui-react';
import CategoryMenu from '../components/CategoryMenu';
import LoadingIcon from '../components/Loader';
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
    let sortedCoins;
    if (coin.length <= 0) {
      return (<LoadingIcon />);
    }

    const descRank = () => {
      const sortedCoins = [];
      for (let i = coin[0].length - 1; i >= 0; i -= 1) {
        sortedCoins.push(coin[0][i]);
      }
      return sortedCoins;
    };

    const filterByHigh = () => {

    };

    if (this.props.state.filter.activeItem === 'DESC_RANK') {
      sortedCoins = descRank();
    } else if (this.props.state.filter.activeItem === 'PRICE') {
      sortedCoins = filterByHigh();
    } else {
      sortedCoins = coin[0];
    }
    //  this.props.state.filer.activeItem = "DESC_RANK" NOW FILTER the components =>
    return (
      <Container>
        <CategoryMenu />
        <Card.Group itemsPerRow={4}>
          <CoinCard coin={sortedCoins[0]} />
          <CoinCard coin={sortedCoins[1]} />
          <CoinCard coin={sortedCoins[2]} />
          <CoinCard coin={sortedCoins[3]} />
          <CoinCard coin={sortedCoins[4]} />
          <CoinCard coin={sortedCoins[5]} />
          <CoinCard coin={sortedCoins[6]} />
          <CoinCard coin={sortedCoins[7]} />
          <CoinCard coin={sortedCoins[8]} />
          <CoinCard coin={sortedCoins[9]} />
          <CoinCard coin={sortedCoins[10]} />
          <CoinCard coin={sortedCoins[11]} />
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
