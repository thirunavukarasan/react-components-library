// YourPage.js | YourPage.jsx

import React from "react";

import { HeroModulestList } from "../../components/ComponentList/HeroList";
import { BrandModulestList } from "../../components/ComponentList/BrandList";
import { CollageModulestList } from "../../components/ComponentList/CollageModuleList";
import { DimensionModulestList } from "../../components/ComponentList/DimensionList";
import { EnergyModulestList } from "../../components/ComponentList/EnergyModuleList";
import { DoubleEntityModulestList } from "../../components/ComponentList/DoubleEntityList";
import { SingleEntityModulestList } from "../../components/ComponentList/SingleEntityList";


export default {
  title: "ComponentsPage/Component Lists",
};

const Template = (args) => <HeroModulestList {...args} />;
const Template2 = (args) => <BrandModulestList {...args} />;
const Template3 = (args) => <CollageModulestList {...args} />;
const Template4 = (args) => <DimensionModulestList {...args} />;
const Template5 = (args) => <EnergyModulestList {...args} />;
const Template6 = (args) => <DoubleEntityModulestList {...args} />;
const Template7 = (args) => <SingleEntityModulestList {...args} />;


export const HeroModules = Template.bind({});
export const BrandModules = Template2.bind({});
export const CollageModules = Template3.bind({});
export const DimensionModules = Template4.bind({});
export const EnergyModules = Template5.bind({});
export const DoubleEntityModules = Template6.bind({});
export const SingleEntityModules = Template7.bind({});

