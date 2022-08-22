import{j as r}from"./jsx-runtime.fbdc8ec1.js";import{B as t}from"./Button.63059a6f.js";import"./iframe.1af9b542.js";import"./index.4860685b.js";const m={parameters:{storySource:{source:`import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},secondary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},large:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},small:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}}}}},title:"Example/Button",component:t,argTypes:{backgroundColor:{control:"color"}}},o=n=>r(t,{...n}),e=o.bind({});e.args={primary:!0,label:"Button"};const a=o.bind({});a.args={label:"Button"};const l=o.bind({});l.args={size:"large",label:"Button"};const s=o.bind({});s.args={size:"small",label:"Button"};const g=["Primary","Secondary","Large","Small"];export{l as Large,e as Primary,a as Secondary,s as Small,g as __namedExportsOrder,m as default};
//# sourceMappingURL=Button.stories.c7868afd.js.map
