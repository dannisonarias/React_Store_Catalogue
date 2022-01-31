import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { selectCategory } from '../actions/index';

const options = [
  { key: 1, text: 'Actively Traded', value: 1 },
  { key: 2, text: 'Dead Coins', value: 2 },
];

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch(selectCategory(e.target.innerText));
  }

  render() {
    return (
      <Menu compact>
        <Dropdown placeholder="Category" onChange={this.handleChange} options={options} selection />
      </Menu>
    );
  }
}

DropDownMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(DropDownMenu);
