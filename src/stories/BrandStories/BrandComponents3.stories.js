import React from "react";
import { BrandModule3 } from "../../components/BrandComponents/BrandModule3/BrandModule3.Components";

export default {
  title: "Weaveroo/Brand Modules/Brand Module3",
  component: BrandModule3,
};

const Template = (args) => <BrandModule3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  productName: "Grundig 7294846331",
  category: "Fridge Freezers",
  text: "Freshness all your life",
  logo:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png"
  };
