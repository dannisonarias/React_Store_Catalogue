import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class Coin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const uiCard = e.target.closest('.ui .card').id;
  }

  setStars(coin) {
    let stars;
    if (!coin.rank || parseInt(coin.rank) > 5) {
      stars = 5;
    } else {
      stars = parseInt(coin.rank);
    }
    return stars;
  }

  setDefaultLogo(coin){
    return (!coin.logo_url == '') ? coin.logo_url : '/assets/images/no-image.jpg';
  }

  render() {
    const { coin } = this.props;
    const rank = this.setStars(coin);
    coin.logo_url = this.setDefaultLogo(coin);

    return (
      <Card onClick={this.handleClick} id={coin.symbol}>
        <img src={coin && coin.logo_url} height={150} alt="Coin Logo" />
        <Card.Content>
          <Card.Header>{coin && coin.name}</Card.Header>
          <Card.Meta>
            {coin && coin.symbol}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          Popularity:
          {'⭐'.repeat([5 - rank + 1]).slice(0, 5)}
        </Card.Content>
      </Card>
    );
  }
}

export default Coin;
