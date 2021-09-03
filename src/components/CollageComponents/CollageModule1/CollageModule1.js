import React from "react";
import propTypes from "prop-types";
import "./CollageModule1.css";
export const CollageModule1 = (props) => {
  const {
    entitySet,
    heading,
    description,
    showCompId,
    bgColor,
    textColor,
    HeadingfontSize,
    ParafontSize,
    noOfColumn,
    textSectionIshow
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f8f8f8",
      margin: "8px 0px"
    },
    heading: {
      fontSize: HeadingfontSize,
      color: textColor,
    },
    para: {
      fontSize: ParafontSize,
      color: textColor,
    },
  };
  return (
    <>
      <section
        id="weaveroo-collage-module-1"
        style={styles.bg}
        data-comp-id={showCompId ? "entityName" : ""}
      >
        {noOfColumn === "Three" ? (
          <div
            className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden"
            id="collage-sec1"
          >
            {entitySet.map((entdata,i) => {
              return (
                <div class={`weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-1/3 weaverz-ai-mt-0 md:weaverz-ai-mt-2 weaverz-ai-mb-2 ${i === 1 ? "" : "md:weaverz-ai-px-2"} md:weaverz-ai-w-1/3 lg:weaverz-ai-w-1/3 xl:weaverz-ai-w-1/3`}>
                  <img
                    src={entdata.entityImage}
                    srcSet={entdata.entitySrcSet}
                    sizes={entdata.entitySizes}
                    alt={"entity"}
                    className="weaverz-ai-object-fill collage-img"
                  />
                </div>
              );
            })}
            <div className="weaverz-ai-px-2" style = {{display: textSectionIshow ? "" : "none"}}>
              <h1 style={styles.heading} className="head">
                {heading}
              </h1>
              <p style={styles.para} className="des">
                {description}
              </p>
            </div>
          </div>
        ) : (
          <div
            class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden"
            id="collage-sec1"
          >
            {entitySet.map((entdata,i) => {
              return (
                <div class={`weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-1/2 weaverz-ai-mt-0 md:weaverz-ai-mt-2 weaverz-ai-mb-2 ${i === 0 || i === 2 ? "md:weaverz-ai-pl-2 md:weaverz-ai-pr-1" : "md:weaverz-ai-pr-2 md:weaverz-ai-pl-1"} md:weaverz-ai-w-1/2 lg:weaverz-ai-w-1/2 xl:weaverz-ai-w-1/2`}>
                  <img
                    src={entdata.entityImage}
                    srcSet={entdata.entitySrcSet}
                    sizes={entdata.entitySizes}
                    alt={"entity"}
                    className="weaverz-ai-object-fill collage-img"
                  />
                </div>
              );
            })}
            <div className="weaverz-ai-px-2" style = {{display: textSectionIshow ? "" : "none"}}>
              <h1 style={styles.heading} className="head">
                {heading}
              </h1>
              <p style={styles.para} className="des">
                {description}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

CollageModule1.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entitySet: propTypes.arrayOf(
    propTypes.shape({
      entityImage: propTypes.string.isRequired,
      entitySrcSet: propTypes.string,
      entitySizes: propTypes.string,
    })
  ).isRequired,
  showCompId: propTypes.bool,
  textColor: propTypes.string,
  bgColor: propTypes.string,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
  noOfColumn: propTypes.string,
  textSectionIshow : propTypes.bool
};

CollageModule1.defaultProps = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
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
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  noOfColumn : 'Three',
  textSectionIshow : true
};
