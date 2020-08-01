/* eslint-disable max-len */
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react'
import CoinCard from '../components/CoinCard';

const CoinsContainer = () => (
  <Container>
    <Card.Group itemsPerRow={4}>
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
    </Card.Group>
  </Container>
);

export default CoinsContainer;
