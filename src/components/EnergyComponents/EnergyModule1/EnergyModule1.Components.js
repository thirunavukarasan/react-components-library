import React from "react";
import propTypes from "prop-types";
import "./EnergyModule1.Components.scss";
export const EnergyModule1 = (props) => {
  const { logo, image, heading, energyRating, keyfeatures } = props;
  return (
    <>
      <>
        <section
          id="weaveroo-energy-module-1"
          class="weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-layout lg:weaverz-ai-mt-12 sm:weaverz-ai-mt-0"
        >
          <div class="weaverz-ai-container">
            <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
              <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12 ">
                <img
                  src={image}
                  alt="dimension"
                  class="weaverz-ai-energy-side-image"
                />
              </div>

              <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-4/12 lg:weaverz-ai-w-4/12 xl:weaverz-ai-w-4/12 weaverz-ai-p-4">
                <div class="weaverz-ai-m-auto">
                  <img
                    src={logo}
                    alt="productLogo"
                    class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-m-auto  weaverz-ai-mr-auto weaverz-ai-energy-logo"
                  />
                  <h5 class="weaverz-ai-font-opensans weaverz-ai-heading weaverz-ai-text-center ">
                    {heading}
                  </h5>
                  <div class="weaverz-ai-flex weaverz-ai-value-group weaverz-ai-m-auto ">
                    <ul class="weaverz-ai-energy-steps weaverz-ai-w-full sm:weaverz-ai-w-6/12 lg:weaverz-ai-w-8/12">
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-1">
                        <a href="#" class="weaverz-ai-font-opensans">
                          A
                        </a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-2">
                        <a class="weaverz-ai-font-opensans">B</a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-3">
                        <a class="weaverz-ai-font-opensans">C</a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-4">
                        <a class="weaverz-ai-font-opensans">D</a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-5">
                        <a class="weaverz-ai-font-opensans">E</a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-6">
                        <a class="weaverz-ai-font-opensans">F</a>
                      </li>
                      <li class="weaverz-ai-energy-value-items weaverz-ai-energy-value-color-7">
                        <a class="weaverz-ai-font-opensans">G</a>
                      </li>
                    </ul>
                    <ul class="weaverz-ai-energy-steps-right weaverz-ai-w-4/12">
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-a"
                        hidden={energyRating !== "A"}
                      >
                        <span class="weaverz-ai-font-opensans">A</span>
                      </li>
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-b"
                        hidden={energyRating !== "B"}
                      >
                        <span class="weaverz-ai-font-opensans">B</span>
                      </li>

                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-c"
                        hidden={energyRating !== "C"}
                      >
                        <span class="weaverz-ai-font-opensans">C</span>
                      </li>
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-d"
                        hidden={energyRating !== "D"}
                      >
                        <span class="weaverz-ai-font-opensans">D</span>
                      </li>
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-top-e"
                        hidden={energyRating !== "E"}
                      >
                        <span class="weaverz-ai-font-opensans">E</span>
                      </li>
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-f"
                        hidden={energyRating !== "F"}
                      >
                        <span class="weaverz-ai-font-opensans">F</span>
                      </li>
                      <li
                        class="weaverz-ai-energy-value-items weaverz-ai-energy-color-white weaverz-ai-energy-value-g"
                        hidden={energyRating !== "G"}
                      >
                        <span class="weaverz-ai-font-opensans">G</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-3/12 lg:weaverz-ai-w-3/12 xl:weaverz-ai-w-3/12">
                <h5 class="weaverz-ai-font-opensans weaverz-ai-heading-energy weaverz-ai-text-center weaverz-ai-my-4 md:weaverz-ai-my-9 weaverz-ai-mx-auto">
                  Energy Features
                </h5>

                <div class="">
                  <div class="weaverz-ai-flex weaverz-ai-flex-wrap">
                    {keyfeatures.length ? (
                      keyfeatures.map((attr) => {
                        console.log("key length", keyfeatures.length);
                        return (
                          <div
                            class={`weaverz-ai-energy-key-feature ${
                              keyfeatures.length &&
                              keyfeatures.length === 1
                                ? "weaverz-ai-w-full"
                                : "weaverz-ai-w-6/12"
                            }`}
                          >
                            <div class="weaverz-ai-energy-key-feature-icon">
                              {" "}
                              <img
                                src={attr.iconImage}
                                alt={attr.key}
                                class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-mx-auto"
                              />
                            </div>
                            <h5>
                              {attr.key[0].toUpperCase() +
                                attr.key.substring(1)}
                            </h5>

                            <p class="weaverz-ai-font-opensans weaverz-ai-key-value">
                              {attr.value}
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

EnergyModule1.propTypes = {
  heading: propTypes.string,
  image: propTypes.string,
  energyRating: propTypes.string.isRequired,
  logo: propTypes.string.isRequired,
  keyfeatures: propTypes.arrayOf(
    propTypes.shape({
      iconImage: propTypes.string.isRequired,
      key: propTypes.number.isRequired,
      value: propTypes.number.isRequired,
    })
  ).isRequired,
};

EnergyModule1.defaultProps = {
  energyRating: "A",
  heading: "Key Features",
  image:
    "http://weaver-ai-template-syndication-poc.s3-website.ap-south-1.amazonaws.com/static/energy-leftimg-1025344f6331c2c5589f5231cc6406e5.png",
  logo:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/96d6f2e7e1f705ab5e59c84a6dc009b2/d2b298a9d3257189d9047cdcd304715b/bd686fd640be98efaae0091fa301e613/114d7c5b964255ba1e2763837240e087.png",
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
  ],
};
