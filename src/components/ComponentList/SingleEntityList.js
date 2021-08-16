import React from "react";
import { Container } from "../Common/Container/Container";
import {
  EntityModule1,
  EntityModule2,
  EntityModule3,
  EntityModule4,
  EntityModule5,
  EntityModule6,
  EntityModule7,
  EntityModule8,
  EntityModule9,
  EntityModule10,
  EntityModule11,
  EntityModule12,
  EntityModule13,
  EntityModule14,
  EntityModule15,
  EntityModule16,
  EntityModule17,
  EntityModule18,
  EntityModule19,
  EntityModule20,
  EntityModule21,
  EntityModule22,
  EntityModule23,
  EntityModule24,
  EntityModule25,
  EntityModule26,
} from "../EntityComponents";
export const SingleEntityModulestList = (props) => {
  const {} = props;
  let entCompset1 = [
    {
      comp: EntityModule1,
      name: "EntityModule1_left",
      orientation : "l"
    },
    {
      comp: EntityModule1,
      name: "EntityModule1_right",
      orientation : "r"
    },
    {
      comp: EntityModule2,
      name: "EntityModule2",
    },
    {
      comp: EntityModule3,
      name: "EntityModule3",
    },
    {
      comp: EntityModule4,
      name: "EntityModule4_left",
      orientation : "l"
    },
    {
      comp: EntityModule4,
      name: "EntityModule4_right",
      orientation : "r"
    },
    {
      comp: EntityModule5,
      name: "EntityModule5_left",
      orientation : "l"
    },
    {
      comp: EntityModule5,
      name: "EntityModule5_right",
      orientation : "r"
    },
    {
      comp: EntityModule6,
      name: "EntityModule6",
    },
    {
      comp: EntityModule7,
      name: "EntityModule7",
    },
    {
      comp: EntityModule8,
      name: "EntityModule8",
    },
    {
      comp: EntityModule9,
      name: "EntityModule9",
    },
    {
      comp: EntityModule10,
      name: "EntityModule10",
    },
    {
      comp: EntityModule11,
      name: "EntityModule11",
    },
    {
      comp: EntityModule12,
      name: "EntityModule12",
    },
    {
      comp: EntityModule13,
      name: "EntityModule13",
    },
    {
      comp: EntityModule14,
      name: "EntityModule14",
    },
    {
      comp: EntityModule15,
      name: "EntityModule15",
    },
    {
      comp: EntityModule16,
      name: "EntityModule16",
    },
    {
      comp: EntityModule17,
      name: "EntityModule17",
    },
    {
      comp: EntityModule18,
      name: "EntityModule18",
    },
    {
      comp: EntityModule19,
      name: "EntityModule19",
    },
    {
      comp: EntityModule20,
      name: "EntityModule20",
    },
    {
      comp: EntityModule21,
      name: "EntityModule21",
    },
    {
      comp: EntityModule22,
      name: "EntityModule22",
    },
    {
      comp: EntityModule23,
      name: "EntityModule23",
    },
    {
      comp: EntityModule24,
      name: "EntityModule24",
    },
    {
      comp: EntityModule25,
      name: "EntityModule25",
    },
    {
      comp: EntityModule26,
      name: "EntityModule26",
    },
  ];

  return (
    <>
      <Container>
        <section id="weaveroo-component-list" className={``}>
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            {entCompset1.map((heroData, i) => {
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
