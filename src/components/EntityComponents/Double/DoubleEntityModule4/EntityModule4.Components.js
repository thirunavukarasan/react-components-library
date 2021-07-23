import React from "react";
import propTypes from "prop-types";
import Card from "./Card/Card";
import "./EntityModule4.Common.css";

const renderCards = (props) => {
  const { text, entities, showCompId, bgColor } = props;
  if (props && props.cards) {
    if (entities && entities.length % 2 === 1) {
      entities = entities.slice(0, entities.length);
    }
  } else {
    if (entities && entities.length % 3 === 1) {
      entities = entities.slice(0, entities.length - 1);
    }
  }
  if (entities.length > 0) {
    return entities.map((item, i) => (
      <div
        key={i}
        className={`weaverz-ai-w-full sm:weaverz-ai-w-1/2 xl:weaverz-ai-w-1/${
          props.cards ? props.cards : 3
        } weaverz-ai-px-3 xl:weaverz-ai-px-6 weaverz-ai-py-5 card-box`}
        data-comp-id={showCompId}
      >
        <Card {...item} cardLength={props.cards} index={i} />
      </div>
    ));
  }
};

export const DoubleEntityModule4 = (props) => {
  const { text,bgColor,textColor } = props;
  const styles = {
    bg: {
      background: bgColor,
    },
    textColor:{
      color:textColor
    }
  };
  return (
    <>
      <div id="weaveroo-DoubleEntity-module-4">
        <div className="weaverz-ai-pt-6 weaverz-ai-overflow-hidden top-feature-1 weaverz-ai-mb-4" style={styles.bg}>
          <h1 className="weaverz-ai-text-center heading" style={styles.textColor}>{text}</h1>
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap">
            {renderCards(props)}
          </div>
        </div>
      </div>
    </>
  );
};

DoubleEntityModule4.propTypes = {
  cards: propTypes.number,
  text: propTypes.string,
  textColor:propTypes.string,
  showCompId: propTypes.bool,
  bgColor: propTypes.string,
  entities: propTypes.arrayOf(
    propTypes.shape({
      heading: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      entityImage: propTypes.string.isRequired,
      iconImage:propTypes.string,
      entitySrcSet: propTypes.string,
      entitySizes: propTypes.string,
    })
  ).isRequired,
};

DoubleEntityModule4.defaultProps = {
  cards: 2,
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
      iconImage:"https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png"
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
      iconImage:"https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png"
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
      iconImage:"https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png"

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
      iconImage:"https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/110f2392995da30fba7506a62eeabd4f/07214c6750d983a32e0a33da225c4efd/5e754fcfbbd155017b8cbf407d8ec9be/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png"
    },
  ],
  bgColor: "#f7f7f7",
  textColor:"#333333"
};
