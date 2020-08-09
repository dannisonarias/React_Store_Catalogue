import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCoinData } from '../actions/index';
import {
  Button, Header, Image, Modal,
} from 'semantic-ui-react';

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
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="https://react.semantic-ui.com/images/avatar/large/rachel.png" wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => this.setState({ open: false })}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.setState({ open: false })}
            positive
          />
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
