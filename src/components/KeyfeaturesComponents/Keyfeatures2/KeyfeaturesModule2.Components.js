import React from "react";
import propTypes from "prop-types";
import "./KeyfeaturesModule2.Components.css";
export const KeyfeaturesModule2 = (props) => {
  const { heading, mainImage, keyfeatures, bgColor } = props;
  const styles = {
    bg: {
      backgroundColor: `${
        bgColor === ""
          ? `ghostwhite`
          : bgColor
      }`,
    },
  };
  return (
    <>
      <section id="weaveroo-keyfeatures-module-2" >
        <div class="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-five-earbudsBox-Section5" style={styles.bg}>
          <div class="weaverz-ai-container">
            <h2 class="weaverz-ai-key-feature-mainheading weaverz-ai-font-opensans weaverz-ai-text-center">
              {heading}
            </h2>
            <div class="md:weaverz-ai-flex sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div
                  class="weaverz-ai-earbudBox-rightSidegroup"
                  style={{ marginTop: keyfeatures.length > 4 ? "0%" : "5%" }}
                >
                  <div class="weaverz-ai-row">
                    {keyfeatures.map((keyfeature) => {
                      return (
                        <div class="md:weaverz-ai-w-6/12 xs:weaverz-ai-w-full weaverz-ai-keyfeatures-temp3">
                          <div class="weaverz-ai-airpods-item weaverz-ai-flex">
                            <div class="weaverz-ai-airpods-icon ">
                              <img
                                src={keyfeature.iconImage}
                                alt={keyfeature.key}
                                class="weaverz-ai-img-auto weaverz-ai-object-contain"
                              />
                            </div>
                            <div class="weaverz-ai-airpods-content">
                              <h5 class="weaverz-ai-airpods-heading weaverz-ai-font-opensans">
                                {keyfeature.key[0].toUpperCase() +
                                  keyfeature.key.substring(1)}
                              </h5>
                              <p class="weaverz-ai-airpods-pra weaverz-ai-font-opensans">
                                {keyfeature.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-center-view-img">
                  <img
                    src={mainImage}
                    class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-max-width-auto  weaverz-ai-keyfeatures-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

KeyfeaturesModule2.propTypes = {
  bgColor: propTypes.string,
  heading: propTypes.string,
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

KeyfeaturesModule2.defaultProps = {
  centerHeading: false,
  heading: "Key Features",
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
    },
  ],
  bgColor: "ghostwhite",
};
