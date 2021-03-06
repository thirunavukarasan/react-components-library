import React from "react";
import propTypes from "prop-types";
import "./HeroModule1_Cus.Components.css";
export const Hero1_Cus = (props) => {
  const {
    name,
    brandName,
    heroImage,
    logoImage,
    heroImageSrcSet,
    logoImageSrcSet,
    heroImageSizes,
    logoImageSizes,
    HeadingfontSize,
    textColor,
    bgColor,
    circleColor,
    heroImgRotation
  } = props;

  let styles = {
    circle: {
      "background-color": `${circleColor}`,
    },
    heroRotation : {
      "transform": `rotate(${heroImgRotation}deg)`,
    }
  }
  return (
    <>
      <section id="weaveroo-hero-module-1-Cus" className="weaverz-ai-mx-auto weaverz-ai-py-10" style={{backgroundColor: bgColor}}>
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
                  <h4 className="weaverz-ai-stowe-subheading" style={{fontSize: HeadingfontSize ? `${HeadingfontSize}px` :  "20px" , color: textColor}}>{name}</h4>
                  <h2 className="weaverz-ai-stowe-subheading" style={{fontSize: HeadingfontSize ? `${HeadingfontSize}px` :  "20px" , color: textColor}}>{brandName}</h2>
                </div>
              </div>
            </div>

            <div className="weaverz-ai-w-full sm:weaverz-ai-w-full md:weaverz-ai-w-6/12 lg:weaverz-ai-w-6/12 xl:weaverz-ai-w-6/12 md:weaverz-ai-order-2 sm:weaverz-ai-order-1 weaverz-ai-order-1 hero1_circle" style={styles.circle}>
              <img
                src={heroImage}
                srcSet={heroImageSrcSet}
                sizes={heroImageSizes}
                className="hero1_Img"
                style={styles.heroRotation}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Hero1_Cus.propTypes = {
  name: propTypes.string.isRequired,
  brandName: propTypes.string.isRequired,
  heroImage: propTypes.string.isRequired,
  logoImage: propTypes.string.isRequired,
  heroImageSrcSet: propTypes.string,
  logoImageSrcSet: propTypes.string,
  heroImageSizes: propTypes.string,
  logoImageSizes: propTypes.string,
  bgColor : propTypes.string,
  textColor:propTypes.string,
  HeadingfontSize: propTypes.number,
  circleColor : propTypes.string,
  heroImgRotation : propTypes.number,
};

Hero1_Cus.defaultProps = {
  name: "Belling 444410789",
  brandName: "Belling",
  heroImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/78d7725527a42b360940c5e471b84a3b/5c08571014b2314d028afb443c76951d/075a3e36a0a52dcbc568c05788e8a713/a9b7ba70783b617e9998dc4dd82eb3c5/536e798a6b4ff16f87e8fbebde347f50.png",
  logoImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
  heroImageSrcSet:
    "",
  logoImageSrcSet:
    "",
  heroImageSizes: "(max-widgth: 800) 100vw, 800px",
  logoImageSizes: "(max-widgth: 193) 100vw, 193px",
  textColor:"#393939",
  HeadingfontSize: 20,
  bgColor:"#ffffff",
  circleColor:"#ffb405",
  heroImgRotation: 325,
};
