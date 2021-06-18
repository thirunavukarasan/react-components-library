import React from 'react';
// import {storiesOf} from "@storybook/react";
import {Test} from "../components/TestComp";

// const stories = storiesOf('App Test',module);

// stories.add('App',() => {
//     return(<Test />);
// });


export default {
  title: 'Weaveroo/Test',
  component: Test,
//   argTypes: {
//     label: { control: 'label' },
//   },
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'a',
};

