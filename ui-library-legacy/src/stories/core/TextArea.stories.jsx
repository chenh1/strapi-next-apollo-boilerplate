import React from 'react';

import TextArea from '../../core/TextArea';

export default {
  title: 'Core/TextArea',
  component: TextArea,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <TextArea {...args}/>;

export const TextAreaField = Template.bind({});
TextAreaField.args = {
  placeholder: 'Some placeholder',
  error: false
};
