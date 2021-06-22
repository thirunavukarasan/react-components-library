import React from "react";
import propTypes from "prop-types";
import "./DoubleEntityModule1.css";
export const DoubleEntityModule1 = (props) => {
  const { entitySet, showCompId } = props;
  return (
    <>
    <section id="weaveroo-DoubleEntity-module-1">
    <div className="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-two-productwhite-Section">
        <div className="weaverz-ai-container">
          {entitySet && entitySet.length === 2 ? (
            <div className="md:weaverz-ai-flex  sm:weaverz-ai-block">
              {entitySet.map((entityInfo,i) => {
                return (
                  <div
                    className={`md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full ${i === 0 ? "md:weaverz-ai-mr-4" : "md:weaverz-ai-ml-4"}`}
                    data-comp-id={showCompId ? "entityName" : ""}
                    key ={i}
                  >
                    <div className="weaverz-ai-productitems">
                      <img
                        src={entityInfo.entityImage}
                        srcSet={entityInfo.entitySrcSet}
                        sizes={entityInfo.entitySizes}
                        alt={entityInfo.name}
                        className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-FridgeSection10-productimg"
                      />
                      <div className="weaverz-ai-flex">
                        <div className="weaverz-ai-FridgeSection10-fridge-ico weaverz-ai-mx-auto">
                          <img
                            src={entityInfo.iconImage}
                            srcSet={entityInfo.iconSrcSet}
                            sizes={entityInfo.iconSizes}
                            alt={entityInfo.name}
                            className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-FridgeSection10-icon"
                          />
                        </div>
                        <div className="weaverz-ai-flex weaverz-ai-items-center">
                          <h5 className="weaverz-ai-font-opensans weaverz-ai-FridgeSection10-mainheading">
                            {entityInfo.heading}
                          </h5>
                        </div>
                      </div>
                      <p className="weaverz-ai-font-opensans weaverz-ai-FridgeSection10-pragraph">
                        {entityInfo.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
      
    </>
  );
};

DoubleEntityModule1.propTypes = {
  showCompId: propTypes.bool,
  entitySet: propTypes.arrayOf(
    propTypes.shape({
      entityImage: propTypes.string.isRequired,
      entitySrcSet: propTypes.string,
      entitySizes: propTypes.string,
      iconImage: propTypes.string.isRequired,
      iconSizes: propTypes.string,
      iconSrcSet: propTypes.string,
      heading: propTypes.number.isRequired,
      description: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};

DoubleEntityModule1.defaultProps = {
  showCompId: true,
  entitySet: [
    {
      name: "entiyname1",
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
    },
    {
      name: "entiyname2",
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
    },
  ],
};
