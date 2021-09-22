import React from "react";
import propTypes from "prop-types";
import "./EntityModule1.Components.css";
export const EntityModule1 = (props) => {
  const {
    heading,
    description,
    iconImage,
    iconSrcSet,
    iconSizes,
    entityImage,
    entitySrcSet,
    entitySizes,
    orientation,
    showCompId,
    bgColor,
    headingtextColor,
    paratextColor,
    iconBgColor,
    iconFilter,
    HeadingfontSize,
    ParafontSize,
    imageWidth,
    iconShow,
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f8f8f8",
    },
    iconFilter: {
      filter: iconFilter ? `invert(1)` : "",
      backgroundColor: iconBgColor ? iconBgColor : "",
    },
    iconDisplay: {
      display: iconShow ? "" : "none",
    },
  };

  let dynmicWidthImg;
  let dynmicWidthText;

  if (imageWidth === "25%") {
    (dynmicWidthImg =
      "sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12"),
      (dynmicWidthText =
        "sm:weaverz-ai-w-full md:weaverz-ai-w-7/12 lg:weaverz-ai-w-7/12 xl:weaverz-ai-w-7/12");
  } else if (imageWidth === "75%") {
    (dynmicWidthImg =
      "sm:weaverz-ai-w-full md:weaverz-ai-w-7/12 lg:weaverz-ai-w-7/12 xl:weaverz-ai-w-7/12"),
      (dynmicWidthText =
        "sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12");
  }
  return (
    <>
      {orientation === "l" ? (
        <section
          className={`weaveroo-entity-module-1 weaverz-ai-mx-auto weaverz-ai-layout-wrap  sm:weaverz-ai-mt-0`}
          style={styles.bg}
          // hidden={orientation === "r"}
          data-comp-id={showCompId ? "entityName" : ""}
        >
          <div className="weaverz-ai-container">
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden ${dynmicWidthImg}`}
              >
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-kitchen-img"
                />
              </div>

              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center ${dynmicWidthText}`}
              >
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                  <div
                    className="weaverz-ai-w-full weaverz-ai-overflow-hidden"
                    style={styles.iconDisplay}
                  >
                    <img
                      src={iconImage}
                      srcSet={iconSrcSet}
                      sizes={iconSizes}
                      className="weaverz-ai-h-16"
                      style={styles.iconFilter}
                    />
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <h4
                      className="weaverz-ai-font-opensans weaverz-ai-stowe-subheading"
                      style={{
                        fontSize: HeadingfontSize
                          ? `${HeadingfontSize}px`
                          : "20px",
                        color: headingtextColor,
                      }}
                    >
                      {heading}
                    </h4>
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <p
                      className="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph"
                      style={{
                        fontSize: ParafontSize ? `${ParafontSize}px` : "16px",
                        color: paratextColor,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className={`weaveroo-entity-module-1 weaverz-ai-mx-auto weaverz-ai-layout-wrap  sm:weaverz-ai-mt-0`}
          style={styles.bg}
          // hidden={orientation === "l"}
          data-comp-id={showCompId ? "entityName" : ""}
        >
          <div className="weaverz-ai-container">
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center ${dynmicWidthText} md:weaverz-ai-order-1 sm:weaverz-ai-order-2 weaverz-ai-order-2`}
              >
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                  <div
                    className="weaverz-ai-w-full weaverz-ai-overflow-hidden"
                    style={styles.iconDisplay}
                  >
                    <img
                      src={iconImage}
                      srcSet={iconSrcSet}
                      sizes={iconSizes}
                      style={styles.iconFilter}
                      className="weaverz-ai-h-16"
                    />
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <h4
                      className="weaverz-ai-font-opensans weaverz-ai-stowe-subheading"
                      style={{
                        fontSize: HeadingfontSize
                          ? `${HeadingfontSize}px`
                          : "20px",
                        color: headingtextColor,
                      }}
                    >
                      {heading}
                    </h4>
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <p
                      className="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph"
                      style={{
                        fontSize: ParafontSize ? `${ParafontSize}px` : "16px",
                        color: paratextColor,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden ${dynmicWidthImg} md:weaverz-ai-order-2 sm:weaverz-ai-order-1 weaverz-ai-order-1`}
              >
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-kitchen-img"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

EntityModule1.propTypes = {
  iconShow: propTypes.bool,
  imageWidth: propTypes.string,
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  iconImage: propTypes.string,
  entityImage: propTypes.string,
  orientation: propTypes.string,
  showCompId: propTypes.bool,
  iconSrcSet: propTypes.string,
  entitySrcSet: propTypes.string,
  iconSizes: propTypes.string,
  entitySizes: propTypes.string,
  headingtextColor: propTypes.string,
  paratextColor: propTypes.string,
  iconBgColor: propTypes.string,
  bgColor: propTypes.string,
  iconFilter: propTypes.bool,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
};

EntityModule1.defaultProps = {
  iconShow: true,
  imageWidth: "25%",
  showCompId: true,
  HeadingfontSize: 20,
  ParafontSize: 16,
  orientation: "r",
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
  headingtextColor: "#393939",
  paratextColor: "#393939",
  iconBgColor: "",
  iconFilter: false,
};
