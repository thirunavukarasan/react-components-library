import React from "react";
import propTypes from "prop-types";
import "./HeroModule7.Components.css";
import background from "../../../assets/ConsumerElectronics/HeroModule/HeroModule7/kenwood-top-banner2.png";

export const Hero7 = (props) => {
  const {
    heroImage,
    heroImageSrcSet,
    heroImageSizes,
    logoImage,
    logoImageSizes,
    logoImageSrcSet,
    name,
    backgroundImage,
    bgColor,
    fontColor,
    category,
  } = props;

  let style = {
    vector: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      backgroundPositionX: `550px`,
      backgroundColor: bgColor,
    },
    font: {
      color: fontColor,
    },
  };

  return (
    <>
      <section id="weaveroo-hero-module-7">
        <div
          className="weaverz-ai-top-kenwood-section weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative"
          style={style.vector}
        >
          <div className="weaverz-ai-container">
            <div className="weaverz-ai-flex weaverz-ai-items-center">
              <div className="weaverz-ai-w-1/3">
                <img
                  src={heroImage}
                  srcSet={heroImageSrcSet}
                  sizes={heroImageSizes}
                  alt="hero img"
                  className=" weaverz-ai-object-cover weaverz-ai-img-top-kenwood-img weaverz-ai-position-center weaverz-ai-p-2"
                />
              </div>
              <div className="weaverz-ai-w-1/3">
                <img
                  src={logoImage}
                  srcSet={logoImageSrcSet}
                  sizes={logoImageSizes}
                  alt="productLogo"
                  className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-xs-pt-30 weaverz-ai-img-top-centerlogo-img"
                />
              </div>
              <div className="weaverz-ai-w-1/3">
                <h4 className="weaverz-ai-top-heading weaverz-ai-font-opensans">
                  {name}
                  <br></br>
                  {category}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Hero7.propTypes = {
  name: propTypes.string.isRequired,
  category: propTypes.string,
  bgColor: propTypes.string,
  fontColor: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
  backgroundImage: propTypes.string,
};

Hero7.defaultProps = {
  name: "Belling 444410789",
  category: "Fridge Freezers",
  bgColor: "#FFFFFF",
  fontColor: "#000000",
  heroImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  heroImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,",
  logoImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png 193w,",
  backgroundImage: `${background}`,
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 193) 100vw, 193px",
};
