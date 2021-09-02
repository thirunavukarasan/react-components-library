// List.stories.js | List.stories.jsx

import React from 'react';

import {Container} from '../components/Common/Container/Container';
import {Hero1} from '../components/HeroComponents/HeroModule1/HeroModule1.Components';
import {CollageModule1} from '../components/CollageComponents/CollageModule1/CollageModule1';
import {EntityModule14_Cus} from '../components/EntityComponents/EntityModule27/EntityModule14_Cus.Components';
import {CollageModule2} from '../components/CollageComponents/CollageModule2/CollageModule2';
import {TextModule1} from '../components/TextComponent/TextModule1/TextComponent1';
import {ShowMore} from '../components/BrandPolicy/Policy';


import {ContainerDefault} from './CommonModulesStories/Container.stories';
import {HeroOne} from './HeroStories/Hero1.stories';
import {CollageModule1TwoImg} from './CollageModuleStories/CollageModule1.stories';
import {EntityModule14_CusDefault} from './SingleEntityStories/EntityComponent14_Cus.stories';
import {CollageModule2ImgRight} from './CollageModuleStories/CollageModule2.stories';
import {CollageModule2ImgLeft} from './CollageModuleStories/CollageModule2.stories';
import {TextDefault} from './TextModuleStories/TextModule1.stories';
import {ShowMoreDefault} from './CommonModulesStories/BrandPolicy.stories';

export default {
    // component: Container,
    // subcomponents: { Default }, //👈 Adds the ListItem component as a subcomponent
    title: 'Template/Tempate 2',
};

const templateDesign2 = ({ ContaineItem,HeroItem,Collage1Item,Entity14Item_Cus,BranPoliyItem,
    TextModuleItemOne,ColageRightItem,ColageLefttItem,TextModuleItemTwo,TextModuleItemThree,...args }) => (
    <Container {...ContaineItem}>
        <Hero1 {...HeroItem} />
        <CollageModule1 {...Collage1Item}/>
        <TextModule1 {...TextModuleItemOne}/>
        <EntityModule14_Cus {...Entity14Item_Cus}/>
        <CollageModule2 {...ColageLefttItem}/>
        <TextModule1 {...TextModuleItemTwo}/>
        <CollageModule2 {...ColageRightItem}/>
        <TextModule1 {...TextModuleItemThree}/>
        <ShowMore {...BranPoliyItem}/>
    </Container>
  );

  export const Default = templateDesign2.bind({});
  Default.args = {
    ContaineItem : ContainerDefault.args,
    HeroItem: HeroOne.args,
    Collage1Item:CollageModule1TwoImg.args,
    TextModuleItemOne: TextDefault.args,
    Entity14Item_Cus:EntityModule14_CusDefault.args,
    ColageLefttItem: CollageModule2ImgLeft.args,
    TextModuleItemTwo: TextDefault.args,
    ColageRightItem: CollageModule2ImgRight.args,
    TextModuleItemThree: TextDefault.args,
    BranPoliyItem: ShowMoreDefault.args,
  };
  