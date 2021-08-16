import React from "react";
import { EntityModule25 } from "../../components/EntityComponents/EntityModule25/EntityModule25.Components";

export default {
  title: "Weaveroo/Entity Modules/Single/Entity Module25",
  component: EntityModule25,
  argTypes: {
    textalignment: {
      options: ['left', 'center',],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    },
  }
};

const Template = (args) => <EntityModule25 {...args} />;

export const Default = Template.bind({});
Default.args = {
  textalignment: "left",
  text: "Product Features",
  showCompId: true,
  entities: [
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet: "",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet: "",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet: "",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet: "",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
  ],
  bgColor: "#f7f7f7",
};
