import React from "react";
import propTypes from "prop-types";
import "./EntityModule25.Common.css";

export const EntityModule25 = (props) => {
  const { text, entities, showCompId, bgColor,textColor } = props;
  const styles = {
    bg: {
      background: bgColor,
    },
    textColor : {
      color:textColor
    }
  };
  return (
    <>
      <div id="weaveroo-entity-module-25">
        <div className="layout-bg" style={styles.bg}>
          <h1 className="topfeature4-h1 weaverz-ai-text-center" style={styles.textColor}>{text}</h1>

          {entities.length > 1
            ? entities.map((content, index) => {
                return (
                  <div
                    className="image-text-row weaverz-ai-mb-8 topfeature-4-bg"
                    data-comp-id={showCompId}
                  >
                    <div className="weaverz-ai-row feature-card-4" key={index}>
                      <div className="image-text features-4-card">
                        <div className="one">
                          <picture>
                            <source
                              sizes={content.entitySizes}
                              srcSet={content.entitySrcSet}
                            />
                            <img
                              className="card-image"
                              loading="eager"
                              sizes={content.entitySizes}
                              srcSet={content.entitySrcSet}
                              src={content.entityImage}
                              alt={content.entityImage}
                              style={{ width: "100%" }}
                            />
                          </picture>
                        </div>
                        <div className="weaverz-ai-dark weaverz-ai-p-2">
                          <span className="weaverz-ai-text-center weaverz-ai-mt-2">
                            <h3 className="weaverz-ai-text-left weaverz-ai-mb-2">
                              {content.heading}
                            </h3>
                            <p className="weaverz-ai-text-justify">
                              {content.description}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No Data Found"}
        </div>
      </div>
    </>
  );
};

EntityModule25.propTypes = {
  text: propTypes.string,
  textColor: propTypes.string,
  showCompId: propTypes.bool,
  bgColor: propTypes.string,
  entities: propTypes.arrayOf(
    propTypes.shape({
      heading: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      entityImage: propTypes.string.isRequired,
      entitySrcSet: propTypes.string,
      entitySizes: propTypes.string,
    })
  ).isRequired,
};

EntityModule25.defaultProps = {
  text: "Product Features",
  showCompId: true,
  entities: [
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
    {
      heading: "Save time with easy cleaning",
      description:
        "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
      entityImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      entitySrcSet:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w",
      entitySizes: "(max-widgth: 500) 100vw, 500px",
    },
  ],
  bgColor: "#f7f7f7",
  textColor:"#333333"
};
