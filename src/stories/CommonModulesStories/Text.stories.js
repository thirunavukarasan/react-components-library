import React from "react";
import {Text} from "../../components/Common/Text/Text";

export default {
  title: "Weaveroo/Common/Text",
  component: Text,
  // Creates specific argTypes with options
  argTypes: {
    paraSize: {
      options: ['weaverooSP10', 'weaverooSP14','weaverooSP16','weaverooSP18','weaverooSP20','weaverooSP22',
      'weaverooSP24','weaverooSP26','weaverooSP28','weaverooSP30','weaverooSP32'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    headingSize: {
      options: ['weaverooSH10', 'weaverooSH14','weaverooSH16','weaverooSH18','weaverooSH20','weaverooSH22',
      'weaverooSH24','weaverooSH26','weaverooSH28','weaverooSH30','weaverooSH32'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {  
  headingSize : "weaverooSH20",
  paraSize : "weaverooSP16"
};


