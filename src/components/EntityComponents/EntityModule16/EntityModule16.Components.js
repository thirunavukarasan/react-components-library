import React from "react";
import propTypes from "prop-types";
import "./EntityModule16.Common.css";
import "./EntityModule16.Components.css";
export const EntityModule16 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
  } = props;
  return (
    <>
      <div id="weaveroo-entity-module-16">
        <div class="clear"></div>
        <div class="weaver-ai-yellow-circle-sec" data-comp-id={showCompId}>
          <div class="weaver-ai-container-fluid">
            <div class="weaver-ai-row weaver-ai-m-0">
              <div class="weaver-ai-col-md-7 weaver-ai-col-sm-7">
                <div class="weaver-ai-yellow-bg">
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaver-ai-y-left-img"
                  />
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaver-ai-y-right-img"
                  />
                </div>
              </div>
              <div class="weaver-ai-col-md-5 weaver-ai-col-sm-5">
                <div class="weaver-ai-yellowround-rightarea">
                  <h3 class="weaver-ai-y-heading">{heading}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule16.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
};

EntityModule16.defaultProps = {
  showCompId: true,
  heading: "Steers you Ahead",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/a819bdb2925e0e014400955972a93376/07214c6750d983a32e0a33da225c4efd/75101dcdfc88455bcafc9e53e0b06689/075a3e36a0a52dcbc568c05788e8a713/6766aa2750c19aad2fa1b32f36ed4aee/dc497485af6340e517fb661d3428130c.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/a819bdb2925e0e014400955972a93376/07214c6750d983a32e0a33da225c4efd/75101dcdfc88455bcafc9e53e0b06689/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/a819bdb2925e0e014400955972a93376/07214c6750d983a32e0a33da225c4efd/75101dcdfc88455bcafc9e53e0b06689/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/a819bdb2925e0e014400955972a93376/07214c6750d983a32e0a33da225c4efd/75101dcdfc88455bcafc9e53e0b06689/075a3e36a0a52dcbc568c05788e8a713/6766aa2750c19aad2fa1b32f36ed4aee/dc497485af6340e517fb661d3428130c.png 634w,",
  entitySizes: "(max-widgth: 634) 100vw, 634px",

};
