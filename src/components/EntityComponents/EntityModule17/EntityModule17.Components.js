import React from "react";
import propTypes from "prop-types";
import "./EntityModule17.Common.css";
import "./EntityModule17.Components.css";
export const EntityModule17 = (props) => {
  const { entityImage, logoImage, showCompId, bgColor } = props;
  const styles = {
    bg: {
      background: bgColor,
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-17">
        <div class="weaver-ai-black-shoe-feature" data-comp-id={showCompId} style={styles.bg}>
          <div class="weaver-ai-container-fluid">
            <div class="weaver-ai-row weaver-ai-m-0">
              <div class="weaver-ai-col-md-5 weaver-ai-col-sm-5">
                <div class="weaver-ai-blackshoes-img">
                  <img src={entityImage} />
                </div>
                <div class="weaver-ai-box-1"></div>
                <div class="weaver-ai-box-2"></div>
              </div>
              <div class="weaver-ai-col-md-7 weaver-ai-col-sm-7 weaver-ai-d-flex weaver-ai-pl-5">
                <div class="weaver-ai-highlight2">
                  <img src={entityImage} />
                </div>
                <div class="weaver-ai-highlight1">
                  <img src={entityImage} />
                </div>
                <div class="weaver-ai-highlight3">
                  <img src={logoImage} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule17.propTypes = {
  entityImage: propTypes.string,
  logoImage: propTypes.string,
  showCompId: propTypes.bool,
  bgColor: propTypes.string,
};

EntityModule17.defaultProps = {
  bgColor:"#0e0a0a",
  showCompId: true,
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/aefd2ba3b7b316c396d7f84f42dcf2d8/075a3e36a0a52dcbc568c05788e8a713/1f50893f80d6830d62765ffad7721742/503cf4941ceefa204c6b97f0e3980b50.png",
  bgColor: "linear-gradient(239deg,#3c3c3c,#000)",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/18d8042386b79e2c279fd162df0205c8/cad3edf8f0fee9174da7fabc4f5e07e4.png",
};
