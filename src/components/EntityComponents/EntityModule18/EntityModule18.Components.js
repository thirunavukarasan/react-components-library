import React from "react";
import propTypes from "prop-types";
import "./EntityModule18.Common.css";
import "./EntityModule18.Components.css";
export const EntityModule18 = (props) => {
  const {
    productName,
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f0f0f0",
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-18">
        <section
          class="weaver-ai-rightblackshoe-wrap"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaver-ai-container-fluid">
            <div class="weaver-ai-row">
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-col-sm-6 weaver-ai-xs-pl-0">
                <div class="weaver-ai-rightblackshoe-bg-white">
                  <h3 class="weaver-ai-rightshoe-heading">
                    {productName}
                  </h3>
                  <h5 class="weaver-ai-rightshoe-subheading">
                    {heading}
                  </h5>
                  <p>{description}</p>
                </div>
              </div>
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-col-sm-6 weaver-ai-sm-overflow-hidden">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaver-ai-rightblack-shoeimg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

EntityModule18.propTypes = {
  productName:propTypes.string,
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  bgColor: propTypes.string,
};

EntityModule18.defaultProps = {
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
  bgColor: "#f0f0f0",
};
