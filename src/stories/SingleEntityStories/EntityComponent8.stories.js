import React from "react";
import {EntityModule8} from "../../components/EntityComponents/EntityModule8/EntityModule8.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module8",
  component: EntityModule8,
  argTypes: {
    objectFit: {
      options: ['cover', 'contain','fill'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    iconDisplay: {
      options: ['flex', 'hidden'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
    orientation:{
      options: ['l', 'r'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
  }
  
};

const Template = (args) => <EntityModule8 {...args} />;

export const Default = Template.bind({});
Default.args = {
  vertAlignment : false,
  objectFit:"fill",
  iconDisplay: "flex",
  showCompId: true,
  bgColor: "#f8f8f8",
  headingtextColor: "#393939",
  paratextColor : "#393939",
  iconBgColor: "",  
  iconFilter: false,
  HeadingfontSize:20,
  ParafontSize : 16,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  iconImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
  iconSrcSet:
    "",
  entitySrcSet:
    "",
  iconSizes: "(max-widgth: 500) 100vw, 500px",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  orientation:"l"
};
