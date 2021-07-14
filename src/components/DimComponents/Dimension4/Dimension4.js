import React from "react";
import propTypes from "prop-types";
import "./Dimension4.css";
export const DimensionModule4 = (props) => {
  const {
    heading,
    dimImg,
    dimSrcSet,
    dimSizes,
    sideImg,
    color,
    Height,
    Width,
    Depth,
  } = props;

  return (
    <>
      <section id="weaveroo-dimension-module-4">
      <div class="weaverz-ai-duble-fridge-section weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative">
        <div class="weaverz-ai-container">
          <div class="weaverz-ai-flex weaverz-ai-items-center">
            <div class="weaverz-ai-w-5/12 weaverz-ai-leftFridgeImg">
              <img
                src={sideImg}
                alt="dimension"
                class="weaverz-ai-object-contain"
              />
            </div>
            <div class="weaverz-ai-w-4/12 weaverz-ai-centerFridgeDesc">
              <div class="weaverz-ai-center-fridge-title text-center">
                <h4 class="weaverz-ai-font-opensans weaverz-ai-feature-heading">{heading}</h4>
              </div>
              <div class="md:weaverz-ai-flex sm:weaverz-ai-block">
                <div class="weaverz-ai-featureInfo">
                  <h6 class="weaverz-ai-red-text weaverz-ai-font-opensans">Colour</h6>
                  <p class="weaverz-ai-font-opensans">{color}</p>
                </div>
                <div class="weaverz-ai-featureInfo">
                  <h6 class="weaverz-ai-red-text weaverz-ai-font-opensans">Height</h6>
                  <p class="weaverz-ai-font-opensans">{Height}</p>
                </div>
                <div class="weaverz-ai-featureInfo">
                  <h6 class="weaverz-ai-red-text weaverz-ai-font-opensans">Width </h6>
                  <p class="weaverz-ai-font-opensans">{Width}</p>
                </div>
                <div class="weaverz-ai-featureInfo">
                  <h6 class="weaverz-ai-red-text weaverz-ai-font-opensans">Depth </h6>
                  <p class="weaverz-ai-font-opensans">{Depth}</p>
                </div>
              </div>
            </div>
            <div class="w-weaverz-ai-3/12 weaverz-ai-leftFridgeImg-right">
              <img
                sizes={dimSizes}
                srcSet={dimSrcSet}
                src={dimImg}
                alt="dimension"
                class="weaverz-ai-img-auto weaverz-ai-object-contain" />
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

DimensionModule4.propTypes = {
  heading: propTypes.string.isRequired,
  dimImg: propTypes.string.isRequired,
  dimSrcSet: propTypes.string,
  dimSizes: propTypes.string,
  sideImg: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  Height: propTypes.string.isRequired,
  Width: propTypes.string.isRequired,
  Depth: propTypes.string.isRequired,
};

DimensionModule4.defaultProps = {
  heading: "Unboxed Dimensions",
  dimImg:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/da11e8cd1811acb79ccf0fd62cd58f86/f89b7100685771ae5ff8cfc90d7855b7.png",
  dimSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/da11e8cd1811acb79ccf0fd62cd58f86/f89b7100685771ae5ff8cfc90d7855b7.png 1280w,",
  dimSizes: "(max-widgth: 800) 100vw, 800px",
  sideImg:
    "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",
  color: "Silver & black",
  Height: "900 mm",
  Width: "600 mm",
  Depth: "600 mm",
};
