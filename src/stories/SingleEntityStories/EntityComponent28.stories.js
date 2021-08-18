import React from "react";
import {EntityModule28} from "../../components/EntityComponents/EntityModule28/EntityModule28.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module28",
  component: EntityModule28,
  argTypes: {
    imageWidth: {
      options: ['25%','75%'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    orientation: {
      options: ['r','l'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
  }
};

const Template = (args) => <EntityModule28 {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageWidth: "25%",
  showCompId: true,
  HeadingfontSize: 26,
  ParafontSize: 16,
  orientation: "r",
  heading: "Customer Reviews",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
  iconSizes: "(max-widgth: 500) 100vw, 500px",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f8f8f8",
  textColor: "#393939",
  reviews: [
    {
      name: "Thiru ★★★★★",
      commnet:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance.",
    },
    {
      name: "Deepa ★★★★★",
      commnet:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance.",
    },
  ],
};
