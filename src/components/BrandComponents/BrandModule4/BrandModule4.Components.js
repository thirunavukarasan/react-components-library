import React from "react";
import propTypes from "prop-types";
import "./BrandModule4.Components.css";
export const BrandModule4 = (props) => {
  const { logo, image, text } = props;
  return (
    <>
      <section id="weaveroo-brand-module-4">
        <div className="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-nine-earbudsBox-Section">
          <div className="weaverz-ai-container">
            <div className="md:weaverz-ai-flex weaverz-ai-items-center sm:weaverz-ai-block">
              <div className="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div className="weaverz-ai-airpods-lightlogo-bg">
                  <img
                    src={logo}
                    className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-airpods-lightlogo-img"
                  />
                </div>
                <h4 className="weaverz-ai-font-opensans weaverz-ai-earbudBox-SectionHeading">
                  {text}
                </h4>
              </div>
              <div className="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div className="weaverz-ai-center-view-img">
                  <img
                    src={image}
                    className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-max-width-auto  weaverz-ai-temp6-brand-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

BrandModule4.propTypes = {
  image: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

BrandModule4.defaultProps = {
  text: "Freshness all your life",
  image:
    "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",
  logo:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
};
