import React from "react";
import {CollageModule2} from "../../components/CollageComponents/index";

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

export const CollageModule2Default = Template.bind({});
export const CollageModule2ImgRight = Template.bind({});
export const CollageModule2ImgLeft = Template.bind({});

CollageModule2Default.args = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  mainImage: {
    entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/measurements/staging/TJ-MK-182-01_d.jpg",
    entitySrcSet: "",
    entitySizes: "",
  },
  entitySet: [
    {
      entityImage:
        "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_2.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  orientation: "r",
  textSectionIshow: true
};

CollageModule2ImgRight.args = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  mainImage: {
    entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/measurements/staging/TJ-MK-182-01_d.jpg",
    entitySrcSet: "",
    entitySizes: "",
  },
  entitySet: [
    {
      entityImage:
        "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_2.jpg",
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


CollageModule2ImgLeft.args = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  mainImage: {
    entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/measurements/staging/TJ-MK-182-01_d.jpg",
    entitySrcSet: "",
    entitySizes: "",
  },
  entitySet: [
    {
      entityImage:
        "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_2.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  orientation: "l",
};