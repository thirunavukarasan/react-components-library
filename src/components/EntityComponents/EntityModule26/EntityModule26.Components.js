import React from "react";
import propTypes from "prop-types";
import "./EntityModule26.Common.css";

export const EntityModule26 = (props) => {
  const { text, entities, showCompId, bgColor,textColor} = props;
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
      <div id="weaveroo-entity-module-26">
        <div className="layout-bg" style={styles.bg}>
          <h1 className="topfeature4-h1 weaverz-ai-text-center" style={styles.textColor}>{text}</h1>
          {entities.length > 1
            ? entities.map((content, index) => {
                return (
                  <div
                    className="image-text-row weaverz-ai-mb-8 topfeature-4-bg"
                    key={index}
                    data-comp-id={showCompId}
                  >
                    <div className="weaverz-ai-row feature-card-4">
                      <div className="image-text features-4-card">
                        <div className="one">
                          <picture>
                            <source
                              srcSet={content.entitySrcSet}
                              sizes={content.entitySizes}
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
                        <div className="weaverz-ai-grid weaverz-ai-grid-cols-6">
                          <div className="weaverz-ai-grid-cus1 md:weaverz-ai-grid-cols-1 weaverz-ai-z-10 weaverz-ai-p-1 weaverz-ai-text-left">
                            <img
                              className="features-icon-4 weaverz-ai-h-20"
                              srcSet={""}
                              src={content.iconImage}
                              alt={content.iconImage}
                            />
                          </div>
                          <div className="md:weaverz-ai-grid-col-start-1 weaverz-ai-grid-cus2 md:weaverz-ai-col-span-5 weaverz-ai-text-left">
                            <span className="weaverz-ai-features4-h  sm:weaverz-ai-text-sm	 md:weaverz-ai-text-2xl  weaverz-ai-leading-snug">
                              {content.heading}
                            </span>
                          </div>
                        </div>
                        <div className="weaverz-ai-dark weaverz-ai-p-2">
                          <span className="weaverz-ai-text-center weaverz-ai-mt-2">
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

EntityModule26.propTypes = {
  text: propTypes.string,
  textColor: propTypes.string,
  showCompId: propTypes.bool,
  bgColor: propTypes.string,
  entities: propTypes.arrayOf(
    propTypes.shape({
      heading: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      entityImage: propTypes.string.isRequired,
      iconImage: propTypes.string,
      entitySrcSet: propTypes.string,
      entitySizes: propTypes.string,
    })
  ).isRequired,
};

EntityModule26.defaultProps = {
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
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
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
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
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
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
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
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
    },
  ],
  bgColor: "#f7f7f7",
  textColor:"#333333"
};
