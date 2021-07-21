import React from "react";
import propTypes from "prop-types";
import "./EntityModule23.Common.css";
import "./EntityModule23.Components.css";
export const EntityModule23 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
    textColor
  } = props;
  const styles = {
    bg: {
      background: bgColor,
    },
    textColor:{
      color:textColor
    }
  };
  return (
    <>
      <div id="weaveroo-entity-module-23">
        <div
          class="weaverz-ai-sideview-wrap weaverz-ai-relative weaverz-ai-overflow-hidden weaverz-ai-main-full-wrap weaverz-ai-mx-auto"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex weaverz-ai-alig-items-center sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-relative">
                <div class="weaverz-ai-sideview-circle">
                  <div class="weaverz-ai-sideview-group">
                    <h6 class="weaverz-ai-text-lg  weaverz-ai-stand-heading weaverz-ai-font-opensans weaverz-ai-font-semibold weaverz-ai-pb-6" style={styles.textColor}>
                      {heading}
                    </h6>
                    <p class="weaverz-ai-text-3xl weaverz-ai-font-opensans weaverz-ai-standup-pra" style={styles.textColor}>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-leftview-img">
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaverz-ai-img-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule23.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
};

EntityModule23.defaultProps = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/5ef0b4eba35ab2d6180b0bca7e46b6f9/798054a702338d69ef1ca5bbd7865849.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/41fd220f05ed0d8c56e3b83af87d45d7/075a3e36a0a52dcbc568c05788e8a713/5ef0b4eba35ab2d6180b0bca7e46b6f9/798054a702338d69ef1ca5bbd7865849.png 475w,",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f2f2f2",
  textColor: "#000",
};
