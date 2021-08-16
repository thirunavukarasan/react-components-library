import React from "react";
import { Container } from "../Common/Container/Container";
import {
  BrandModule1,
  BrandModule2,
  BrandModule3,
  BrandModule4,
  BrandModule5,
  BrandModule6,
} from "../BrandComponents";
export const BrandModulestList = (props) => {
  const {} = props;
  let heroComps = [
    {
      comp: BrandModule1,
      name: "BrandModule1",
    },
    {
      comp: BrandModule2,
      name: "BrandModule2",
    },
    {
      comp: BrandModule3,
      name: "BrandModule3",
    },
    {
      comp: BrandModule4,
      name: "BrandModule4",
    },
    {
      comp: BrandModule5,
      name: "BrandModule5",
    },
    {
      comp: BrandModule6,
      name: "BrandModule6",
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
