import React from "react";
import propTypes from "prop-types";
import "./Dimension1.css";
export const DimensionModule1 = (props) => {
  const {
    heading,
    dimImg,
    dimSrcSet,
    dimSizes,
    sideImg,
    color,
    Height,
    Width,
    Depth
  } = props;
  return (
    <>
      <section
        id="weaveroo-dimension-module-1"
        className="weaverz-ai-mx-auto weaverz-ai-layout-wrap   weaverz-ai-bg-gray-50 weaverz-ai-p-4"
        >
        <div className="weaverz-ai-container">
          <div className="weaverz-ai-text-center">
            <h3 className="weaverz-ai-font-opensans weaverz-ai-feature-heading">
              {heading}
            </h3>
          </div>
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-4/12 lg:weaverz-ai-w-4/12 xl:weaverz-ai-w-4/12">
              <img
                src={sideImg}
                alt="dimension"
                className="weaverz-ai-dimension-img"
              />
            </div>

            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-3/12 lg:weaverz-ai-w-3/12 xl:weaverz-ai-w-3/12">
              <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4 weaverz-ai-text-center">
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h6 className="weaverz-ai-red-text weaverz-ai-font-opensans">
                    Colour
                  </h6>
                  <p className="weaverz-ai-font-opensans">{color}</p>
                </div>
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h6 className="weaverz-ai-red-text weaverz-ai-font-opensans">
                    Height
                  </h6>
                  <p className="weaverz-ai-font-opensans">{Height}</p>
                </div>
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h6 className="weaverz-ai-red-text weaverz-ai-font-opensans">
                    Width
                  </h6>
                  <p className="weaverz-ai-font-opensans">{Width}</p>
                </div>
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h6 className="weaverz-ai-red-text weaverz-ai-font-opensans">
                    Depth
                  </h6>
                  <p className="weaverz-ai-font-opensans">{Depth}</p>
                </div>
              </div>
            </div>
            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12">
              <img
                sizes={dimSizes}
                srcSet={dimSrcSet}
                src={dimImg}
                alt="dimension"
                className="weaverz-ai-dimension-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

DimensionModule1.propTypes = {
  heading: propTypes.string.isRequired,
  dimImg: propTypes.string.isRequired,
  dimSrcSet :  propTypes.string,
  dimSizes : propTypes.string,
  sideImg : propTypes.string.isRequired,
  color : propTypes.string.isRequired,
  Height : propTypes.string.isRequired,
  Width : propTypes.string.isRequired,
  Depth : propTypes.string.isRequired
};

DimensionModule1.defaultProps = {
  heading: "Unboxed Dimensions",
  dimImg: "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/da11e8cd1811acb79ccf0fd62cd58f86/f89b7100685771ae5ff8cfc90d7855b7.png",
  dimSrcSet :  "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/c37be74d84f98bd288693a6bbee7a334/075a3e36a0a52dcbc568c05788e8a713/da11e8cd1811acb79ccf0fd62cd58f86/f89b7100685771ae5ff8cfc90d7855b7.png 1280w,",
  dimSizes : "(max-widgth: 800) 100vw, 800px",
  sideImg : "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",
  color : "Silver & black",
  Height : "900 mm",
  Width : "600 mm",
  Depth : "600 mm"
};
