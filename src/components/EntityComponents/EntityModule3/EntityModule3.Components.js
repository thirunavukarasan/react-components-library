import React from "react";
import propTypes from "prop-types";
import "./EntityModule3.Components.css";
export const EntityModule3 = (props) => {
  const {
    heading,
    description,
    iconImage,
    iconSrcSet,
    iconSizes,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
    textColor,
    iconFilter,
    HeadingfontSize,
    ParafontSize,
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f8f8f8",
    },
    iconFilter: {
      filter: iconFilter ? `invert(1)` : "",
    },
  };
  return (
    <>
      <section id="weaveroo-entity-module-3">
        <div
          class="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-ear-buds-Section2"
          data-comp-id={showCompId ? heading : ""}

          style={styles.bg}
        >
          <div class="weaverz-ai-container">
            <div class="md:weaverz-ai-flex weaverz-ai-items-center sm:weaverz-ai-block  weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full md:weaverz-ai-order-2 sm:weaverz-ai-order-1 weaverz-ai-order-1">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  alt={heading}
                 
                  class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-bose-rightside-Img"
                />
              </div>

              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full md:weaverz-ai-order-1 sm:weaverz-ai-order-2 weaverz-ai-order-2">
                <div class="weaverz-ai-bose-ear-buds-left">
                  <div class="weaverz-ai-bose-ear-icon">
                    <img
                       src={iconImage}
                       srcSet={iconSrcSet}
                       sizes={iconSizes}
                       alt={heading}
                       style={styles.iconFilter}
                      class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-icon-Img"
                    />
                  </div>
                  <h2 class="weaverz-ai-font-opensans weaverz-ai-bose-title" style={{color : textColor, fontSize: HeadingfontSize}}>
                    {heading}
                  </h2>
                  <h6 class="weaverz-ai-font-opensans weaverz-ai-bose-desc" style={{color : textColor, fontSize: ParafontSize}}>
                    {description}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

EntityModule3.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  iconImage: propTypes.string,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  iconSrcSet: propTypes.string,
  entitySrcSet: propTypes.string,
  iconSizes: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
  iconFilter: propTypes.bool,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
};

EntityModule3.defaultProps = {
  showCompId: true,
  HeadingfontSize: 20,
  ParafontSize: 16,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  iconImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
  iconSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/c74d97b01eae257e44aa9d5bade97baf/7d12b66d3df6af8d429c1a357d8b9e1a.png 16w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/642e92efb79421734881b53e1e1b18b6/c133fb1bb634af68c5088f3438848bfd.png 48w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/26657d5ff9020d2abefe558796b99584/fc322c6bd467dc6e4a70ece4ce0245f8.png 96w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png 256w,",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
  iconSizes: "(max-widgth: 500) 100vw, 500px",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f8f8f8",
  textColor: "#393939",
  iconFilter: false,
};
