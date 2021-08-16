import React from "react";
import { EntityModule16 } from "../../components/EntityComponents/EntityModule16/EntityModule16.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module16",
  component: EntityModule16,
};

const Template = (args) => <EntityModule16 {...args} />;

export const Default = Template.bind({});
Default.args = {
  showCompId: true,
  heading: "Steers you Ahead",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/a819bdb2925e0e014400955972a93376/07214c6750d983a32e0a33da225c4efd/75101dcdfc88455bcafc9e53e0b06689/075a3e36a0a52dcbc568c05788e8a713/6766aa2750c19aad2fa1b32f36ed4aee/dc497485af6340e517fb661d3428130c.png",
  entitySrcSet:
    "",
  entitySizes: "(max-widgth: 634) 100vw, 634px",
};
