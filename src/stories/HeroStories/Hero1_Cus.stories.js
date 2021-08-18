import React from "react";
import {Hero1_Cus} from "../../components/HeroComponents/HeroModule1_Cus/HeroModule1_Cus.Components";

export default {
  title: "Weaveroo/Hero Modules/Hero Module1_Cus",
  component: Hero1_Cus,
};

const Template = (args) => {
  return <Hero1_Cus {...args} />;
};

export const HeroDefault = Template.bind({});

HeroDefault.args = {
  name: "Belling 444410789",
  brandName: "Belling",
  heroImage:
    "https://asset.weaveroo.io/Offspring/Shoes/2003196522/main_image/staging/2003196522_0.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  heroImageSrcSet:
    "",
  logoImageSrcSet:
    "",
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 193) 100vw, 193px",
  textColor:"#393939",
  HeadingfontSize: 20,
  bgColor:"#ffffff",
  circleColor:"#ffb405",
  heroImgRotation: 330,
};
