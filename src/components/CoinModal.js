/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { getCoinData } from "../actions/index";
import SmallLoader from "./smallLoader";

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
    const { state } = this.props;
    const { coinData } = state.coinData;

    if (!coinData) {
      return (
        <Modal
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          open={open}
          trigger={
            <Button id={coinSymbol} onClick={this.handleClick}>
              Show Coin
            </Button>
          }
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
        trigger={
          <Button id={coinSymbol} onClick={this.handleClick}>
            Show Coin
          </Button>
        }
      >
        <Modal.Header>{coinData.name}</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            rounded
            src={`./assets/images/icons/${coinData.symbol.toLowerCase()}.svg`}
            wrapped
          />
          <Modal.Description>
            <Header>Coin information</Header>
            <ul>
              <li>
                <strong>Rank:</strong> {coinData.rank}
              </li>
              <li>
                <strong>Currency:</strong> {coinData.name}
              </li>
              <li>
                <strong>Symbol:</strong> {coinData.symbol}
              </li>
              <li>
                <strong>Price:</strong>
                {" $"}
                {coinData.price}
              </li>
              <li>
                <strong>High Price 24h:</strong>
                {" $"}
                {coinData.high_24h}
              </li>
              <li>
                <strong>Low Price 24h:</strong> {coinData.low_24h}
              </li>
              <li>
                <strong>Remaining Supply:</strong> {coinData.remaining}
              </li>
              <li>
                <strong>Total Volume 24h:</strong> {coinData.total_volume_24h}
              </li>
              <li>
                <strong>Market Cap:</strong> {coinData.market_cap}
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

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  getCoinData: bindActionCreators(getCoinData, dispatch),
});

CoinModal.propTypes = {
  getCoinData: PropTypes.string.isRequired,
  coinSymbol: PropTypes.string.isRequired,
  coinData: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinModal);
