import React from "react";
import {CollageModule1} from "../../components/CollageComponents/index";

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

export const CollageModule1Default = Template.bind({});
export const CollageModule1TwoImg = Template.bind({});
export const CollageModule1FourImg = Template.bind({});

CollageModule1Default.args = {
  noOfColumn:"Three",
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  entitySet: [
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_3.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
};


CollageModule1TwoImg.args = {
  noOfColumn:"Two",
  heading: "",
  description:
    "",
  showCompId: true,
  entitySet: [
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
      entitySrcSet: "",
      entitySizes: "",
    }
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
};

CollageModule1FourImg.args = {
  noOfColumn:"Two",
  heading: "",
  description:
    "",
  showCompId: true,
  entitySet: [
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_3.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
};
