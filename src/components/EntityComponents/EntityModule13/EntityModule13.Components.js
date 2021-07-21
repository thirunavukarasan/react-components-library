import React from "react";
import propTypes from "prop-types";
import "./EntityModule13.Common.css";
import "./EntityModule13.Components.css";
export const EntityModule13 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
    textColor,
  } = props;
  const styles = {
    bg: {
      background: bgColor ? bgColor : "linear-gradient(239deg,#3c3c3c,#000)",
    },
    textColor: {
      color: textColor,
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-13">
        <section
          class="weaver-ai-about-shoe weaver-ai-feature-shoe"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaver-ai-container">
            <div class="weaver-ai-row weaver-ai-align-items-center">
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-col-sm-6">
                <div class="weaver-ai-feature-img weaver-ai-d-flex">
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaver-ai-featureshoe-leftimg weaver-ai-featureshoe-img"
                  />
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaver-ai-featureshoe-rightimg weaver-ai-featureshoe-img"
                  />
                </div>
              </div>
              <div class="weaver-ai-col-xl-6 weaver-ai-col-lg-6 weaver-ai-pt-5 weaver-ai-mt-2 weaver-ai-pl-5 weaver-ai-col-sm-6">
                <div class="weaver-ai-feature-shoe-top">
                  <h6 style={styles.textColor}>{heading}</h6>
                  <p style={styles.textColor}>{description} </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

EntityModule13.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
};

EntityModule13.defaultProps = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/3dc4876f3f08201c7c76cb71fa1da439/37735c7b024fda3ebf49585ce3908499.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/3dc4876f3f08201c7c76cb71fa1da439/37735c7b024fda3ebf49585ce3908499.png 513w,",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "linear-gradient(239deg,#3c3c3c,#000)",
  textColor: "#ffffff",
};
