import React from "react";
import propTypes from "prop-types";
import "./HeroModule8.Components.css";
import "./common.css";
export const Hero8 = (props) => {
  const {
    bgColor,
    brandName,
    name,
    tagLine,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
  } = props;

  let style = {
    bg: {
      "background-color": `${bgColor}`,
    },
  }
  return (
    <>
      <div id="weaveroo-hero-module-8">
        <div class="weaverz-ai-introducing-wrap weaverz-ai-relative weaverz-ai-bg-gray-300 weaverz-ai-overflow-hidden weaverz-ai-py-20 sm:weaverz-ai-text-center weaverz-ai-main-full-wrap weaverz-ai-mx-auto" style={style.bg}>
          <div class="weaverz-ai-container weaverz-ai-mx-auto">
            <div class="md:weaverz-ai-flex sm:weaverz-ai-block">
              <div class="md:weaverz-ai-w-2/5 sm:weaverz-ai-w-full weaverz-ai-pl-0">
                <img
                  src={logoImage}
                  srcSet={logoImageSrcSet}
                  sizes={logoImageSizes}
                  alt="productLogo"
                  class="weaverz-ai-img-auto weaverz-ai-logoimg"
                />
                <div class="weaverz-ai-mobile-content-area">
                  <h5 class="weaverz-ai-text-6xl weaverz-ai-text-black weaverz-ai-uppercase weaverz-ai-intro-heading weaverz-ai-font-light weaverz-ai-font-opensans">
                    Introducing
                  </h5>
                  <h6 class="weaverz-ai-text-5xl weaverz-ai-text-black weaverz-ai-font-semibold weaverz-ai-font-opensans weaverz-ai-introsub-heading">
                    {name}
                  </h6>
                  <p class="weaverz-ai-font-opensans">{tagLine}</p>
                </div>
              </div>
              <div class="md:weaverz-ai-w-3/5 sm:weaverz-ai-w-full right-55">
                <div class="weaverz-ai-introimg-sec">
                  <img
                    src={heroImage}
                    srcSet={heroImageSrcSet}
                    sizes={heroImageSizes}
                    alt="hero img"
                    class="weaverz-ai-img-auto weaverz-ai-introimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Hero8.propTypes = {
  bgColor: propTypes.string,
  name: propTypes.string.isRequired,
  tagLine: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
};

Hero8.defaultProps = {
  bgColor:"#ffb7008f",
  name: "Belling 444410789",
  tagLine: "Unisex Sports",
  heroImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/33e8075e9970de0cfea955afd4644bb2/ff4fbae330593439d46a6f0cafa879c7.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/18d8042386b79e2c279fd162df0205c8/cad3edf8f0fee9174da7fabc4f5e07e4.png",
  heroImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png 500w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/33e8075e9970de0cfea955afd4644bb2/ff4fbae330593439d46a6f0cafa879c7.png 535w,",
  logoImageSrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/18d8042386b79e2c279fd162df0205c8/cad3edf8f0fee9174da7fabc4f5e07e4.png 400w,",
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 400) 100vw, 400px",
};
