import React from "react";
import propTypes from "prop-types";
import "./EntityModule20.Common.css";
import "./EntityModule20.Components.css";
export const EntityModule20 = (props) => {
  const {
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
      background: bgColor ? bgColor : "#adacac9c",
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-20">
        <div
          class="weaverz-ai-tnshoe-wrap weaverz-ai-relative weaverz-ai-overflow-hidden weaverz-ai-py-1 sm:weaverz-ai-text-center weaverz-ai-main-full-wrap weaverz-ai-mx-auto"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex sm:weaverz-ai-block">
              <div class="weaverz-ai-w-6/12">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaverz-ai-mx-auto weaverz-ai-tnshoe-img"
                />
              </div>
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-white-halfcircle">
                  <div class="weaverz-ai-tnshoewhitecontent-area">
                    <h6 class="weaverz-ai-text-lg weaverz-ai-tnshoe-text weaverz-ai-font-opensans weaverz-ai-font-semibold">
                      {heading}
                    </h6>
                    <p class="weaverz-ai-tnshoe-pra weaverz-ai-font-opensans">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="weaverz-ai-tn-half-circle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule20.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  bgColor: propTypes.string,
};

EntityModule20.defaultProps = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
    description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/0584ce565c824b7b7f50282d9a19945b/6c64afc8fb24b3838bc9403c5ef2f860.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/0584ce565c824b7b7f50282d9a19945b/6c64afc8fb24b3838bc9403c5ef2f860.png 384w,",
  entitySizes: "(max-widgth: 384) 100vw, 384px",
  bgColor: "#adacac9c",
};
