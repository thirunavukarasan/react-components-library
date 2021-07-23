import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="weaverz-ai-bg-white weaverz-ai-h-full weaverz-ai-shadow-sm weaverz-ai-rounded-md weaverz-ai-overflow-hidden">
      <div className="weaverz-ai-bg-white-300">
        <picture>
          <source srcSet={props.entitySrcSet} />
          <img
            loading="eager"
            className="hero-image"
            srcSet={props.entitySrcSet}
            src={props.entityImage}
            alt={"entityItem"}
            style={{
              width: "100%",
              height:
                props.cardLength && props.cardLength === "2"
                  ? "225px"
                  : "175px",
            }}
          />
        </picture>
      </div>
      <div className="weaverz-ai-grid weaverz-ai-grid-cols-3">
        <div className="weaverz-ai-grid-cols-1">
          <img
            className="features-icon"
            srcSet={''}
            src={props.iconImage}
            alt="icons"
            style={{
              height:
                props.cardLength && props.cardLength === "2" ? "80px" : "80px",
            }}
          />
        </div>
        <div className="weaverz-ai-grid-col-start-1 weaverz-ai-col-span-2">
          <span className="weaverz-ai-features-h  weaverz-ai-leading-snug">
            {props.heading}
          </span>
        </div>
      </div>
      <div className="weaverz-ai-p-2">
        <p className="weaverz-ai-features-p weaverz-ai-mb-1 weaverz-ai-font-medium weaverz-ai-text-left">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
