import React from "react";
import {CollageModule1} from "../components/CollageComponents/CollageModule1/CollageModule1";

export default {
  title: "Weaveroo/Collage Modules/Collage Module 1",
  component: CollageModule1,
  // Creates specific argTypes with options
  argTypes: {
    noOfColumn: {
      options: ['Two', 'Three'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <CollageModule1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  noOfColumn:"Three",
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  entitySet: [
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-212-25/main_image/staging/TJ-MK-212-25.png",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-212-25/entity_module_1/staging/TJ-MK-212-25_e_1_1.png",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-212-28/entity_module_1/staging/TJ-MK-212-28_e_1_1.png",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
};


