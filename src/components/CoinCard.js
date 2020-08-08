import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Coin = props => {
  const { coin } = props;
  let rank;
  if (!coin.rank || parseInt(coin.rank) > 5) {
    rank = 5;
  } else {
    rank = parseInt(coin.rank);
  }
  coin.logo_url = (!coin.logo_url == '') ? coin.logo_url : `/assets/images/no-image.jpg`;

  return (
    <Card>
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
