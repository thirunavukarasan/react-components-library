import React from "react";
import {CollageModule2} from "../components/CollageComponents/CollageModule2/CollageModule2";

export default {
  title: "Weaveroo/Collage Modules/Collage Module 2",
  component: CollageModule2,
  // Creates specific argTypes with options
  argTypes: {
    orientation: {
      options: ['r', 'l'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <CollageModule2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  mainImage: {
    entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-212-25/measurements/staging/TJ-MK-212-25_d.png",
    entitySrcSet: "",
    entitySizes: "",
  },
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
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  orientation: "r",
};


