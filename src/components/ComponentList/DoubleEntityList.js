import React from "react";
import { Container } from "../Common/Container/Container";
import { DoubleEntityModule1,DoubleEntityModule2,DoubleEntityModule3,DoubleEntityModule4 } from "../EntityComponents";
export const DoubleEntityModulestList = (props) => {
  const {} = props;
  let entCompset1 = [
    {
      comp: DoubleEntityModule1,
      name: "DoubleEntityModule1",
    },
    {
      comp: DoubleEntityModule2,
      name: "DoubleEntityModule2",
    },
    {
      comp: DoubleEntityModule3,
      name: "DoubleEntityModule3",
    },
    {
      comp: DoubleEntityModule4,
      name: "DoubleEntityModule4",
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {entCompset1.map((heroData,i) => {
              const Compnt = heroData.comp;
              return (
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden md:weaverz-ai-w-full lg:weaverz-ai-w-full xl:weaverz-ai-w-full weaverz-ai-mb-12">
                  <h1 className="weaverz-ai-text-lg	weaverz-ai-font-bold">
                  {heroData.name}
                  </h1>
                  <Compnt noOfColumn={heroData.noOfColumn} entitySet={heroData.entitySet}/>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};
