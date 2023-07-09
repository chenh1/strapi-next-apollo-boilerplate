import React from 'react';
import Container from '../../layout/Container';
import Heading from '../../core/Heading';
import Paragraph from '../../core/Paragraph';
import Button from '../../core/Button';
import colors from '../../definitions/colors';

const { retro, neutral } = colors;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const bgColorCodeSpacing = {
  micro: retro.aquamarine,
  xxs: retro.lightGreen,
  xs: retro.lightRed,
  sm: retro.lightBlue,
  md: retro.orange,
  lg: retro.magenta,
  xl: retro.yellow,
  xxl: retro.lightestRed,
  xxxl: retro.lightestGreen,
  distinct: retro.lightestBlue,
  separate: neutral.lightGray
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Container {...args} background={bgColorCodeSpacing[args.gap]}>
    <Container background="white" border="2px dotted black">
      <Heading type="h2">This is a heading</Heading>
    </Container>
    <Container background="white" border="2px dotted black">
      <Paragraph>This is some text with a certain amount of spacing above and below it</Paragraph>
    </Container>
    <Container background="white" border="2px dotted black">
      <Button primary label="Click me"/>
    </Container>
  </Container>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  gap: "xl",
  maxWidth: "320px",
  label: 'Container',
};