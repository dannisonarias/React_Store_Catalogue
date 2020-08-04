const sort = (coin, activeItem) => {
  let sortedCoins;
  const descRank = () => {
    const sortedCoins = [];
    for (let i = coin[0].length - 1; i >= 0; i -= 1) {
      sortedCoins.push(coin[0][i]);
    }
    return sortedCoins;
  };
  const ascRank = () => coin[0];

  const filterByPrice = () => {
    sortedCoins = [...coin[0]];
    sortedCoins.sort((a, b) => a.price - b.price);
    return sortedCoins;
  };

  const activateFilter = () => {
    if (activeItem === 'ASC_RANK') {
      sortedCoins = ascRank(); // default
      return sortedCoins;
    } if (activeItem === 'PRICE') {
      sortedCoins = filterByPrice();
      return sortedCoins;
    }
    sortedCoins = descRank();
    return sortedCoins;
  };

  sortedCoins = activateFilter();

  return sortedCoins;
};

export default sort;
