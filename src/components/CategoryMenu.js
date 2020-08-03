import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class CategoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'Ranking' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) { this.setState({ activeItem: name }); }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name="Ranking"
          active={activeItem === 'Ranking'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Price"
          active={activeItem === 'Price'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="All time high"
          active={activeItem === 'All time high'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default CategoryMenu;
