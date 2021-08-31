import React from "react";
import {ImageModule1} from "../../components/ImageComponents/index";

export default {
  title: "Weaveroo/Image Modules/Image Module 1",
  component: ImageModule1,
};

const Template = (args) => <ImageModule1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    entityImage: "https://weaver-testing.s3.ap-south-1.amazonaws.com/Currys/shoeDetails2.png",
    entitySrcSet: "",
    entitySizes: "",
};


