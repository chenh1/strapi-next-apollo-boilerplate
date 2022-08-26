import React from 'react';
import Input from '../../core/Input';
import units from '../../definitions/units';
import colors from '../../definitions/colors';
import { ReactComponent as EmptyCheckbox } from '../../icons/check_box_outline_blank-black-18dp.svg'
import { ReactComponent as FilledCheckbox } from '../../icons/check_box-black-18dp.svg'
import { ReactComponent as UnSelectedRadioButton } from '../../icons/radio_button_unchecked-black-18dp.svg'
import { ReactComponent as SelectedRadioButton } from '../../icons/radio_button_checked-black-18dp.svg'

export default {
  title: 'Core/Input',
  component: Input,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <Input {...args}/>;

export const CheckBox = Template.bind({});
CheckBox.args = {
  size: 'xxl',
  checked: false,
  OverrideSelectedIcon: ({ size }) => <EmptyCheckbox fill={colors.neon.green} width={units[size]} height={units[size]}/>,
  OverrideUnselectedIcon: ({ size }) => <FilledCheckbox width={units[size]} height={units[size]}/>,
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  size: 'xxl',
  checked: false,
  OverrideSelectedIcon: ({ size }) => <UnSelectedRadioButton width={units[size]} height={units[size]}/>,
  OverrideUnselectedIcon: ({ size }) => <SelectedRadioButton width={units[size]} height={units[size]}/>,
};
