import React from "react";
import propTypes from "prop-types";
export const ImageModule1 = (props) => {
  const { entityImage, entitySrcSet, entitySizes } = props;

  return (
    <>
      <section id="weaveroo-image-module-1">
        <div class="weaverz-ai-flex weaverz-ai-flex-wrap weaverz-ai-overflow-hidden">
          <div class="weaverz-ai-full weaverz-ai-overflow-hidden">
            <img
              src={entityImage}
              srcSet={entitySrcSet}
              sizes={entitySizes}
              alt={"entity"}
              className="weaverz-ai-h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

ImageModule1.propTypes = {
  entityImage: propTypes.string,
  entitySrcSet: propTypes.string,
  entitySizes: propTypes.string,
};

ImageModule1.defaultProps = {
  entityImage: "https://weaver-testing.s3.ap-south-1.amazonaws.com/Currys/shoeDetails2.png",
  entitySrcSet: "",
  entitySizes: "",
};
