import React from "react";
import propTypes from "prop-types";
import "./Dimension5.css";
export const DimensionModule5 = (props) => {
  const {
    orientation,
    dimImg,
    dimSrcSet,
    dimSizes,
    color,
    Height,
    Width,
    Depth,
  } = props;

  let firstorder = "";
  let secondorder = "";
  if (orientation === "l") {
    firstorder = "first order1";
    secondorder = "second order2";
  } else {
    firstorder = "first order2";
    secondorder = "second order1";
  }

  return (
    <>
      <div id="weaveroo-dimension-module-5">
        <div className="container">
          <h1 className="weaverz-ai-text-center  add-top-margin weaverz-ai-font-bold">
            Dimensions
          </h1>

          <div className="measurement-container">
            <div className={`${firstorder}`}>
              <table>
                <tbody>
                  <tr>
                    <td className="dim-key">Colour</td>
                    <td className="dim-value">{color}</td>
                  </tr>
                  <tr>
                    <td className="dim-key">Height</td>
                    <td className="dim-value">{Height}</td>
                  </tr>
                  <tr>
                    <td className="dim-key">Width</td>
                    <td className="dim-value">{Width}</td>
                  </tr>
                  <tr>
                    <td className="dim-key">Depth</td>
                    <td className="dim-value">{Depth}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`${secondorder} `}>
              <img
                className="product-image-right"
                sizes={dimSizes}
                srcSet={dimSrcSet}
                src={dimImg}
                alt="dimension"
                style={{ width: "100%" }}
              />
              {/* <picture>
              <source srcSet={imageURL.srcSet} sizes={imageURL.sizes} />

            </picture> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DimensionModule5.propTypes = {
  orientation: propTypes.string,
  dimImg: propTypes.string.isRequired,
  dimSrcSet: propTypes.string,
  dimSizes: propTypes.string,
  color: propTypes.string.isRequired,
  Height: propTypes.string.isRequired,
  Width: propTypes.string.isRequired,
  Depth: propTypes.string.isRequired,
};

DimensionModule5.defaultProps = {
  orientation: "l",
  dimImg:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/9670439e51735d9054f34edc3a9b1067/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png",
  dimSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/9670439e51735d9054f34edc3a9b1067/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/9670439e51735d9054f34edc3a9b1067/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/9670439e51735d9054f34edc3a9b1067/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/9670439e51735d9054f34edc3a9b1067/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,",
  dimSizes: "(max-widgth: 800) 100vw, 800px",
  color: "Silver & black",
  Height: "333 mm",
  Width: "553 mm",
  Depth: "63 mm",
};
