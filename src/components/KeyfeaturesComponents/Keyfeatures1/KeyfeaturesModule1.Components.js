import React from "react";
import propTypes from "prop-types";
import "./KeyfeaturesModule1.Components.scss";
export const KeyfeaturesModule1 = (props) => {
  const {
    heading,
    mainImage,
    centerHeading,
    keyfeatures,
    bgColor,
    textColor,
    orientation,
    headingStyle
  } = props;
  const styles = {
    bg: {
      backgroundColor: `${
        bgColor === ""
          ? `linear-gradient(112deg, #2a2025 4%, #6a6e71 61%, #6a6d71 136%)`
          : bgColor
      }`,
    },
  };
  return (
    <>
      <section
        id="weaveroo-keyfeatures-module-1"
        className="weaverz-ai-mx-auto weaverz-ai-layout-wrap"
      >
        {orientation === "l" ? (
          <div className="weaverz-ai-container" style={styles.bg}>
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-text-center ${
                  centerHeading ? "" : "weaverz-ai-hidden"
                }`}
              >
                <h3 className="weaverz-ai-keyfeature-heading weaverz-ai-font-opensans weaverz-ai-text-center" style={{color : textColor,fontStyle:headingStyle}}>
                  {heading}
                </h3>
              </div>
              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12  weaverz-ai-py-4 weaverz-ai-kvp-side-img">
                <img
                  src={mainImage}
                  // srcSet={image?.srcSet}
                  // sizes={image?.sizes}
                  className=""
                />
              </div>
              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12">
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden  weaverz-ai-px-4 weaverz-ai-py-4">
                  <div
                    className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-text-center ${
                      centerHeading ? "weaverz-ai-hidden" : ""
                    }`}
                  >
                    <h3 className="weaverz-ai-keyfeature-heading weaverz-ai-font-opensans weaverz-ai-text-center" style={{color : textColor,fontStyle:headingStyle}}>
                      {heading}
                    </h3>
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
                      {keyfeatures && keyfeatures.length
                        ? keyfeatures.map((value) => {
                            return (
                              <div className="weaverz-ai-w-4/12 weaverz-ai-overflow-hidden sm:weaverz-ai-w-4/12 weaverz-ai-my-4" key={value.key}>
                                <div className="">
                                  <div className="weaverz-ai-keyfeature-icon">
                                    <img
                                      src={value.iconImage}
                                      // srcSet={value?.images?.imageSet?.srcSet}
                                      // sizes={value?.images?.imageSet?.sizes}
                                      className=""
                                    />
                                  </div>
                                  <h5 className="weaverz-ai-keyfeature-key weaverz-ai-font-opensans" style={{color : textColor}}>
                                    {value.key[0].toUpperCase() +
                                      value.key.substring(1)}
                                  </h5>
                                  <p className="weaverz-ai-keyfeature-value weaverz-ai-font-opensans" style={{color : textColor}}>
                                    {value.value}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="weaverz-ai-container" style={styles.bg}>
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div
                className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-text-center ${
                  centerHeading ? "" : "weaverz-ai-hidden"
                }`}
              >
                <h3 className="weaverz-ai-keyfeature-heading weaverz-ai-font-opensans weaverz-ai-text-center" style={{color : textColor,fontStyle:headingStyle}}>
                  {heading}
                </h3>
              </div>
              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12">
                <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden  weaverz-ai-px-4 weaverz-ai-py-4">
                  <div
                    className={`weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-text-center ${
                      centerHeading ? "weaverz-ai-hidden" : ""
                    }`}
                  >
                    <h3 className="weaverz-ai-keyfeature-heading weaverz-ai-font-opensans weaverz-ai-text-center" style={{color : textColor,fontStyle:headingStyle}}>
                      {heading}
                    </h3>
                  </div>
                  <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                    <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
                      {keyfeatures && keyfeatures.length
                        ? keyfeatures.map((value) => {
                            return (
                              <div className="weaverz-ai-w-4/12 weaverz-ai-overflow-hidden sm:weaverz-ai-w-4/12 weaverz-ai-my-4">
                                <div className="">
                                  <div className="weaverz-ai-keyfeature-icon">
                                    <img
                                      src={value.iconImage}
                                      // srcSet={value?.images?.imageSet?.srcSet}
                                      // sizes={value?.images?.imageSet?.sizes}
                                      className=""
                                    />
                                  </div>
                                  <h5 className="weaverz-ai-keyfeature-key weaverz-ai-font-opensans" style={{color : textColor}}>
                                    {value.key[0].toUpperCase() +
                                      value.key.substring(1)}
                                  </h5>
                                  <p className="weaverz-ai-keyfeature-value weaverz-ai-font-opensans" style={{color : textColor}}>
                                    {value.value}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </div>

              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12  weaverz-ai-py-4 weaverz-ai-kvp-side-img">
                <img
                  src={mainImage}
                  // srcSet={image?.srcSet}
                  // sizes={image?.sizes}
                  className=""
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

KeyfeaturesModule1.propTypes = {
  orientation: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
  heading: propTypes.string,
  headingStyle: propTypes.string,
  centerHeading: propTypes.bool,
  mainImage: propTypes.string,
  keyfeatures: propTypes.arrayOf(
    propTypes.shape({
      iconImage: propTypes.string.isRequired,
      key: propTypes.number.isRequired,
      value: propTypes.number.isRequired,
    })
  ).isRequired,
};

KeyfeaturesModule1.defaultProps = {
  orientation: "l",
  centerHeading: false,
  heading: "Key Features",
  headingStyle: "normal",
  mainImage:
    "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_1-ec2035f078782b3fa0bfee0e7c33882b.png",
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
    }
  ],
  bgColor: "#000000",
  textColor:"#ffffff"
};
