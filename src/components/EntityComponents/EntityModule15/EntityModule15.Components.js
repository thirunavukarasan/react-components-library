import React from "react";
import propTypes from "prop-types";
import "./EntityModule15.Common.css";
import "./EntityModule15.Components.css";
import wave2 from "../../../assets/Shoes/wave-img2.png";
import wave3 from "../../../assets/Shoes/wave-img3.png";
import wave4 from "../../../assets/Shoes/wave-img4.png";
import wave5 from "../../../assets/Shoes/wave-img5.png";
export const EntityModule15 = (props) => {
  let images = [wave2, wave3, wave4, wave5];
  const {
    name,
    entityImage,
    entitySrcSet,
    entitySizes,
    showCompId,
    keyfeatures,
    bgColor,
    textColor,
    HeadingfontSize,
    ParafontSize,
  } = props;
  const styles = {
    wave: {
      backgroundImage: `url(${
        images[Math.floor(Math.random() * images.length)]
      })`,
      "background-repeat": `no-repeat`,
    },
    bg: {
      backgroundColor: bgColor,
    },
    textColor:{
      color:textColor
    }
  };
  return (
    <>
      <div id="weaveroo-entity-module-15">
        <section
          class="weaver-ai-hyrid-shoe weaver-ai-feature-shoe"
          data-comp-id={showCompId}
        >
          <div class="weaver-ai-container">
            <div
              class="weaver-ai-row weaver-ai-align-items-center weaver-ai-blackbg"
              style={styles.bg}
            >
              <h2 class="weaver-ai-black-heading">{name}</h2>
              <div class="weaver-ai-col-xl-5 weaver-ai-col-lg-5 weaver-ai-col-sm-5">
                <div class="weaver-ai-feature-img">
                  <img
                    src={entityImage}
                    srcSet={entitySrcSet}
                    sizes={entitySizes}
                    class="weaver-ai-hyrid-img weaverz-ai-mx-auto"
                  />
                </div>
              </div>
              <div class="weaver-ai-col-xl-7 weaver-ai-col-lg-7 weaver-ai-col-sm-7 weaver-ai-pt-0 weaver-ai-mt-0 weaver-ai-pl-0 weaver-ai-mt-top40">
                <div class="weaver-ai-finest-keyfeature-group">
                  <h4 class="weaver-ai-finest-keyfeatureheading" style={styles.textColor}>
                    Key Features
                  </h4>
                  <div class="weaver-ai-row">
                    {keyfeatures.map((data) => {
                      return (
                        <div class="weaver-ai-col-6" key={data.value}>
                          <div class="weaver-ai-finest-keyfeature-item flex">
                            <div class="weaver-ai-finest-keyfeature-icon">
                              <img
                                src={data.iconImage}
                                class="weaver-ai-finest-keyimg"
                              />
                            </div>
                            <div class="weaver-ai-finest-keyfeature-contentgroup">
                              <h5 class="weaver-ai-finest-key-heading" style={styles.textColor}>
                                {data.key}
                              </h5>
                              <p class="weaver-ai-finest-key-pragraph" style={styles.textColor}>
                                {data.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section
            class="weaver-ai-wave-img-sec weaver-ai-p-0"
            style={styles.wave}
          ></section>
        </section>
      </div>
    </>
  );
};

EntityModule15.propTypes = {
  name: propTypes.string,
  entityImage: propTypes.string,
  showCompId: propTypes.bool,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
  textColor: propTypes.string,
  bgColor: propTypes.string,
  HeadingfontSize: propTypes.number,
  ParafontSize: propTypes.number,
  keyfeatures: propTypes.arrayOf(
    propTypes.shape({
      iconImage: propTypes.string.isRequired,
      key: propTypes.number.isRequired,
      value: propTypes.number.isRequired,
    })
  ).isRequired,
};

EntityModule15.defaultProps = {
  name: "Asics Gel Lyte Iii",
  showCompId: true,
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/0584ce565c824b7b7f50282d9a19945b/6c64afc8fb24b3838bc9403c5ef2f860.png",
  entitySrcSet:
    "https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/d6baf65e0b240ce177cf70da146c8dc8/5f2255c585c1873f476eca7ae0767178.png 264w,https://d2zymw45q71xpy.cloudfront.net/static/f58dae047fe3510d05daf227bfb7f932/6eb0ce85b08449fa2e8e9460a2baf494/07214c6750d983a32e0a33da225c4efd/2ac88e4b3f1842bb6132d325b12f1a3c/075a3e36a0a52dcbc568c05788e8a713/0584ce565c824b7b7f50282d9a19945b/6c64afc8fb24b3838bc9403c5ef2f860.png 384w,",
  entitySizes: "(max-widgth: 384) 100vw, 384px",
  bgColor: "#1a191",
  textColor: "#ffffff",
  keyfeatures: [
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/296cc9a02b167493f6ff885c48ca71ff/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Colour",
      value: "Silver & black",
    },
    {
      iconImage:
        "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/737b2c334fb4777acc6dda63c3a5dfe7/782b37c01675f1869de8d6eb2db1656e/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
      key: "Hob type",
      value: "Electric ceramic",
    },
  ],
};
