import React from "react";
import propTypes from "prop-types";
import "./HeroModule10.Components.css";
import "./Hero10.common.css"
export const Hero10 = (props) => {
  const {
    name,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
    layout,
    panel,
    category,
  } = props;

  const topLayout =
    layout === "top" ? (
      <div className="header-container">
        <div className="brandlogo">
          <img src={logoImage} alt={logoImage} />
        </div>
      </div>
    ) : (
      ""
    );

  const panelView =
    panel === "left-right" ? (
      <div className="weaverz-ai-flex product-banner pattern-1 weaverz-ai-py-2  weaverz-ai-border-b-2 weaverz-ai-border-fuchsia-600">
        <div className="weaverz-ai-w-full md:weaverz-ai-w-2/3 lg:weaverz-ai-w-2/3 xl:weaverz-ai-w-2/3">
          {logoImage ? (
            <>
              <div
                className={
                  layout !== "top" ? "product-logo-box" : "product-description"
                }
              >
                {layout !== "top" ? (
                  <img
                    className="product-logo"
                    src={logoImage}
                    alt={logoImage}
                    style={{ marginBottom: 0 }}
                  />
                ) : (
                  ""
                )}
                <h1
                  className={
                    layout !== "top"
                      ? "h1-cus-sytle weaverz-ai-leading-snug"
                      : "product-name product-name-color"
                  }
                >
                  {name}
                  <span> {category}</span>
                </h1>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="md:weaverz-ai-w-1/2 lg:weaverz-ai-w-1/3 xl:weaverz-ai-w-1/3 product-hero-box">
          <img
            className="product-image-2x weaverz-ai-float-right productImageHeight"
            src={heroImage}
            alt={name}
          />
        </div>
      </div>
    ) : (
      <div className="weaverz-ai-flex product-banner pattern-2 weaverz-ai-py-2">
        <div className="weaverz-ai-w-full md:weaverz-ai-w-1/3	 lg:weaverz-ai-w-1/3	 xl:weaverz-ai-w-1/3">
          <img
            className="product-image-2x weaverz-ai-float-left productImageHeight"
            src={heroImage}
            alt={name}
          />
        </div>
        <div className="weaverz-ai-w-full md:weaverz-ai-w-2/3 lg:weaverz-ai-w-2/3 xl:weaverz-ai-w-2/3">
          {logoImage ? (
            <>
              <div
                className={
                  layout !== "top" ? "product-logo-box" : "product-description"
                }
              >
                {layout !== "top" ? (
                  <img
                    className="product-logo"
                    src={logoImage}
                    alt={logoImage}
                    style={{ "margin-bottom": 0 }}
                  />
                ) : (
                  ""
                )}
                <h1
                  className={
                    layout !== "top"
                      ? "h1-cus-sytle weaverz-ai-leading-snug"
                      : "product-name product-name-color"
                  }
                >
                  {name}
                  <span> {category}</span>
                </h1>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );

  return (
    <>
      <div id="weaveroo-hero-module-10">
        {topLayout}
        {panelView}
      </div>
    </>
  );
};

Hero10.propTypes = {
  name: propTypes.string.isRequired,
  category: propTypes.string,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
  layout: propTypes.string,
  panel: propTypes.string,
};

Hero10.defaultProps = {
  layout: "side",
  panel: "left-right",
  name: "Belling 444410789",
  category: "category1",
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
