import React from "react";
import { Container } from "../Common/Container/Container";
import { EnergyModule1 } from "../EnergyComponents";
export const EnergyModulestList = (props) => {
  const {} = props;
  let energyComp = [
    {
      comp: EnergyModule1,
      name: "EnergyModule1",
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {energyComp.map((heroData,i) => {
              const Compnt = heroData.comp;
              return (
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden md:weaverz-ai-w-full lg:weaverz-ai-w-full xl:weaverz-ai-w-full weaverz-ai-mb-12">
                  <h1 className="weaverz-ai-text-lg	weaverz-ai-font-bold">
                  {heroData.name}
                  </h1>
                  <Compnt />
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};
