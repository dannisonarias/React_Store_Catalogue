import React from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "semantic-ui-react";
import CoinModal from "./CoinModal";

const Coin = (props) => {
  const setStars = (coin) => {
    let stars;
    // eslint-disable-next-line radix
    if (!coin.rank || parseInt(coin.rank) > 5) {
      stars = 5;
    } else {
      // eslint-disable-next-line radix
      stars = parseInt(coin.rank);
    }
    return stars;
  };

  const { coin } = props;
  coin.logo_url = `/assets/images/icons/${coin.symbol.toLowerCase()}.svg`;
  // coin.logo_url = `/assets/images/icons/btc.svg`;
  if (coin.logo_url.width < 1) {
    coin.logo_url = "";
  }
  debugger;
  const setDefaultLogo = (coin) =>
    // eslint-disable-next-line eqeqeq
    !coin.logo_url == "" ? coin.logo_url : "/assets/images/no-image.jpg";
  const rank = setStars(coin);
  coin.logo_url = setDefaultLogo(coin);
  return (
    <Card>
      <CoinModal coinSymbol={coin.symbol} />
      <img src={coin && coin.logo_url} height={150} alt="Coin Logo" />
      <Card.Content>
        <Card.Header>{coin && coin.name}</Card.Header>
        <Card.Meta>{coin && coin.symbol}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        Popularity:
        {"⭐".repeat([5 - rank + 1]).slice(0, 5)}
      </Card.Content>
    </Card>
  );
};

Coin.propTypes = {
  coin: PropTypes.string.isRequired,
  logo_url: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Coin;
