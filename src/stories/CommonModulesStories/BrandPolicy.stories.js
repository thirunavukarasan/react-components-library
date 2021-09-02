import React from "react";
import {ShowMore} from "../../components/BrandPolicy/Policy";

export default {
  title: "Weaveroo/Brand Policy/Policy",
  component: ShowMore,
};

const Template = (args) => <ShowMore {...args} />;

export const ShowMoreDefault = Template.bind({});
ShowMoreDefault.args = {
  brandName: "Grundig 7294846331",
};


