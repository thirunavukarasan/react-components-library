import React from "react";
import propTypes from "prop-types";
import "./EntityModule21.Common.css";
import "./EntityModule21.Components.css";
export const EntityModule21 = (props) => {
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
      background: bgColor,
    },
    textColor: {
      color: textColor,
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-21">
        <div
          class="weaverz-ai-standards-wrap weaverz-ai-relative weaverz-ai-overflow-hidden weaverz-ai-py-1 weaverz-ai-main-full-wrap weaverz-ai-mx-auto"
          data-comp-id={showCompId}
        >
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex weaverz-ai-alig-items-center sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-1/4 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-standards-half-circle" style={styles.bg}>
                  <div class="weaverz-ai-standards-content">
                    <h6
                      class="weaverz-ai-text-lg weaverz-ai-text-white weaverz-ai-tnshoe-text weaverz-ai-font-opensans weaverz-ai-font-semibold"
                      style={styles.textColor}
                    >
                      {heading}
                    </h6>
                    <p
                      class="weaverz-ai-tnshoe-pra weaverz-ai-font-opensans"
                      style={styles.textColor}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              <div class="md:weaverz-ai-w-3/4 sm:weaverz-ai-w-full">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaverz-ai-img-auto weaverz-ai-standards-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule21.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};

EntityModule21.defaultProps = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/eba0dc302bcd9a273f8bbb72be3a687b/ae7cb847e0a60793a5658916db44a17e.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/eba0dc302bcd9a273f8bbb72be3a687b/ae7cb847e0a60793a5658916db44a17e.png 484w,",
  entitySizes: "(max-widgth: 484) 100vw, 484px",
  bgColor: "#f2f2f2",
  textColor: "#000",
};
