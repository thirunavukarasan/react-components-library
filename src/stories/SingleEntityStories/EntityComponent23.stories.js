import React from "react";
import { EntityModule23 } from "../../components/EntityComponents/EntityModule23/EntityModule23.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module23",
  component: EntityModule23,
};

const Template = (args) => <EntityModule23 {...args} />;

export const Default = Template.bind({});
Default.args = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/5ef0b4eba35ab2d6180b0bca7e46b6f9/798054a702338d69ef1ca5bbd7865849.png",
  entitySrcSet:
    "",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f2f2f2",
  textColor: "#000",
};
