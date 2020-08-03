import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Coin = props => {
  const { coin } = props;
  return (
    <Card>
      <img src={coin && coin.logo_url} height={150}/>
      <Card.Content>
        <Card.Header>{coin && coin.name}</Card.Header>
        <Card.Meta>
          {coin && coin.symbol}
        </Card.Meta>
        <Card.Description>
          Bitcoin is a currency that was created by an unknown person using the alias Satoshi Nakamoto
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Popular AAA+
        </a>
      </Card.Content>
    </Card>
  );
};

export default Coin;
