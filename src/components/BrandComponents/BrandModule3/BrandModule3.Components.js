import React from "react";
import propTypes from "prop-types";
import "./BrandModule3.Components.scss";
export const BrandModule3 = (props) => {
  const {logo, text, productName, category } = props;
  return (
    <>
      <section
        id="weaveroo-brand-module-3"
        className="weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-layout lg:weaverz-ai-mt-12 sm:weaverz-ai-mt-0"
      >
        <div className="weaverz-ai-container">
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-text-center weaverz-ai-brand-section weaverz-ai-py-2.5 weaverz-ai-mb-4 sm:weaverz-ai-mb-4">
              <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center weaverz-ai-brand-items">
                <img
                  src={logo}
                  alt="productLogo"
                  className="weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-py-2 logo-img"
                />
                <h5>
                  {productName} {category}
                </h5>
                <h5>{text}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

BrandModule3.propTypes = {
  category: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

BrandModule3.defaultProps = {
  productName: "Grundig 7294846331",
  category: "Fridge Freezers",
  text: "Freshness all your life",
  logo:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png"
};
