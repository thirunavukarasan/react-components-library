import React from "react";
import propTypes from "prop-types";
import "./HeroModule9.Components.css";
export const Hero9 = (props) => {
  const {
    name,
    tagLine,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
  } = props;

  return (
    <>
      <div id="weaveroo-hero-module-9">
        <div
          className={`  weaverz-ai-grid lg:weaverz-ai-grid-cols-4 md:weaverz-ai-grid-cols-4 sm:weaverz-ai-grid-cols-3 header-row-height`}
        >
          <div className=" sm:weaverz-ai-col-start-2 md:weaverz-ai-col-start-3 weaverz-ai-col-span-2">
            <img
              id="header-image-logo"
              src={logoImage}
              srcSet={
                logoImageSrcSet
              }
              sizes={logoImageSizes}
              alt="photo1"
              style={{ width: "100%" }}
            />
            <span>
              <h6
                className={`weaverz-ai-font-bold weaverz-ai-font-cursive weaverz-ai-text-center`}
              >
                {name}
              </h6>
              <p
                className={`weaverz-ai-text-center weaverz-ai-font-Helvetica weaverz-ai-text-sm`}
              >
                {tagLine}
              </p>
            </span>
          </div>
          <div
            className={`weaverz-ai-col-start-1 weaverz-ai-col-span-2 weaverz-ai-order-first sm:weaverz-ai-order-first`}
          >
            <div>
              <img
                Class="header-image-div"
                src={heroImage}
                srcSet={
                  heroImageSrcSet
                }
                sizes={heroImageSizes}
                alt="photo2"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Hero9.propTypes = {
  name: propTypes.string.isRequired,
  tagLine: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
};

Hero9.defaultProps = {
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
