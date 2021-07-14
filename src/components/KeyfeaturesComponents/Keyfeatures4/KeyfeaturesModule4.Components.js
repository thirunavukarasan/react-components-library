import React from "react";
import propTypes from "prop-types";
import "./KeyfeaturesModule4.Components.css";
export const KeyfeaturesModule4 = (props) => {
  const { heading, mainImage, keyfeatures, bgColor } = props;
  const styles = {
    bg: {
      backgroundColor: `${
        bgColor === ""
          ? `red`
          : bgColor
      }`,
    },
  };
  return (
    <>
      <section id="weaveroo-keyfeatures-module-4" >
      <div className="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-FridgeSection5" style={styles.bg}>
      <div className="weaverz-ai-container">
        <div className="md:weaverz-ai-flex weaverz-ai-items-center sm:weaverz-ai-block">
          <div className="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-mx-auto">
            <div className="weaverz-ai-FridgeSection5-imgsec">
              <img
                src={mainImage}
                alt="hero"
                className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-FridgeSection5-productimg  weaverz-ai-ml-auto"
              />
            </div>
          </div>
          <div className="md:weaverz-ai-w-7/12 sm:weaverz-ai-w-full">
            <div className="weaverz-ai-FridgeSection5-rightbox-item">
              <h5 className="weaverz-ai-font-opensans weaverz-ai-FridgeSection5-heading">{heading}</h5>

              <div className="weaverz-ai-rowflex">
                {keyfeatures.map((value, index) => {
                  return (
                    <div className="weaverz-ai-w-4/12 weaverz-ai-flex weaverz-ai-key-features-First" key={index}>
                      <div className="weaverz-ai-fridgesec5-box-item">
                        <div className="weaverz-ai-fridgesec5-box-icon weaverz-ai-mx-auto">
                          <img
                            src={value.iconImage}
                            alt={value.key}
                            className="weaverz-ai-img-auto weaverz-ai-object-contain"
                          />
                        </div>
                        <div className="weaverz-ai-fridgesec5-box-content">
                          <h5 className="weaverz-ai-fridgesec5-box-heading weaverz-ai-font-opensans">
                            {value.key[0].toUpperCase() + value.key.substring(1)}
                          </h5>
                          <p className="weaverz-ai-fridgesec5-box-pra weaverz-ai-font-opensans">{value.value}</p>
                        </div>
                      </div>
                    </div>
                  )
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

KeyfeaturesModule4.propTypes = {
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

KeyfeaturesModule4.defaultProps = {
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
  bgColor: "",
};
