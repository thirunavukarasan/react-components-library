import React from "react";
import {BrandModule1} from "../components/BrandComponents/BrandModule1/BrandModule1.Components";

export default {
  title: "Weaveroo/Brand Modules/Brand Module1",
  component: BrandModule1,
};

const Template = (args) => <BrandModule1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    productName: "Grundig 7294846331",
    category: "Fridge Freezers",
    text: "Freshness all your life",
    logo: "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
    image:
      "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",

};


