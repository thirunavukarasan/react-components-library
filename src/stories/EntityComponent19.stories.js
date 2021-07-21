import React from "react";
import { EntityModule19 } from "../components/EntityComponents/EntityModule19/EntityModule19.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module19",
  component: EntityModule19,
};

const Template = (args) => <EntityModule19 {...args} />;

export const Default = Template.bind({});
Default.args = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/3dc4876f3f08201c7c76cb71fa1da439/37735c7b024fda3ebf49585ce3908499.png",
  entitySrcSet:
    "",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#292929",
};
