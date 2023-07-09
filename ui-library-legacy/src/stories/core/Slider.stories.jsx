import React from 'react';
import Slider from '../../core/Slider';

export default {
  title: 'Core/Slider',
  component: Slider,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  right: 'xs',
  left: 'xs',
  bottom: 'xs',
  top: 'xs',
};