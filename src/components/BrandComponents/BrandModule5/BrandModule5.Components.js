import React from "react";
import propTypes from "prop-types";
import "./BrandModule5.Components.css";
export const BrandModule5 = (props) => {
  const { logo, image, text, backgroundImage } = props;
  return (
    <>
      <section id="weaveroo-brand-module-5">
        <div class="weaverz-ai-centerview-wrap weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-relative">
          <div class="weaverz-ai-container">
            <div class="md:weaverz-ai-flex sm:weaverz-ai-block weaverz-ai-items-center weaverz-ai-relative">
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
                <div class="weaverz-ai-center-view-img">
                  <img
                    src={image}
                    class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-max-width-auto"
                  />
                </div>
              </div>
              <div class="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-bottom-bg-LeftPartInr">
                <div class="weaverz-ai-bottom-bg-LeftPart">
                  <img
                    src={logo}
                    alt="productLogo"
                    class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-max-width-auto weaverz-ai-bottom-Logo-part"
                  />
                </div>
                <h4 class="weaverz-ai-centerview-heading weaverz-ai-font-opensans">
                  {text}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

BrandModule5.propTypes = {
  image: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  backgroundImage: propTypes.string
};

BrandModule5.defaultProps = {
  text: "Freshness all your life",
  image:
    "https://weaver-ai-template-syndication-poc.s3.ap-south-1.amazonaws.com/static/electric_ceramic_2-4d0f52657ecd685661ae7e4e8f233284.png",
  logo:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  backgroundImage: "",
};
