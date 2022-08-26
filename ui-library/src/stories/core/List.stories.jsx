import React from 'react';
import List from '../../core/List';
import units from '../../definitions/units';
import colors from '../../definitions/colors';

CheckIcon.displayName = 'CheckIcon';

export default {
  title: 'Core/List',
  component: List,
  parameters: { 
    options: {
      showPanel: true
    },
  },
};

const Template = (args) => <List {...args} />;

export const ListDefault = Template.bind({});
ListDefault.args = {
  items: ['asdasd', 'sdfdsf'],
  type: 'ul',
}

export const ListCustomItemStyle = Template.bind({});
ListCustomItemStyle.args = {
  items: ['asdasd', 'sdfdsf'],
  renderBulletIcon: <div>*</div>,
  iconSize: units.sm,
  type: 'ul',
}

export const ListOrdered = Template.bind({});
ListOrdered.args = {
  items: ['asdasd', 'sdfdsf'],
  type: 'ol',
}