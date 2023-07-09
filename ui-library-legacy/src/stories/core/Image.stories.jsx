import React from 'react';

import Image from '../../core/Image';

export default {
  title: 'Core/Image',
  component: Image,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Image {...args}/>;

export const BasicImage = Template.bind({});
BasicImage.args = {
  src: 'https://images.unsplash.com/photo-1620165366526-8109c0343fc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
  width: '250px',
  height: '',
};