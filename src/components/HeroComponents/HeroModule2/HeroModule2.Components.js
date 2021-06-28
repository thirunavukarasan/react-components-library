import React from "react";
import propTypes from "prop-types";
import "./HeroModule2.Components.css";
import "./common.css";
export const Hero2 = (props) => {
  const {
    vectorImg,
    circleColor,
    bgColor,
    brandName,
    name,
    tagLine,
    heroImgRotation,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
  } = props;
    let style = {
    vector: {
      backgroundImage: `url(${vectorImg})`,
      "background-repeat": `no-repeat`,
      "background-position": `center`,
      "background-position-y": `-65px`,
      "background-color": `${bgColor}`,
    },
    circle: {
      "background-color": `${circleColor}`,
    },
    heroRotation : {
      "transform": `rotate(${heroImgRotation}deg)`,
    }
  }
  return (
    <>
    <div id="weaveroo-hero-module-2">
    <section class="weaver-ai-top-banner" style={style.vector}>
        <div class="weaver-ai-container">
          <div class="weaver-ai-top-heading">
            <h5 class="weaver-ai-top-head">{brandName}</h5>
            <h6 class="weaver-ai-top-sub">{name}</h6>
          </div>
          <div class="weaver-ai-row">
            <div class="weaver-ai-col-lg-12 weaver-ai-hero-img-bg" style={style.circle}>
              <img
                src={heroImage}
                srcSet={heroImageSrcSet}
                sizes={heroImageSizes}
                alt="hero img"
                class="weaver-ai-img-responsive weaver-ai-img-fluid"
                style = {style.heroRotation}
              />
            </div>
          </div>
          <div class="weaver-ai-top-banner-logo">
            <img
              src={logoImage}
              srcSet={logoImageSrcSet}
              sizes={logoImageSizes}
              alt="productLogo"
              class="weaver-ai-top-logoimg weaver-ai-img-fluid"
            />
          </div>
          <div class="weaver-ai-bottom-heading">
            <h6 class="weaver-ai-bottom-sub">{tagLine}</h6>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

Hero2.propTypes = {
  vectorImg: propTypes.string,
  circleColor : propTypes.string,
  bgColor: propTypes.string,
  brandName: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tagLine: propTypes.string, 
  heroImgRotation : propTypes.number,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
};

Hero2.defaultProps = {
  vectorImg : "http://weaver-ai-template-syndication-poc.s3-website.ap-south-1.amazonaws.com/static/top-home-bannerbg3-f8f45f4a1a0dd306d43e07cdd51e075e.png",
  circleColor : "#ffb405",
  bgColor : "#E2E2E2",
  name: "Belling 444410789",
  brandName: "Nike",
  tagLine: "Unisex Sports",
  heroImgRotation: 325,
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
