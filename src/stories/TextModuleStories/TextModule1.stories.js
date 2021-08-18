import React from "react";
import {TextModule1} from "../../components/TextComponent";

export default {
  title: "Weaveroo/Text Modules/Text Module 1",
  component: TextModule1,
  // Creates specific argTypes with options
  argTypes: {
    textAlign: {
      options: ['center', 'left','right'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <TextModule1 {...args} />;

export const CollageModule1Default = Template.bind({});
CollageModule1Default.args = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  bgColor: "#ffffff",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  textAlign: "center",
  padding: 18,
};


