import React from "react";
import propTypes from "prop-types";
import "./BrandModule6.Components.css";
export const BrandModule6 = (props) => {
  const {imageSrc, text } = props;
  return (
    <>
      <section id="weaveroo-brand-module-6">
        <div className="container">
          <div className="weaverz-ai-relative weaverz-ai-rounded-md weaverz-ai-overflow-hidden banner-container">
            <h1 className="weaverz-ai-text-center add-top-margin weaverz-ai-font-bold">
              {text}
            </h1>
              <img
                loading="eager"
                className="hero-image"
                src={imageSrc}
                alt={'lifestyle'}
                style={{ width: "100%", objectFit: "contain" }}
              />
            <div className="weaverz-ai-absolute weaverz-ai-inset-0"></div>
          </div>
        </div>
      </section>
    </>
  );
};

BrandModule6.propTypes = {
  imageSrc: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

BrandModule6.defaultProps = {
  text: "Freshness all your life",
  imageSrc:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/8b9cbbe62a38988e01794751cf3b5e6e/78d7725527a42b360940c5e471b84a3b/417f65136c4a36242e9b47ff60b25895/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.jpeg",
};
