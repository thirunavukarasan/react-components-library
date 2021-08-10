import React from "react";
import {Container} from "../components/Common/Container/Container";

export default {
  title: "Weaveroo/Common/Container",
  component: Container,
  // Creates specific argTypes with options
  argTypes: {
    retailer: {
      options: ['tjori01', 'weaverooDefault'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  retailer : "weaverooDefault"
};


