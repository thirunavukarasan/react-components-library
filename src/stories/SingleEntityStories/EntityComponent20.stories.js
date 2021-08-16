import React from "react";
import { EntityModule20 } from "../../components/EntityComponents/EntityModule20/EntityModule20.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module20",
  component: EntityModule20,
};

const Template = (args) => <EntityModule20 {...args} />;

export const Default = Template.bind({});
Default.args = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/0584ce565c824b7b7f50282d9a19945b/6c64afc8fb24b3838bc9403c5ef2f860.png",
  entitySrcSet:
    "",
  entitySizes: "(max-widgth: 384) 100vw, 384px",
  bgColor: "#adacac9c",
};
