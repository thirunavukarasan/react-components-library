import React from "react";
import propTypes from "prop-types";
import "./KeyfeaturesModule5.Components.css";
export const KeyfeaturesModule5 = (props) => {
  const { heading, mainImage, keyfeatures, bgColor } = props;
  const styles = {
    bg: {
      backgroundColor: `${bgColor === "" ? `#3c3c3c` : bgColor}`,
    },
  };
  return (
    <>
      <section id="weaveroo-keyfeatures-module-5">
        <div class="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-samsung-secfive" style={styles.bg}>
          <div class="weaverz-ai-container">
            <h5 class="weaverz-ai-font-opensans weaverz-ai-samsung-secfive-heading weaverz-ai-text-center">
              {heading}
            </h5>
            <div class="md:weaverz-ai-flex weaverz-ai-items-center sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-mx-auto">
                <div class="weaverz-ai-samsung-secfive-imgsec">
                  <img
                    src={mainImage}
                    class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-samsung-secfive-productimg  weaverz-ai-ml-auto"
                  />
                </div>
              </div>
              <div class="md:weaverz-ai-w-7/12 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-samsung-secfive-rightbox-item">
                  <div class="weaverz-ai-rowflex">
                    {keyfeatures.map((value) => {
                      return (
                        <div class="md:weaverz-ai-w-4/12 sm:weaverz-ai-w-full weaverz-ai-w-50">
                          <div class="weaverz-ai-samsung-secfive-box-item">
                            <div class="weaverz-ai-samsung-secfive-box-icon weaverz-ai-mx-auto">
                              <img
                               src={value.iconImage}
                               alt={value.key}
                                class="weaverz-ai-img-auto weaverz-ai-object-contain"
                              />
                            </div>
                            <div class="weaverz-ai-samsung-secfive-box-content">
                              <h5 class="weaverz-ai-samsung-secfive-box-heading weaverz-ai-font-opensans">
                                {value.key[0].toUpperCase() +
                                  value.key.substring(1)}
                              </h5>
                              <p class="weaverz-ai-samsung-secfive-box-pra weaverz-ai-font-opensans">
                                {value.value}
                              </p>
                            </div>
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
      </section>
    </>
  );
};

KeyfeaturesModule5.propTypes = {
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

KeyfeaturesModule5.defaultProps = {
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
  bgColor: "#3c3c3c",
};
