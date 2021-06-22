import React from "react";
import propTypes from "prop-types";
import "./HeroModule1.Components.css";
function HeroComponent1(props) {
  const {
    name,
    brandName,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
  } = props;
  return (
    <>
      <section id="weaveroo-hero-module-1" className="weaverz-ai-mx-auto">
        <div className="weaverz-ai-container">
          <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12 md:weaverz-ai-order-1 sm:weaverz-ai-order-2 weaverz-ai-order-2">
              <div className="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden weaverz-ai-px-4 weaverz-ai-py-4">
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-py-4">
                  <img
                    src={logoImage}
                    srcSet={logoImageSrcSet}
                    sizes={logoImageSizes}
                    className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto sm:weaverz-ai-ml-3 md:weaverz-ai-ml-3"
                  />
                </div>
                <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-bg-gray-50 weaverz-ai-p-4 weaverz-mt-4 weaverz-ai-text-center sm:weaverz-ai-text-left">
                  <h4 className="weaverz-ai-stowe-subheading">{name}</h4>
                  <h2 className="weaverz-ai-stowe-subheading">{brandName}</h2>
                </div>
              </div>
            </div>

            <div className="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12 md:weaverz-ai-order-2 sm:weaverz-ai-order-1 weaverz-ai-order-1">
              <img
                src={heroImage}
                srcSet={heroImageSrcSet}
                sizes={heroImageSizes}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroComponent1;

HeroComponent1.propTypes = {
  name: propTypes.string.isRequired,
  brandName: propTypes.string.isRequired,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
};

HeroComponent1.defaultProps = {
  name: "Belling 444410789",
  brandName: "Belling",
  heroImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  heroImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,",
  logoImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png 193w,",
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 193) 100vw, 193px",
};
