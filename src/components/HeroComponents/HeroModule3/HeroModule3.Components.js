import React from "react";
import propTypes from "prop-types";
import "./HeroModule3.Components.css";
import img1 from "../../../assets/ConsumerElectronics/HeroModule/HeroModule3/top-bannergb.png";

export const Hero3 = (props) => {
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
    fontColor
  } = props;

  let styles = {
    section:{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: bgColor
    },
    font:{
      color:fontColor
    }

  }

  return (
    <>
      <section
        id="weaveroo-hero-module-3"
        className="weaverz-ai-mx-auto"
        style={styles.section}
      >
        <div className="weaverz-ai-container">
          <div className="md:weaverz-ai-flex sm:weaverz-ai-block">
            <div className="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full">
              <div className="weaverz-ai-sony-banner-leftarea">
                <img
                  src={logoImage}
                  srcSet={logoImageSrcSet}
                  sizes={logoImageSizes}
                  alt="productLogo"
                  className="weaverz-ai-img-auto weaverz-ai-object-contain"
                />
                <h2 className="weaverz-ai-font-opensans weaverz-ai-sony-heading" style={styles.font}>
                  {name}
                </h2>
              </div>
            </div>
            <div className="md:weaverz-ai-w-6/12 sm:weaverz-ai-w-full weaverz-ai-ml-auto">
              <div className="weaverz-ai-sony-banner-white-circle">
                <img
                  src={heroImage}
                  srcSet={heroImageSrcSet}
                  sizes={heroImageSizes}
                  className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto weaverz-ai-relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Hero3.propTypes = {
  name: propTypes.string.isRequired,
  bgColor: propTypes.string,
  fontColor: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
  backgroundImage: propTypes.string
};

Hero3.defaultProps = {
  name: "Belling 444410789",
  bgColor : "#F5F5F5",
  fontColor:"#000000",
  heroImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  heroImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/7a53928fa4dd31e82c6ef826f341daec/8ba6ebc7ab236987feeb1b2fc82b72b9.png 800w,https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png 1000w,",
  logoImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png 193w,",
  backgroundImage : `${img1}`,
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 193) 100vw, 193px"
};
