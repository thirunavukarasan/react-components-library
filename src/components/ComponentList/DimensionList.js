import React from "react";
import { Container } from "../Common/Container/Container";
import {
  DimensionModule1,
  DimensionModule2,
  DimensionModule3,
  DimensionModule4,
  DimensionModule5,
} from "../DimComponents";
export const DimensionModulestList = (props) => {
  const {} = props;
  let heroComps = [
    {
      comp: DimensionModule1,
      name: "DimensionModule1",
    },
    {
      comp: DimensionModule2,
      name: "DimensionModule2",
    },
    {
      comp: DimensionModule3,
      name: "DimensionModule3",
    },
    {
      comp: DimensionModule4,
      name: "DimensionModule4",
    },
    {
      comp: DimensionModule5,
      name: "DimensionModule5_Right",
      orientation: "l",
    },
    {
      comp: DimensionModule5,
      name: "DimensionModule5_Left",
      orientation: "r",
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {heroComps.map((heroData,i) => {
              const Compnt = heroData.comp;
              return (
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden md:weaverz-ai-w-full lg:weaverz-ai-w-full xl:weaverz-ai-w-full weaverz-ai-mb-12">
                  <h1 className="weaverz-ai-text-lg	weaverz-ai-font-bold">
                    {heroData.name}
                  </h1>
                  <Compnt orientation={heroData.orientation}/>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};
