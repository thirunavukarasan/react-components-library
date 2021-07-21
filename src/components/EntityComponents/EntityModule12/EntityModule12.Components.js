import React from "react";
import propTypes from "prop-types";
import "./EntityModule12common.css";
import "./EntityModule12.Components.css";
export const EntityModule12 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
    productName,
    textColor,
    HeadingfontSize,
    ParafontSize,
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f2f2f2ab",
    },
    textColor: {
      color: textColor,
    },
  };
  let firstWord = productName.split(" ");
  return (
    <>
      <div id="weaveroo-entity-module-12">
        <section
          className="weaver-ai-about-shoe"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaver-ai-container-fluid">
            <div class="weaver-ai-row">
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-col-sm-6">
                <h3 class="weaver-ai-about-heading" style={styles.textColor}>
                  <span>{firstWord[0]}</span>
                  {firstWord.slice(1).join(" ")}
                </h3>
                <h6 style={styles.textColor}>{heading}</h6>
                <p style={styles.textColor}>{description} </p>
              </div>
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-col-sm-6 weaver-ai-sm-overflow-hidden">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  alt="side"
                  class="weaver-ai-about-shoeimg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

EntityModule12.propTypes = {
  productName: propTypes.string,
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
};

EntityModule12.defaultProps = {
  productName: "NIKE BLAZER MID 77",
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/5ef0b4eba35ab2d6180b0bca7e46b6f9/798054a702338d69ef1ca5bbd7865849.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/5ef0b4eba35ab2d6180b0bca7e46b6f9/798054a702338d69ef1ca5bbd7865849.png 475w,",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f2f2f2ab",
  textColor: "#333333",
};
