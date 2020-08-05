import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Favorable', value: 1 },
  { key: 2, text: 'Unfavorable', value: 2 },
];

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
  }

  render() {
    return (
      <Menu compact>
        <Dropdown placeholder="Category" onChange={this.handleChange} options={options} selection />
      </Menu>
    );
  }
}

export default DropDownMenu;
