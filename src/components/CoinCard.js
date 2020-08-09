import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import CoinModal from './CoinModal';

const Coin = props => {
  const setStars = coin => {
    let stars;
    if (!coin.rank || parseInt(coin.rank) > 5) {
      stars = 5;
    } else {
      stars = parseInt(coin.rank);
    }
    return stars;
  };

  const setDefaultLogo = coin => ((!coin.logo_url == '') ? coin.logo_url : '/assets/images/no-image.jpg');

  const { coin } = props;
  const rank = setStars(coin);
  coin.logo_url = setDefaultLogo(coin);
  return (
    <Card>
      <CoinModal coinSymbol={coin.symbol} />
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
};

export default Coin;
