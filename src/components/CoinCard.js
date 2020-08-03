import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Coin = props => {
  const { coin } = props;
  let rank = parseInt(coin.rank);
  if (rank > 5) {
    rank = 5;
  }

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
        <Icon name="Popularity" />
        Popularity:
        {'⭐'.repeat([5 - rank + 1]).slice(0, 5)}
      </Card.Content>
    </Card>
  );
};

export default Coin;
