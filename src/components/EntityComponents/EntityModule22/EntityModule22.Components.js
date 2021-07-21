import React from "react";
import propTypes from "prop-types";
import "./EntityModule22.Common.css";
import "./EntityModule22.Components.css";
export const EntityModule22 = (props) => {
  const {
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    keyfeatures,
    bgColor,
  } = props;
  let sectionClass =
    keyfeatures.length > 1
      ? "weaverz-ai-reflectsilver-wrap"
      : "weaverz-ai-reflectsilver-wrap-textSection";
  const styles = {
    bg: {
      background: bgColor,
    },
  };
  return (
    <>
      <div id="weaveroo-entity-module-22">
        <div
          class={`${sectionClass} weaverz-ai-relative weaverz-ai-overflow-hidden weaverz-ai-main-full-wrap weaverz-ai-mx-auto`}
          data-comp-id={showCompId}
          style={styles.bg}
        >
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-stand-imgsec weaverz-ai-flex">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaverz-ai-img-auto weaverz-ai-mx-auto weaverz-ai-reflectsilver-img"
                />
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaverz-ai-img-auto weaverz-ai-mx-auto weaverz-ai-reflectsilver-img"
                />
              </div>

              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div
                  class={`${
                    keyfeatures.length > 1
                      ? "weaverz-ai-stand-slivercircle"
                      : "weaverz-ai-stand-slivercircle2"
                  }`}
                >
                  <div class="weaverz-ai-stand-group">
                    <h6 class="weaverz-ai-text-lg weaverz-ai-text-white weaverz-ai-stand-heading weaverz-ai-font-opensans weaverz-ai-font-semibold weaverz-ai-pb-6">
                      Key Features
                    </h6>
                    <div class="weaverz-ai-key-features-icon-part">
                      <div class="weaverz-ai-rowflex">
                        {keyfeatures.map((data) => {
                          return (
                            <div
                              class="weaverz-ai-w-6/12 weaverz-ai-flex weaverz-ai-key-features-inr"
                              key={data.value}
                            >
                              <div class="box-icon">
                                <img
                                  src={data.iconImage}
                                  class="weaverz-ai-img-auto weaverz-ai-mx-auto weaverz-ai-object-contain weaverz-ai-keybox-icon1-img"
                                />
                              </div>
                              <div class="weaverz-ai-box-right-text">
                                <h6 class="weaverz-ai-font-opensans">
                                  {data.key}
                                </h6>
                                <span class="weaverz-ai-font-opensans">
                                  {data.value}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EntityModule22.propTypes = {
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  keyfeatures: propTypes.arrayOf(
    propTypes.shape({
      iconImage: propTypes.string.isRequired,
      key: propTypes.number.isRequired,
      value: propTypes.number.isRequired,
    })
  ).isRequired,
  bgColor: propTypes.string,
};

EntityModule22.defaultProps = {
  showCompId: true,
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/3dc4876f3f08201c7c76cb71fa1da439/37735c7b024fda3ebf49585ce3908499.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/fe1296d8f088d93b9ea04ce2bb2ec044/075a3e36a0a52dcbc568c05788e8a713/3dc4876f3f08201c7c76cb71fa1da439/37735c7b024fda3ebf49585ce3908499.png 513w,",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  keyfeatures: [
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
  ],
  bgColor: "#c6c6c6",
};
