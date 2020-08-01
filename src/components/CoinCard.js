import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Coin = () => (
  <Card>
    <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Bitcoin</Card.Header>
      <Card.Meta>Created in 2009 </Card.Meta>
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

export default Coin;
