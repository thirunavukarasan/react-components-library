// List.stories.js | List.stories.jsx

import React from 'react';

import {Container} from '../components/Common/Container/Container';
import {Hero1} from '../components/HeroComponents/HeroModule1/HeroModule1.Components';
import {EntityModule14} from '../components/EntityComponents/EntityModule14/EntityModule14.Components';
import {CollageModule1} from '../components/CollageComponents/CollageModule1/CollageModule1';


import {ContainerDefault} from './CommonModulesStories/Container.stories';
import {HeroOne} from './HeroStories/Hero1.stories';
import {EntityModule14Default} from './SingleEntityStories/EntityComponent14.stories';
import {CollageModule1Default} from './CollageModuleStories/CollageModule1.stories';

export default {
    // component: Container,
    // subcomponents: { Default }, //👈 Adds the ListItem component as a subcomponent
    title: 'Template/Tempate 1',
};

const TjoriTemplate = ({ ContaineItem,HeroItem,Collage1Item,Entity14Item, ...args }) => (
    <Container {...ContaineItem}>
        <Hero1 {...HeroItem} />
        <CollageModule1 {...Collage1Item}/>
        <EntityModule14 {...Entity14Item}/>
    </Container>
  );

  //export const ContainerComp = TjoriTemplate.bind({});
  export const Default = TjoriTemplate.bind({});
  Default.args = { HeroItem: HeroOne.args,ContaineItem : ContainerDefault.args,Collage1Item:CollageModule1Default.args,Entity14Item:EntityModule14Default.args};
  