import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DropDown from './DropDown';

class CategoryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch({
      type: name,
    });
  }

  render() {
    const { filter } = this.props;
    const { activeItem } = filter;

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name="DESC_RANK"
          active={activeItem === 'DESC_RANK'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="ASC_RANK"
          active={activeItem === 'ASC_RANK'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="PRICE"
          active={activeItem === 'PRICE'}
          onClick={this.handleItemClick}
        />
        <DropDown />
      </Menu>
    );
  }
}

CategoryMenu.propTypes = {
  filter: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(CategoryMenu);
