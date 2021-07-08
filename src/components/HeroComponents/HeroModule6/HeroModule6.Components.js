import React from "react";
import propTypes from "prop-types";
import "./HeroModule6.Components.css";
import background from "../../../assets/ConsumerElectronics/HeroModule/HeroModule6/fridge-section1-stripebg.png";
export const Hero6 = (props) => {
  const {
    heroImage,
    heroImageSrcSet,
    heroImageSizes,
    logoImage,
    logoImageSizes,
    logoImageSrcSet,
    name,
    brandName,
    backgroundImage,
    bgColor,
    fontColor,
    dominantColor,
  } = props;

  let style = {
    bg: {
      background: `${
        dominantColor
          ? dominantColor
          : `linear-gradient(to right top, #2a2025, #393138, #48444b, #59575e, #6a6b71, #6a6c71, #6a6d71, #6a6e71, #585c5e, #474b4d, #373b3b, #282b2b);`
      }`,

      backgroundColor: bgColor,
    },
    vector: {
      backgroundImage: `url(${backgroundImage})`,
    },
    font: {
      color: fontColor,
    },
  };

  return (
    <>
      <section id="weaveroo-hero-module-6">
        <div
          className="weaverz-ai-layout weaverz-ai-mx-auto weaverz-ai-relative weaverz-ai-FridgeSection1"
          style={style.bg}
        >
          <div className="weaverz-ai-container">
            <div className="md:weaverz-ai-flex sm:weaverz-ai-block">
              <div className="md:weaverz-ai-w-7/12 sm:weaverz-ai-w-full">
                <div
                  className="weaverz-ai-FridgeSection1-stipelineimg"
                  style={style.vector}
                >
                  <div className="weaverz-ai-FridgeSection1-circle">
                    <img
                      src={heroImage}
                      srcSet={heroImageSrcSet}
                      sizes={heroImageSizes}
                      alt="hero"
                      className="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-FridgeSection1-img"
                    />
                  </div>
                </div>
              </div>
              <div className="md:weaverz-ai-w-5/12 sm:weaverz-ai-w-full">
                <div className="weaverz-ai-FridgeSection1-titlegroup">
                  <h4 className="weaverz-ai-FridgeSection1-mainheading weaverz-ai-font-opensans">
                    {brandName}{" "}
                  </h4>
                  <h6
                    className="weaverz-ai-FridgeSection1-subheading"
                    style={style.font}
                  >
                    {name}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Hero6.propTypes = {
  name: propTypes.string.isRequired,
  brandName : propTypes.string,
  bgColor: propTypes.string,
  fontColor: propTypes.string,
  dominantColor: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
  backgroundImage: propTypes.string,
};

Hero6.defaultProps = {
  name: "Belling 444410789",
  brandName:"Belling",
  bgColor: "#FFFFFF",
  fontColor: "#000000",
  dominantColor: "#FFFFFF",
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
