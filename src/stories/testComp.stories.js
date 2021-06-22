import React from 'react';
import {Test} from "../components/TestComp";



export default {
  title: 'Weaveroo/TestModules/Test',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Test1 = Template.bind({});
Test1.args = {
  label: 'a',
};

