import React from 'react';

import Paragraph from '../../core/Paragraph';

export default {
  title: 'Core/Paragraph',
  component: Paragraph,
  argTypes: {
    color: { control: 'color' },
  },
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Paragraph {...args}>This is a Paragraph</Paragraph>;

export const P1 = Template.bind({});
P1.args = {
  type: 'h1',
};
