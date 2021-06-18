import React from "react";
import propTypes from "prop-types";
import "./Entity.Components.css";
function EntityComponent1({
  heading,
  description,
  iconImage,
  entityImage,
  orientation,
  showCompId
}) {
  return (
    <>
      <section id="weaverz-ai-double-entity" class=" weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-bg-gray-50 lg:weaverz-ai-mt-12 sm:weaverz-ai-mt-0" hidden={orientation === 'r'}  data-comp-id={showCompId ? "entityName" : ''}>
        <div class="weaverz-ai-container">
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">

            <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12 weaverz-ai-bg-black ">
              <img src={entityImage}
                // srcSet={data?.images?.imageSet?.small?.srcSet}
                // sizes={data?.images?.imageSet?.small?.sizes} 
                class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-kitchen-img" />
            </div>

            <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-7/12 lg:weaverz-ai-w-7/12 xl:weaverz-ai-w-7/12">
              <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <img
                    src={iconImage}
                    // srcSet={data?.icon?.imageSet?.srcSet}
                    // sizes={data?.icon?.imageSet?.sizes}
                    class="weaverz-ai-h-16"
                  />
                </div>
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h4 class="weaverz-ai-font-opensans weaverz-ai-stowe-subheading">
                    {heading}
                  </h4>
                </div>
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <p class="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="weaverz-ai-double-entity-2" class=" weaverz-ai-mx-auto weaverz-ai-layout-wrap weaverz-ai-bg-gray-50 lg:weaverz-ai-mt-12 sm:weaverz-ai-mt-0" hidden={orientation === 'l'}  data-comp-id={showCompId ? "entityName" : ''}>
        <div class="weaverz-ai-container">
          <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
            <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden weaverz-ai-self-center sm:weaverz-ai-w-full md:weaverz-ai-w-7/12 lg:weaverz-ai-w-7/12 xl:weaverz-ai-w-7/12 md:weaverz-ai-order-1 sm:weaverz-ai-order-2 weaverz-ai-order-2">
              <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden xl:weaverz-ai-px-20 md:weaverz-ai-px-12 sm:weaverz-ai-px-8 weaverz-ai-px-4 weaverz-ai-py-4">
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <img
                    src={iconImage}
                    // srcSet={data?.icon?.imageSet?.srcSet}
                    // sizes={data?.icon?.imageSet?.sizes}
                    class="weaverz-ai-h-16"
                  />
                </div>
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <h4 class="weaverz-ai-font-opensans weaverz-ai-stowe-subheading">
                    {heading}
                  </h4>
                </div>
                <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden">
                  <p class="weaverz-ai-font-opensans weaverz-ai-stowe-pragraph">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            <div class="weaverz-ai-w-full weaverz-ai-overflow-hidden sm:weaverz-ai-w-full md:weaverz-ai-w-5/12 lg:weaverz-ai-w-5/12 xl:weaverz-ai-w-5/12 md:weaverz-ai-order-2 sm:weaverz-ai-order-1 weaverz-ai-order-1">
              <img src={entityImage}
                // srcSet={data?.images?.imageSet?.small?.srcSet}
                // sizes={data?.images?.imageSet?.small?.sizes} 
                class="weaverz-ai-img-auto weaverz-ai-object-contain weaverz-ai-kitchen-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EntityComponent1;

EntityComponent1.propTypes = {
  heading: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  iconImage: propTypes.string,
  entityImage: propTypes.string,
  orientation: propTypes.string,
  showCompId : propTypes.bool
};

EntityComponent1.defaultProps = {
  showCompId : true,
  orientation: 'r',
  heading: "Save time with easy cleaning",
  description:
    "With the easy-clean lining, you can spend less time removing grease and dirt from your appliance. That way, you can utilise the saved time for creating culinary masterpieces.",
  iconImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/baec6461b0d69dde1b861aefbe375d8a/f718499c1c8cef6730f9fd03c8125cab/4a2a0e91490091a6b26a7272ab74ffae.png",
  entityImage:
    "https://d2zymw45q71xpy.cloudfront.net/static/ce65075f393b1916e66fa833cf299be0/3b721cb7a1d698d720cd1ba1c4e43a59/07214c6750d983a32e0a33da225c4efd/e3810e13cc6dc8d4dc5263e182c0f53d/eb5c1399a871211c7e7ed732d15e3a8b/cee631121c2ec9232f3a2f028ad5c89b/0392818b32472a09b84f2b13908c1243.png",
};
