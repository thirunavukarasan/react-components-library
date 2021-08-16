import React from "react";
import { Container } from "../Common/Container/Container";
import {
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Hero6,
  Hero7,
  Hero8,
  Hero9,
  Hero10,
} from "../HeroComponents";
export const HeroModulestList = (props) => {
  const {} = props;
  let heroComps = [
    {
      comp: Hero1,
      name: "Hero1"
    },
    {
      comp: Hero2,
      name: "Hero2"
    },
    {
      comp: Hero3,
      name: "Hero3"
    },
    {
      comp: Hero4,
      name: "Hero4"
    },
    {
      comp: Hero5,
      name: "Hero5"
    },
    {
      comp: Hero6,
      name: "Hero6"
    },
    {
      comp: Hero7,
      name: "Hero7"
    },
    {
      comp: Hero8,
      name: "Hero9"
    },
    {
      comp: Hero9,
      name: "Hero9"
    },
    {
      comp: Hero10,
      name: "Hero10"
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {
              heroComps.map((heroData,i) => {
                const Compnt = heroData.comp;
                return(
                  <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden md:weaverz-ai-w-full lg:weaverz-ai-w-full xl:weaverz-ai-w-full weaverz-ai-mb-12">
                  <h1 className="weaverz-ai-text-lg	weaverz-ai-font-bold">{heroData.name}</h1>
                  <Compnt />
                </div>
                )
              })
            }
          </div>
        </section>
      </Container>
    </>
  );
};
