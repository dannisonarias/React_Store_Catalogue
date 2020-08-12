/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CategoryMenu from '../components/CategoryMenu';
import LoadingIcon from '../components/Loader';
import CoinCard from '../components/CoinCard';
import getCoins from '../actions/index';
import sort from '../modules/sort';

class CoinsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { state } = this.props;
    let { coin } = state;
    const { category } = state;
    const { filter } = state;
    const { activeItem } = filter;
    if (coin.length <= 0) {
      return (<LoadingIcon />);
    }

    coin = ((category === 'Actively Traded') ? coin[0][0] : coin[0][1]);

    const sortedCoins = sort(coin, activeItem);
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

CoinsContainer.propTypes = {
  getCoins: PropTypes.string.isRequired,
  coin: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  getCoins: bindActionCreators(getCoins, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsContainer);
