import React from "react";
import propTypes from "prop-types";
import "./EntityModule14.Common.css";
import "./EntityModule14.Components.css";
export const EntityModule14 = (props) => {
  const {
    heading,
    description,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    bgColor,
    textColor,
    logoImage,
    logoImageSrcSet,
    logoImageSizes,  
    HeadingfontSize,
    ParafontSize,
  } = props;
  let Heading = heading.split(" ")

  return (
    <>
      <div id="weaveroo-entity-module-14">
      <section class="weaver-ai-nike-shoe weaver-ai-p-0" data-comp-id={showCompId}>
          <div class="weaver-ai-container-fluid">
            <div class="weaver-ai-row weaver-ai-m-0">
              <div class="weaver-ai-col-xl-5 weaver-ai-col-lg-5 weaver-ai-col-sm-5 weaver-ai-grey-bg">
                <h2>
                  {Heading[0]}
                  <br></br>
                  {Heading[1]} <br></br>
                  {Heading.slice(2).join(" ")}
                </h2>
                <p style={{fontSize: ParafontSize ? `${ParafontSize}px` : "16px"}}>{description} </p>
                <div class="weaver-ai-nike-logo-center">
                  <img
                    src={logoImage}
                    srcSet={logoImageSrcSet}
                    sizes={logoImageSizes}
                    alt="logo img"
                    class="weaver-ai-nike-logo-centerimg"
                  />
                </div>
              </div>
              <div class="weaver-ai-col-xl-7 weaver-ai-col-lg-7 weaver-ai-col-sm-7 weaver-ai-shoe-bg">
                <img
                  src={entityImage}
                  srcSet={entitySrcSet}
                  sizes={entitySizes}
                  class="weaver-ai-shoe-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

EntityModule14.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  logoImage:propTypes.string,
  logoImageSrcSet: propTypes.string,
  logoImageSizes: propTypes.string,
  ParafontSize : propTypes.number
};

EntityModule14.defaultProps = {
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/eba0dc302bcd9a273f8bbb72be3a687b/ae7cb847e0a60793a5658916db44a17e.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/0078427e2f8c286fee11ef897add4cf1/075a3e36a0a52dcbc568c05788e8a713/eba0dc302bcd9a273f8bbb72be3a687b/ae7cb847e0a60793a5658916db44a17e.png 484w,",
  logoImage : "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/18d8042386b79e2c279fd162df0205c8/cad3edf8f0fee9174da7fabc4f5e07e4.png",
  logoImageSrcSet: "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/96d6f2e7e1f705ab5e59c84a6dc009b2/965b11a46418878a13732a04b3db07b3/18d8042386b79e2c279fd162df0205c8/cad3edf8f0fee9174da7fabc4f5e07e4.png 400w,",
  logoImageSizes: "(max-widgth: 400) 100vw, 400px",
  entitySizes: "(max-widgth: 484) 100vw, 484px",
  ParafontSize: 14
};
