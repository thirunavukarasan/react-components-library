import React from "react";
import propTypes from "prop-types";
import "./EntityModule24.Common.css";
import "./EntityModule24.Components.css";
export const EntityModule24 = (props) => {
  const { entityImage, showCompId, bgColor } = props;
  const styles = {
    bg: {
      background: bgColor,
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-24">
        <div
          class="weaverz-ai-bottomfootimg-wrap weaverz-ai-relative weaverz-ai-overflow-hidden weaverz-ai-main-full-wrap weaverz-ai-mx-auto"
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex weaverz-ai-alig-items-center sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-4/5 sm:weaverz-ai-w-full">
                <img
                  src={entityImage}
                  class="weaverz-ai-img-auto weaverz-ai-bottomfoot-img"
                />
                <div class="weaverz-ai-feature-box1"></div>
                <div class="weaverz-ai-feature-box2"></div>
              </div>
              <div class="md:weaverz-ai-w-1/5 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-featureimg-border1">
                  <img src={entityImage} class="weaverz-ai-img-auto" />
                </div>
                <div class="weaverz-ai-featureimg-border2">
                  <img src={entityImage} class="weaverz-ai-img-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule24.propTypes = {
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  bgColor: propTypes.string,
};

EntityModule24.defaultProps = {
  showCompId: true,
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/aefd2ba3b7b316c396d7f84f42dcf2d8/075a3e36a0a52dcbc568c05788e8a713/1f50893f80d6830d62765ffad7721742/503cf4941ceefa204c6b97f0e3980b50.png",
  bgColor: "#80808087",
};
