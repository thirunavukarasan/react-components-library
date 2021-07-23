import React from "react";
import propTypes from "prop-types";
import "./KeyfeaturesModule6.Components.css";
export const KeyfeaturesModule6 = (props) => {
  const { heading, keyfeatures, bgColor,textColor } = props;
  const styles = {
    bg: {
      backgroundColor: bgColor,
    },
    textColor: {
      color:textColor
    }
  };
  return (
    <>
      <section id="weaveroo-keyfeatures-module-6">
        <div className="container keysapect-bg" style={styles.bg}>
          <h2 className="weaverz-ai-text-center  keyaspect-hed-h1" style={styles.textColor}>
            {heading}
          </h2>
          <div className="weaverz-ai-grid keyaspect-div weaverz-ai-gap-x-32 weaverz-ai-pb-8  weaverz-ai-gap-y-4">
            {keyfeatures.map((element, index) => {
              return (
                <div
                  key={index}
                  className="weaverz-ai-grid weaverz-ai-grid-cols-4 weaverz-ai-w-full keyValue weaverz-ai-mb-4 "
                >
                  <div className="weaverz-ai-col-start-2 weaverz-ai-col-end-3">
                    <img
                      className="iconImg weaverz-ai-md:p-1	"
                      src={element.iconImage}
                      alt={element.key}
                    />
                  </div>
                  <div className="weaverz-ai-col-start-3 weaverz-ai-col-span-4">
                    <span className="weaverz-ai-key-value weaverz-ai-pl-2">
                      <h1 className="weaverz-ai-sm:text-sm" style={styles.textColor}>
                        {element.key[0].toUpperCase() +
                          element.key.substring(1)}
                      </h1>
                      <p style={styles.textColor}>{element.value}</p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

KeyfeaturesModule6.propTypes = {
  textColor: propTypes.string,
  bgColor: propTypes.string,
  heading: propTypes.string,
  keyfeatures: propTypes.arrayOf(
    propTypes.shape({
      iconImage: propTypes.string.isRequired,
      key: propTypes.number.isRequired,
      value: propTypes.number.isRequired,
    })
  ).isRequired,
};

KeyfeaturesModule6.defaultProps = {
  heading: "Overview",
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
  bgColor: "#f7f7f7",
  textColor:"#333333"
};
