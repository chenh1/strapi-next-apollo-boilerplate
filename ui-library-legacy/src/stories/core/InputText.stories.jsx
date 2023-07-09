import React, { Fragment } from 'react';

import InputText from '../../core/InputText';
import Container from '../../layout/Container';

export default {
  title: 'Core/InputText',
  component: InputText,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <InputText {...args}/>;

export const InputTextField = Template.bind({});
InputTextField.args = {
  type: 'text',
  placeholder: 'Some placeholder',
  error: false,
  errorMessage: 'Oops, Invalid Field!',
  width: '400px',
  height: '',
  prefix: '',
  suffix: ''
};

export const InputTextFieldWithIcon = Template.bind({});
InputTextFieldWithIcon.args = {
  type: 'text',
  placeholder: 'Some placeholder',
  error: false,
  errorMessage: 'Oops, Invalid Field!',
  width: '400px',
  height: '',
  prefix: '',
  suffix: '',
  iconContent: 
    <Container placeItems="center">
      <Container height="32px" position="absolute">
        <CloseIcon width="32" height="32"/>
      </Container>
    </Container>
};
