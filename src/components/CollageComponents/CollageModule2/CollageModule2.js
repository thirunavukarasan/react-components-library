import React from "react";
import propTypes from "prop-types";
import "./CollageModule2.css";
export const CollageModule2 = (props) => {
  const {
    mainImage,
    entitySet,
    heading,
    description,
    showCompId,
    bgColor,
    textColor,
    HeadingfontSize,
    ParafontSize,
    orientation,
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
    leftImage: {
      height:  '361px',
      width: '100%'
    }
  };
  return (
    <>
      <section
        id="weaveroo-collage-module-2"
        style={styles.bg}
        data-comp-id={showCompId ? "entityName" : ""}
      >
        {orientation === "r" ? (
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div className={`weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-mt-0 md:weaverz-ai-mt-2 
            ${textSectionIshow ? "weaverz-ai-mb-2" : ""} md:weaverz-ai-pl-2 md:weaverz-ai-w-2/5 lg:weaverz-ai-w-2/5 xl:weaverz-ai-w-2/5`}>
              {entitySet.map((data) => {
                return (
                  <div className="weaverz-ai-w-full md:weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-mb-2" key={data.entityImage}>
                    <img
                      src={data.entityImage}
                      srcSet={data.entitySrcSet}
                      sizes={data.entitySizes}
                      alt={"entity"}
                      className="weaverz-ai-object-fill collage-img-r"
                    />
                  </div>
                );
              })}

              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden" style={{display:textSectionIshow ? "" : "none"}}>
                <h1 style={styles.heading} className="head">
                  {heading}
                </h1>
                <p style={styles.para} className="des">
                  {description}
                </p>
              </div>
            </div>

            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-my-0 md:weaverz-ai-my-2 md:weaverz-ai-px-2 md:weaverz-ai-w-3/5 lg:weaverz-ai-w-3/5	xl:weaverz-ai-w-3/5">
              <img
                src={mainImage.entityImage}
                srcSet={mainImage.entitySrcSet}
                sizes={mainImage.entitySizes}
                alt={"entity"}
                className="weaverz-ai-object-fill collage-main-img"
              />
            </div>
          </div>
        ) : (
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-mt-0 md:weaverz-ai-mt-2 weaverz-ai-mb-2 md:weaverz-ai-px-2 md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12">
              <img
                src={mainImage.entityImage}
                srcSet={mainImage.entitySrcSet}
                sizes={mainImage.entitySizes}
                alt={"entity"}
                className="weaverz-ai-object-fill collage-main-l-img"
                style = {textSectionIshow ? {}: {height:"100%"}}
              />

              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-mt-2 weaverz-ai-px-2 md:weaverz-ai-px-0" style={{display:textSectionIshow ? "" : "none"}}>
                <h1 style={styles.heading} className="head">
                  {heading}
                </h1>
                <p style={styles.para} className="des">
                  {description}
                </p>
              </div>
            </div>

            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-mt-0 md:weaverz-ai-mt-2  md:weaverz-ai-pr-2 md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12	xl:weaverz-ai-w-6/12">
              {entitySet.map((data,i) => {
                return (
                  <div className={`weaverz-ai-w-full weaverz-ai-overflow-hidden ${i === 0 ? "weaverz-ai-mb-2" : ""} md:weaverz-ai-mb-2`} key={data.entityImage}>
                    <img
                      src={data.entityImage}
                      srcSet={data.entitySrcSet}
                      sizes={data.entitySizes}
                      alt={"entity"}
                      className="weaverz-ai-object-fill collage-img-l"
                      style = {textSectionIshow ? {} : styles.leftImage}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

CollageModule2.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  mainImage: propTypes.shape({
    entityImage: propTypes.string.isRequired,
    entitySrcSet: propTypes.string,
    entitySizes: propTypes.string,
  }),
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
  orientation: propTypes.string,
  textSectionIshow : propTypes.bool
};

CollageModule2.defaultProps = {
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  showCompId: true,
  mainImage: {
    entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/measurements/staging/TJ-MK-182-01_d.jpg",
    entitySrcSet: "",
    entitySizes: "",
  },
  entitySet: [
    {
      entityImage:
        "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_1.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
    {
      entityImage:
      "https://asset.weaveroo.io/tjori-01/Womens Apparel/TJ-MK-182-01/entity_module_2/staging/TJ-MK-182-01_e2_2.jpg",
      entitySrcSet: "",
      entitySizes: "",
    },
  ],
  bgColor: "#f8f8f8",
  textColor: "#393939",
  HeadingfontSize: 22,
  ParafontSize: 16,
  orientation: "r",
  textSectionIshow: true
};
