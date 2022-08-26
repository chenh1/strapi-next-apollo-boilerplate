import React from 'react';

import Divider from '../../core/Divider';

export default {
  title: 'Core/Divider',
  component: Divider,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Divider {...args}/>;

export const StandardDivider = Template.bind({});
StandardDivider.args = {
  pixelsThick: 1,
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
  pixelsThick: 0,
  vertical: true,
  height: 100
};
