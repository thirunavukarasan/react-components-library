import React from "react";
import { Container } from "../Common/Container/Container";
import { CollageModule1, CollageModule2 } from "../CollageComponents";
export const CollageModulestList = (props) => {
  const {} = props;
  let heroCompset1 = [
    {
      comp: CollageModule2,
      name: "CollageModule2Right",
      orientation: "r",
    },
    {
      comp: CollageModule2,
      name: "CollageModule2Left",
      orientation: "l",
    },
  ];
  let heroCompset2 = [
    {
      comp: CollageModule1,
      name: "CollageModule1_ThreeImgs",
      noOfColumn: "Three",
      entitySet: [
        {
          entityImage:
            "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_1.jpg",
          entitySrcSet: "",
          entitySizes: "",
        },
        {
          entityImage:
            "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
          entitySrcSet: "",
          entitySizes: "",
        },
        {
          entityImage:
          "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_3.jpg",
          entitySrcSet: "",
          entitySizes: "",
        },
      ],
    },
    {
      comp: CollageModule1,
      name: "CollageModule1_TwoImgs",
      noOfColumn: "Two",
      entitySet: [
        {
          entityImage:
            "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_1.jpg",
          entitySrcSet: "",
          entitySizes: "",
        },
        {
          entityImage:
            "https://asset.weaveroo.io/tjori-01/Mens Apparel/TJ-MW-08-05/entity_module_2/staging/TJ-MW-08-05_e2_4.jpg",
          entitySrcSet: "",
          entitySizes: "",
        },
      ],
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {heroCompset2.map((heroData,i) => {
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
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {heroCompset1.map((heroData,i) => {
              const Compnt = heroData.comp;
              return (
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden md:weaverz-ai-w-full lg:weaverz-ai-w-full xl:weaverz-ai-w-full weaverz-ai-mb-12">
                  <h1 className="weaverz-ai-text-lg	weaverz-ai-font-bold">
                  {heroData.name}
                  </h1>
                  <Compnt orientation={heroData.orientation} />
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
};
