import React from "react";
import propTypes from "prop-types";
import "./BrandModule1.Components.scss";
import bg from "../../../assets/ConsumerElectronics/BrandModule/triangle-bg.png";
export const BrandModule1 = (props) => {
  const { image, logo, text, productName, category } = props;

  const styles = {
    style1: {
      backgroundImage: `url(${bg})`,
    },
  };
  return (
    <>
      <section
        id="weaveroo-brand-module-1"
        className="weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-layout "
      >
        <div className="weaverz-ai-container">
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div
              className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12 weaverz-ai-text-center weaverz-ai-brand-section"
              style={styles.style1}
            >
              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center">
                <img
                  src={logo}
                  alt="productLogo"
                  className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto"
                />
                <h5>
                  {productName} {category}
                </h5>
                <h5>{text}</h5>
              </div>
            </div>
            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12 ">
              <img
                src={image}
                alt="side-image"
                className="weaverz-ai-brand-side-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

BrandModule1.propTypes = {
  category: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

BrandModule1.defaultProps = {
  productName: "Grundig 7294846331",
  category: "Fridge Freezers",
  text: "Freshness all your life",
  logo:"https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
    image:
    "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",
};
