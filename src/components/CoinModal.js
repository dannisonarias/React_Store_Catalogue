import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';
import { getCoinData } from '../actions/index';
import SmallLoader from './smallLoader';

class CoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { getCoinData } = this.props;
    getCoinData(e.target.id);
  }

  render() {
    const { open } = this.state;
    const { coinSymbol } = this.props;
    const { coinData } = this.props.state.coinData;

    if (!coinData) {
      return (
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={open}
          trigger={(
            <Button id={coinSymbol} onClick={this.handleClick}>
              Show Coin
            </Button>
          )}
        >
          <SmallLoader />
        </Modal>
      );
    }

    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={open}
        trigger={(
          <Button id={coinSymbol} onClick={this.handleClick}>
            Show Coin
          </Button>
        )}
      >
        <Modal.Header>
          {coinData[0].name}
        </Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={coinData[0].logo_url} wrapped />
          <Modal.Description>
            <Header>Coin information</Header>
            <ul>
              <li>
                <strong>rank:</strong>
                {' '}
                {coinData[0].rank}
              </li>
              <li>
                <strong>Currency:</strong>
                {' '}
                {coinData[0].currency}
              </li>
              <li>
                <strong>Symbol:</strong>
                {' '}
                {coinData[0].symbol}
              </li>
              <li>
                <strong>Price:</strong>
                {' $'}
                {coinData[0].price}
              </li>
              <li>
                <strong>All Time High Price:</strong>
                {' $'}
                {coinData[0].high}
              </li>
              <li>
                <strong>circulating_supply:</strong>
                {' '}
                {coinData[0].circulating_supply}
              </li>
              <li>
                <strong>max_supply:</strong>
                {' '}
                {coinData[0].max_supply}
              </li>
              <li>
                <strong>market_cap:</strong>
                {' '}
                {coinData[0].market_cap}
              </li>
              <li>
                <strong>transparent_market_cap:</strong>
                {' '}
                {coinData[0].transparent_market_cap}
              </li>

            </ul>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => this.setState({ open: false })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  getCoinData: bindActionCreators(getCoinData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinModal);
