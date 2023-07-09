import React from 'react';

import Dropdown from '../../core/Dropdown';

export default {
  title: 'Core/Dropdown',
  component: Dropdown,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Dropdown {...args}/>;

export const StandardDropdown = Template.bind({});
StandardDropdown.args = {
  options: [
    { value: 'default', label: 'Placeholder Text', isPlaceholder: true },
    { value: 'test', label: 'test'},
    { value: 'test2', label: 'test2'}
  ],
  defaultValue: 'default',
  withShadow: false,
  extraPadding: false,
  width: '',
  height: '',
};
