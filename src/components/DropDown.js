import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Favorable', value: 1 },
  { key: 2, text: 'Unfavorable', value: 2 },
];

const DropDownMenu = () => (
  <Menu compact>
    <Dropdown placeholder="Category" options={options} selection />
  </Menu>
);

export default DropDownMenu;
