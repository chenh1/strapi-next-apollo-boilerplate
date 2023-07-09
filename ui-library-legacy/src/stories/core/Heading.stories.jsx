import React from 'react';
import Heading from '../../core/Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Core/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  type: 'h1',
  children: 'Heading',
};

export const H2 = Template.bind({});
H2.args = {
  type: 'h2',
  children: 'Heading',
};

export const H3 = Template.bind({});
H3.args = {
  type: 'h3',
  children: 'Heading',
};

export const H4 = Template.bind({});
H4.args = {
  type: 'h4',
  children: 'Heading',
};
