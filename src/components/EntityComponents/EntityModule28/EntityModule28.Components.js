import React from "react";
import propTypes from "prop-types";
import "./EntityModule28.Components.css";
export const EntityModule28 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    orientation,
    showCompId,
    bgColor,
    textColor,
    HeadingfontSize,
    ParafontSize,
    imageWidth,
    reviews,
  } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor ? bgColor : "#f8f8f8",
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
      <section
        id="weaveroo-entity-module-28"
        className={`weaverz-ai-mx-auto weaverz-ai-layout-wrap  sm:weaverz-ai-mt-0`}
        style={styles.bg}
        data-comp-id={showCompId ? "entityName" : ""}
      >
        {orientation === "r" ? (
          <div className="weaverz-ai-container">
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center ${dynmicWidthText} md:weaverz-ai-order-1 sm:weaverz-ai-order-2 weaverz-ai-order-2`}
              >
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h4
                    className="weaverz-ai-font-opensans weaverz-ai-stowe-subheading"
                    style={{
                      fontSize: HeadingfontSize
                        ? `${HeadingfontSize}px`
                        : "20px",
                      color: textColor,
                    }}
                  >
                    {heading}
                  </h4>
                </div>
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                  {reviews.map((rev) => {
                    return (
                      <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                        <h4
                          className="weaverz-ai-font-opensans reviewName"
                          style={{
                            fontSize: HeadingfontSize
                              ? `${HeadingfontSize}px`
                              : "20px",
                            color: textColor,
                          }}
                        >
                          {rev.name}
                        </h4>
                        <p
                          className="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph"
                          style={{
                            fontSize: ParafontSize
                              ? `${ParafontSize}px`
                              : "16px",
                            color: textColor,
                          }}
                        >
                          {rev.commnet}
                        </p>
                        <br></br>
                      </div>
                    );
                  })}
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
        ) : (
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
                                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <h4
                      className="weaverz-ai-font-opensans weaverz-ai-stowe-subheading"
                      style={{
                        fontSize: HeadingfontSize
                          ? `${HeadingfontSize}px`
                          : "20px",
                        color: textColor,
                      }}
                    >
                      {heading}
                    </h4>
                  </div>
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                {reviews.map((rev) => {
                    return (
                      <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                        <h4
                          className="weaverz-ai-font-opensans reviewName"
                          style={{
                            fontSize: HeadingfontSize
                              ? `${HeadingfontSize}px`
                              : "20px",
                            color: textColor,
                          }}
                        >
                          {rev.name}
                        </h4>
                        <p
                          className="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph"
                          style={{
                            fontSize: ParafontSize
                              ? `${ParafontSize}px`
                              : "16px",
                            color: textColor,
                          }}
                        >
                          {rev.commnet}
                        </p>
                        <br></br>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

EntityModule28.propTypes = {
  imageWidth: propTypes.string,
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  orientation: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
  reviews: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.number.isRequired,
      commnet: propTypes.number.isRequired,
    })
  ).isRequired,
};

EntityModule28.defaultProps = {
  imageWidth: "25%",
  showCompId: true,
  HeadingfontSize: 26,
  ParafontSize: 16,
  orientation: "r",
  heading: "Customer Review",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
  iconSizes: "(max-widgth: 500) 100vw, 500px",
  entitySizes: "(max-widgth: 500) 100vw, 500px",
  bgColor: "#f8f8f8",
  textColor: "#393939",
  reviews: [
    {
      name: "Thiru ★★★★★",
      commnet:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance.",
    },
    {
      name: "Deepa ★★★★★",
      commnet:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance.",
    },
  ],
};
